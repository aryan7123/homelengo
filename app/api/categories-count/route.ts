"use server";

import { PrismaClient } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";

const prisma = new PrismaClient();

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { categories } = body;

    const groupedCounts = await prisma.blog.groupBy({
      by: ["category"],
      where: {
        category: {
          in: categories,
        },
      },
      _count: {
        category: true,
      },
    });

    if(groupedCounts) {
        return NextResponse.json({ groupedCounts });
    }
    else {
        return NextResponse.json({ message: "Grouped Counts not found" });
    }

  } catch (error) {
    console.log(error);
  }
}
