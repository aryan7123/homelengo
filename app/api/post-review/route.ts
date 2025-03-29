"use server";

import { PrismaClient, Review } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";

const prisma = new PrismaClient();

export async function POST(request: NextRequest) {
  try {
    const response = await request.json();
    const { name, postComment, rating, propertyId, userId } = response;

    const newReview: Review = await prisma.review.create({
      data: {
        username: name ?? "",
        comment: postComment ?? "",
        rating,
        propertyId,
        userId,
      },
    });

    return NextResponse.json({
      sucess: true,
      review: newReview,
      message: "Review submitted successfully",
    });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ message: "Review cannot be submitted" });
  }
}
