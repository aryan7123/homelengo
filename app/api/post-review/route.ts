"use server";

import { PrismaClient } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";

const prisma = new PrismaClient();

export async function POST(request: NextRequest) {
  try {
    const response = await request.json();
    const { username, postComment, rating, propertyId, userId } = response;

    const existingReview = await prisma.review.findFirst({
      where: {
        propertyId: propertyId,
        userId: userId,
      },
    });

    if (existingReview) {
      return NextResponse.json({ message: "You have already submitted a review for this property" });
    }

    const newReview = await prisma.review.create({
      data: {
        username,
        comment: postComment,
        rating,
        property: { connect: { id: propertyId } },
        user: { connect: { id: userId } },
      },
      include: {
        user: true,
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
