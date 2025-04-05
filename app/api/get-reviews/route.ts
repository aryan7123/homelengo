"use server";

import { PrismaClient } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";

const prisma = new PrismaClient();

export async function POST(request: NextRequest) {
    try {
        const response = await request.json();
        const { propertyId } = response;

        const getReviews = await prisma.review.findMany({
            where: {
                propertyId: Number(propertyId)
            }
        });

        if(getReviews.length > 0) {
            return NextResponse.json({
                sucess: true,
                review: getReviews,
                message: "Review fetched successfully",
            });
        }
        else {
            return NextResponse.json({ message: "No reviews found for this property" });
        }
    } catch (error) {
        console.error(error);
    }
}