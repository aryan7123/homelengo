"use server";

import { PrismaClient } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";
import { writeFile } from "fs/promises";
import { join } from "path";

const prisma = new PrismaClient();

export async function POST(req: NextRequest) {
  try {
    const formData: FormData = await req.formData();

    const amenities = formData.getAll("amenities[]") as string[];
    const files = formData.getAll("photos") as File[];
    const title = formData.get("title") as string;
    const description = formData.get("description") as string;
    const fullAddress = formData.get("fullAddress") as string;
    const country = formData.get("country") as string;
    const provinceState = formData.get("provinceState") as string;
    const neighbourhood = formData.get("neighbourhood") as string;
    const zipCode = formData.get("zipCode") as string;
    const location = formData.get("location") as string;
    const price = formData.get("price") as string;
    const unitPrice = formData.get("unitPrice") as string;
    const beforePrice = formData.get("beforePrice") as string;
    const afterPrice = formData.get("afterPrice") as string;
    const propertyType = formData.get("propertyType") as string;
    const propertyStatus = formData.get("propertyStatus") as string;
    const propertyLabel = formData.get("propertyLabel") as string;
    const size = formData.get("size") as string;
    const landArea = formData.get("landArea") as string;
    const propertyId = formData.get("propertyId") as string;
    const rooms = formData.get("rooms") as string;
    const bedrooms = formData.get("bedrooms") as string;
    const bathrooms = formData.get("bathrooms") as string;
    const garage = formData.get("garage") as string;
    const garageSize = formData.get("garageSize") as string;
    const yearBuilt = formData.get("yearBuilt") as string;
    const idValue = formData.get("id") as string;

    const propertyIdInt = parseInt(idValue);

    const fileUrls: string[] = [];

    // Ensure amenities is correctly processed
    let amenityArr: string[] = [];
    if (Array.isArray(amenities)) {
      amenityArr = [...amenities];
    } else if (typeof amenities === "string") {
      try {
        amenityArr = JSON.parse(amenities);
      } catch (error) {
        console.error("Error parsing amenities JSON:", error);
      }
    }

    // Process multiple files correctly
    if (files.length > 0) {
      for (const file of files) {
        if (!file) continue; // Skip if no file

        console.log(`Processing file: ${file.name}`); // Debugging

        try {
          const bytes = await file.arrayBuffer();
          const buffer = Buffer.from(bytes);

          // Unique filename to prevent overwriting
          const uniqueFileName = `${Date.now()}-${file.name}`;
          const filePath = join("public", "uploads", uniqueFileName);

          // Write file to disk
          await writeFile(filePath, buffer);

          // Save relative path
          fileUrls.push(`/uploads/${uniqueFileName}`);
        } catch (error) {
          console.error(`Error saving file ${file.name}:`, error);
        }
      }
    }

    const existingProperty = await prisma.property.findUnique({
      where: { id: propertyIdInt },
    });

    if (!existingProperty) {
      return NextResponse.json({
        success: false,
        message: "Property not found",
      });
    }

    const updateProperty = await prisma.property.update({
      where: {
        id: propertyIdInt,
      },
      data: {
        title: title,
        description: description,
        photos: fileUrls,
        amenities: amenityArr,
        fullAddress: fullAddress,
        location: location,
        country: country,
        zipCode: zipCode,
        provinceState: provinceState,
        neighbourhood: neighbourhood,
        price: price,
        unitPrice: unitPrice,
        afterPrice: afterPrice,
        beforePrice: beforePrice,
        propertyId: propertyId,
        propertyLabel: propertyLabel,
        propertyStatus: propertyStatus,
        propertyType: propertyType,
        rooms: rooms,
        bedrooms: bedrooms,
        bathrooms: bathrooms,
        garage: garage,
        garageSize: garageSize,
        size: size,
        landArea: landArea,
        yearBuilt: yearBuilt,
      },
    });

    return NextResponse.json({ success: true, property: updateProperty });
  } catch (error) {
    console.error(error);
  }
}
