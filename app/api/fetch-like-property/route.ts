"use server";

import { PrismaClient } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";

const prisma = new PrismaClient();

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { userId, propertyId } = body;

    const user = await prisma.user.findUnique({
      where: { id: Number(userId) },
      select: {
        likedProperties: {
          select: { id: true },
        },
      },
    });

    const hasLiked = user?.likedProperties.some(
      (property) => property.id === Number(propertyId)
    );

    if (hasLiked) {
      return NextResponse.json({
        liked: true,
        likedProperties: user?.likedProperties,
        message: "You have liked this property",
      });
    } else {
      return NextResponse.json({
        liked: false,
        message: "You have not liked this property",
      });
    }
  } catch (error) {
    console.error(error);
  }
}
