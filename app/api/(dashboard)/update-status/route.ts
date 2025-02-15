"use server";

import { PrismaClient } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";

const prisma = new PrismaClient();

export async function PUT(req: NextRequest) {
  try {
    const body = await req.json();

    const { propertyId, status } = body;

    const updatePendingStatus = await prisma.property.update({
      where: {
        id: propertyId
      },
      data: {
        status: status,
      },
    });

    return NextResponse.json({ status: 200, data: updatePendingStatus });
  } catch (error) {
    console.error("Error updating property status:", error);
    return NextResponse.json({ status: 500, message: "Internal Server Error" });
  }
}
