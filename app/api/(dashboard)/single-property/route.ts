"use server";

import { PrismaClient } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";

const prisma = new PrismaClient();

export async function POST(req: NextRequest) {
    try {
        const response = await req.json();
        const { propertyId } = response;

        const allProperties = await prisma.property.findUnique({
            where: {
                id: Number(propertyId)
            }
        });
        return NextResponse.json({ status: 200, property: allProperties });
    } catch (error) {
        console.error(error);
    }
}