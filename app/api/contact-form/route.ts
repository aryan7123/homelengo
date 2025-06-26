"use server";

import { PrismaClient } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

const prisma = new PrismaClient();

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    if (!body || !body.contactForm) {
      return NextResponse.json(
        { message: "Invalid or missing contact form data" },
        { status: 400 }
      );
    }

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
          formMessage: form_message,
        },
      });

      if (insertContactForm) {
        const transporter = nodemailer.createTransport({
          host: "smtp.gmail.com",
          port: 465,
          secure: true,
          auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS,
          },
        });

        const mailOptions = {
          from: process.env.EMAIL_USER,
          to: email_address,
          subject: `Thank you for contacting us - ${subject}`,
          text: "Thank you for using our services!",
          html: form_message.replace(/\n/g, "<br>"),
        };

        try {
          /* nodemailer returns a Promise if you omit the callback */
          const info = await transporter.sendMail(mailOptions);

          return NextResponse.json(
            {
              success: true,
              messageId: info.messageId,
              formDetails: insertContactForm,
              message: "Contact form saved and e-mail sent",
            },
            { status: 200 }
          );
        } catch (err) {
          console.error("Error sending e-mail:", err);

          return NextResponse.json({
            success: true, // DB write still succeeded
            formDetails: insertContactForm,
            message:
              "Contact Form Details submitted successfully (e-mail delivery failed)",
          });
        }
      } else {
        return NextResponse.json(
          { message: "Contact Form details can't be submitted" },
          { status: 500 }
        );
      }
    }
  } catch (error) {
    console.error("Contact-form POST failed:", error);

    return NextResponse.json(
      {
        success: false,
        error: "Server error while processing contact form",
      },
      { status: 500 }
    );
  }
}
