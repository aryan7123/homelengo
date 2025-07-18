"use server";

import { PrismaClient } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";

const prisma = new PrismaClient();

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const allProperties = await prisma.property.findMany({
      where: {
        id: Number(body.userId),
      },
    });

    if (allProperties && allProperties.length > 0) {
      return NextResponse.json({
        message: "Properties Found",
        property: allProperties
      });
    } else {
      return NextResponse.json({
        message: "No Properties found for this user",
        property: [],
      });
    }
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { message: "Internal Server Error" },
      { status: 500 }
    );
  }
}
