"use server";

import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

const prisma = new PrismaClient();

export async function GET() {
    try {
        const allProperties = await prisma.property.findMany();
        return NextResponse.json({ status: 200, property: allProperties });
    } catch (error) {
        console.error(error);
    }
}