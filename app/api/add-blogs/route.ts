"use server";

import { PrismaClient } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";
import { writeFile } from "fs/promises";
import { join } from "path";

const prisma = new PrismaClient();

export async function POST(req: NextRequest) {
  try {
    const formData: FormData = await req.formData();

    const title = formData.get("title") as string;
    const category = formData.get("category") as string;
    const description = formData.get("description") as string;
    const userId = formData.get("userId") as string;

    const tags = formData.getAll("tags") as string[];
    const photos = formData.getAll("photos") as File[];

    let tagsArr: string[] = [];
    if (tags && tags.length > 0) {
      // Filter out empty strings and process each tag
      tagsArr = tags.filter((tag) => tag && tag.trim() !== "");
    }

    const fileUrls: string[] = [];

    if (photos && photos.length > 0) {
      for (const file of photos) {
        console.log("Processing file:", file.name, file.size);
        if (!file || !(file instanceof File) || file.size === 0) {
          console.log("Skipping invalid file:", file);
          continue;
        }

        const bytes = await file.arrayBuffer();
        const buffer = Buffer.from(bytes);
        const uniqueFileName = `${Date.now()}-${file.name}`;
        const filePath = join(process.cwd(), "public", "blogs", uniqueFileName);

        await writeFile(filePath, buffer);
        fileUrls.push(`/blogs/${uniqueFileName}`);
      }
    }

    const saveBlog = await prisma.blog.create({
      data: {
        title,
        category,
        description,
        authorId: Number(userId),
        tags: tagsArr,
        photos: fileUrls,
      },
    });

    return NextResponse.json({
      blog: saveBlog,
      message: "Blog Added Successfully",
    });
  } catch (error) {
    console.error("Error creating blog:", error);
    return NextResponse.json(
      { message: "Something went wrong" },
      { status: 500 }
    );
  }
}
