'use server';

import { PrismaClient } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";

const prisma = new PrismaClient();

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { userId } = body;

    const user = await prisma.user.findUnique({
      where: { id: Number(userId) },
      select: {
        likedProperties: {
          select: { id: true },
        },
      },
    });
    return NextResponse.json({ properties: user?.likedProperties });
  } catch (error) {
    console.error(error);
  }
}