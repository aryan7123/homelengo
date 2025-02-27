"use server";

import { PrismaClient } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";

const prisma = new PrismaClient();

export async function POST(req: NextRequest) {
    try {
        const response = await req.json();
        const { propertyValue } = response;

        if(propertyValue === "Apartment" || propertyValue === "Villa" || propertyValue === "Office" || propertyValue === "Townhouse" || propertyValue === "Studio") {
            const fetchedPropertyByType = await prisma.property.findMany({
                where: {
                    propertyType: propertyValue as string
                }
            });
            return NextResponse.json({ properties: fetchedPropertyByType });
        }
        else {
            const allProperties = await prisma.property.findMany({ take: 6 });
            return NextResponse.json({ properties: allProperties });
        }
    } catch (error) {
        console.error(error);
    }
}