"use server";

import { PrismaClient } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";

const prisma = new PrismaClient();

export async function POST(request: NextRequest) {
    try {
        const response = await request.json();
        const { propertyId, userId } = response;

        
    } catch (error) {
        console.log(error);
    }
}