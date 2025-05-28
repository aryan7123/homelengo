"use server";

import { PrismaClient } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";

const prisma = new PrismaClient();

export async function POST(request: NextRequest) {
  try {
    const response = await request.json();
    const { propertyId, userId } = response;

    const likePropertyFn = await prisma.user.update({
      where: { id: userId },
      data: {
        likedProperties: {
          connect: { id: propertyId },
        },
      },
    });

    return NextResponse.json({ likePropertyFn: likePropertyFn, message: "You liked this property!" });
  } catch (error) {
    console.log(error);
  }
}
