"use server";

import { PrismaClient } from "@prisma/client";
import { revalidatePath } from "next/cache";
import { NextRequest, NextResponse } from "next/server";

const prisma = new PrismaClient();

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { userId, fullName, description, occupation, phoneNumber, address } = body;

    const user = await prisma.user.findUnique({
      where: { id: Number(userId) },
    });

    if(!fullName) {
      return NextResponse.json({ message: "Full Name is empty*" });
    }
    else if(!description) {
      return NextResponse.json({ message: "Description is empty*" });
    }
    else if(!occupation) {
      return NextResponse.json({ message: "Occupation is empty*" });
    }
    else if(!phoneNumber) {
      return NextResponse.json({ message: "Phone Number is empty*" });
    }
    else if(!address) {
      return NextResponse.json({ message: "Address is empty*" });
    }
    else if (user) {
      const dataToUpdate = {
        ...(fullName !== undefined && { fullName }),
        ...(description !== undefined && { description }),
        ...(occupation !== undefined && { occupation }),
        ...(phoneNumber !== undefined && { phoneNumber }),
        ...(address !== undefined && { address }),
      };

      const updateUserDetails = await prisma.user.update({
        where: { id: user.id },
        data: dataToUpdate,
      });

      if(updateUserDetails) {
        revalidatePath('/profile');
        return NextResponse.json({ message: "Details updated successfully" });
      }
      else {
        return NextResponse.json({ message: "Details cannot be updated*" });
      }
    }
    else {
      return NextResponse.json({ message: "Something went wrong. Please try again later*" });
    }
  } catch (error) {
    console.error(error);
  }
}
