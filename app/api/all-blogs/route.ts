"use server";

import { PrismaClient } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";

const prisma = new PrismaClient();

export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    const search = searchParams.get("search");

    const blogs = await prisma.blog.findMany({
      where: search
        ? {
            title: {
              contains: search,
              mode: "insensitive",
            },
          }
        : undefined,
      include: {
        author: {
          select: {
            fullName: true,
          },
        },
      },
    });

    if (blogs.length > 0) {
      return NextResponse.json({
        blogs: blogs,
        message: "Blogs successfully found",
      });
    } else {
      return NextResponse.json({
        message: "No Blogs Found",
      });
    }
  } catch (error) {
    console.log(error);
  }
}
