"use server";

import { PrismaClient } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";

const prisma = new PrismaClient();

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    const getBlog = await prisma.blog.findUnique({
      where: {
        id: Number(body.blogId),
      },
      include: {
        author: {
          select: {
            fullName: true,
          },
        },
      },
    });

    if(getBlog) {
        return NextResponse.json({ blog: getBlog, message: "Blog Details Fetched" });
    }
    else {
        return NextResponse.json({ blog: getBlog, message: "Blog Details Can't be Fetched" });
    }
  } catch (error) {
    console.log(error);
  }
}
