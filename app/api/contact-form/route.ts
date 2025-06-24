"use server";

import { PrismaClient } from '@prisma/client';
import { NextRequest, NextResponse } from 'next/server';

const prisma = new PrismaClient();

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { full_name, email_address, phone_number, subject, form_message } = body.contactForm;

    if (!full_name) {
      return NextResponse.json({ message: "Full Name is required" });
    } else if (!email_address) {
      return NextResponse.json({ message: "Email Address is required" });
    } else if (!phone_number) {
      return NextResponse.json({ message: "Phone Number is required" });
    } else if (!subject) {
      return NextResponse.json({ message: "Subject is required" });
    } else if (!form_message) {
      return NextResponse.json({ message: "Please write the message" });
    } else {
      const insertContactForm = await prisma.contact.create({
        data: {
          fullName: full_name,
          email: email_address,
          phoneNumber: phone_number,
          subject: subject,
          formMessage: form_message
        }
      });

      if (insertContactForm) {
        return NextResponse.json({
          formDetails: insertContactForm,
          message: "Contact Form Details Submitted Successfully",
        });
      } else {
        return NextResponse.json({
          message: "Contact Form details can't be submitted",
        });
      }
    }
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { message: "Internal server error" }, 
      { status: 500 }
    );
  }
}