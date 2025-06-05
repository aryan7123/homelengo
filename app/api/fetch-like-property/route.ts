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
          select: {
            id: true,
          },
        },
      },
    });

    const property = await prisma.property.findUnique({
      where: { id: Number(propertyId) },
      select: {
        likedByUsers: {
          select: {
            id: true,
          },
        },
      },
    });

    if (user && property) {
      return NextResponse.json(user.likedProperties, { status: 200 });
    } else {
      return NextResponse.json({ message: "You have not liked this property" });
    }
  } catch (error) {
    console.error(error);
  }
}
