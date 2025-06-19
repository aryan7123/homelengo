"use server";

import { PrismaClient } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";
import { writeFile } from "fs/promises";
import { join } from "path";

const prisma = new PrismaClient();

export async function POST(req: NextRequest) {
  try {
    const formData = await req.formData();

    const userId = formData.get("userId") as string;
    const fullName = formData.get("fullName") as string;
    const description = formData.get("description") as string;
    const occupation = formData.get("occupation") as string;
    const phoneNumber = formData.get("phoneNumber") as string;
    const address = formData.get("address") as string;
    const avatar = formData.get("avatar") as File;

    const user = await prisma.user.findUnique({
      where: { id: Number(userId) },
    });

    if (!user) {
      return NextResponse.json({ message: "User not found*" });
    }
    if (!fullName) {
      return NextResponse.json({ message: "Full Name is empty*" });
    }
    if (!description) {
      return NextResponse.json({ message: "Description is empty*" });
    }
    if (!occupation) {
      return NextResponse.json({ message: "Occupation is empty*" });
    }
    if (!phoneNumber) {
      return NextResponse.json({ message: "Phone Number is empty*" });
    }
    if (!address) {
      return NextResponse.json({ message: "Address is empty*" });
    }
    if (user) {
      let avatarPath = null;

      if (avatar && avatar.size > 0) {
      const bytes = await avatar.arrayBuffer();
      const buffer = Buffer.from(bytes);

      // Generate unique filename
      const uniqueFileName = `${Date.now()}-${avatar.name}`;
      const filePath = join(process.cwd(), "public", "avatar", uniqueFileName);

      // Write file to disk
      await writeFile(filePath, buffer);

      // Save relative path for database
      avatarPath = `/avatar/${uniqueFileName}`;
    }

      const dataToUpdate = {
        fullName,
        description,
        occupation,
        phoneNumber,
        address
      };

      if (avatarPath) {
        dataToUpdate.avatar = avatarPath;
      }

      const updateUserDetails = await prisma.user.update({
        where: { id: user.id },
        data: dataToUpdate,
      });

      if (updateUserDetails) {
        return NextResponse.json({
          message: "Details updated successfully",
          avatarPath: avatarPath,
        });
      } 
      else {
        return NextResponse.json({ message: "Details cannot be updated*" });
      }
    } 
    else {
      return NextResponse.json({
        message: "Something went wrong. Please try again later*",
      });
    }
  } catch (error) {
    console.error(error);
  }
}
