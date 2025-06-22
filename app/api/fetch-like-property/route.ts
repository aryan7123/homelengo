"use server";

import { PrismaClient } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";

const prisma = new PrismaClient();

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { userId, propertyId } = body;

    if (userId && propertyId) {
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

      return NextResponse.json({
        liked: hasLiked,
        likedProperties: user?.likedProperties,
        message: hasLiked
          ? "You have liked this property"
          : "You have not liked this property",
      });
    } 
    else if (userId) {
      const user = await prisma.user.findUnique({
        where: { id: Number(userId) },
        include: {
          likedProperties: true,
        },
      });

      if (user) {
        return NextResponse.json({
          likedProperties: user.likedProperties,
          message: "All liked properties by a user is fetched",
        });
      } else {
        return NextResponse.json({
          message: "Liked properties not fetched",
        });
      }
    }
  } catch (error) {
    console.error(error);
  }
}
