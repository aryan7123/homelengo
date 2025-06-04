"use server";

import { PrismaClient } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";

const prisma = new PrismaClient();

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    const { propertyId, userId } = body;

    if(propertyId && userId) {
      const likePropertyFn = await prisma.user.update({
        where: { id: Number(userId) },
        data: {
          likedProperties: {
            connect: { id: Number(propertyId) },
          },
        },
      });
      return NextResponse.json({ likePropertyFn: likePropertyFn, message: "You liked this property!" });
    }
    else {
      return NextResponse.json({ message: "You must login to your account to like a property" });
    }
  } catch (error) {
    console.error(error);
  }
}
