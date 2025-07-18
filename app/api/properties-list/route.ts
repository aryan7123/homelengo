"use server";

import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

const prisma = new PrismaClient();

export async function GET() {
  try {
    const allProperties = await prisma.property.findMany();

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
