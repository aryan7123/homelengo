"use server";

import { PrismaClient } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";

const prisma = new PrismaClient();

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { userId, fullName, description, occupation, phoneNumber, address } = body;

    const user = await prisma.user.findUnique({
      where: { id: Number(userId) },
    });

    if (user) {
      const updateUserDetails = await prisma.user.update({
        where: { id: Number(userId) },
        data: {
          fullName,
          description,
          occupation,
          phoneNumber: parseInt(phoneNumber),
          address,
        },
      });

      return NextResponse.json({ updateUserDetails, message: "Details updated successfully" });
    } else {
      return NextResponse.json({ message: "User not found" });
    }
  } catch (error) {
    console.error("API Error:", error);
  }
}

