"use server";

import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

const prisma = new PrismaClient();

export async function GET() {
  try {
    const blogs = await prisma.blog.findMany({
      take: 9,
      include: {
        author: {
          select: {
            fullName: true
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
