"use server";

import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

const prisma = new PrismaClient();

export async function GET() {
  try {
    const reviews = await prisma.review.findMany({
      take: 5,
      select: { rating: true, comment: true, username: true },
    });

    if (reviews.length > 0) {
      return NextResponse.json({
        reviews: reviews,
        message: "Reviews successfully found",
      });
    } else {
      return NextResponse.json({
        message: "No Reviews Found",
      });
    }
  } catch (error) {
    console.log(error);
  }
}
