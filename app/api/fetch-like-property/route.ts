"use server";

import { PrismaClient } from "@prisma/client";
import { NextRequest, NextResponse  } from "next/server";

const prisma = new PrismaClient();

export async function POST(request: NextRequest ) {
  try {
    const body = await request.json();
    const { userId } = body;

    if (!userId || isNaN(Number(userId))) {
      return NextResponse.json({ message: "Invalid userId" }, { status: 400 });
    }

    const user = await prisma.user.findUnique({
      where: { id: Number(userId) },
      include: {
        likedProperties: true,
      },
    });

    if (!user) {
      return NextResponse.json({ message: "User not found" }, { status: 404 });
    }

    return NextResponse.json(user.likedProperties, { status: 200 });
  } catch (error) {
    console.error("API Error:", error);
    return NextResponse.json(
      { message: "Server error", error: (error as Error).message },
      { status: 500 }
    );
  }
}
