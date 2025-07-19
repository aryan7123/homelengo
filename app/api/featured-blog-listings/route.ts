"use server";

import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

const prisma = new PrismaClient();

export async function GET() {
  try {
    const count = await prisma.blog.count();
    const randomOffset = Math.floor(Math.random() * count);

    const randomBlogs = await prisma.blog.findMany({
      select: {
        id: true,
        title: true,
        photos: true,
        createdAt: true,
      },
      skip: randomOffset,
      take: 3,
    });

    if (randomBlogs) {
      return NextResponse.json({ randomBlogs: randomBlogs });
    } else {
      return NextResponse.json({ message: "Featured Blogs not found" });
    }
  } catch (error) {
    console.log(error);
  }
}
