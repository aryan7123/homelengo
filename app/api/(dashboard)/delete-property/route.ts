"use server";

import { PrismaClient } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";

const prisma = new PrismaClient();

export async function DELETE(req: NextRequest) {
    try {
        const body = await req.json();

        const deleteProperty = await prisma.property.delete({
            where: {
                id: body.id
            }
        });

        return NextResponse.json({ data: deleteProperty, message: "Property Removed Successfully" });
    } catch (error) {
        console.error(error);
    }
}