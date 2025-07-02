"use server";

import { PrismaClient } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";

const prisma = new PrismaClient();

export async function POST(request: NextRequest) {
    try {
        const response = await request.json();
        const { userId } = response;

        const getReviews = await prisma.review.findMany({
            where: {
                userId: Number(userId)
            }
        });

        if(getReviews.length > 0) {
            const totalRating = getReviews.map((item) => item.rating);
            const averageRating = (totalRating.reduce((a, b) => a + b)) / 2;
            return NextResponse.json({
                sucess: true,
                ratings: averageRating,
                message: "Review fetched successfully",
            });
        }
        else {
            return NextResponse.json({
                sucess: true,
                ratings: 0,
                message: "Reviews not found"
            });
        }
    } catch (error) {
        console.error(error);
    }
}