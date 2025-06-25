"use server";

import { PrismaClient } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

const prisma = new PrismaClient();

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    
    if (!body || !body.contactForm) {
      return NextResponse.json({ message: "Invalid or missing contact form data" }, { status: 400 });
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
        // Email configuration
        const transporter = nodemailer.createTransport({
          host: process.env.EMAIL_HOST,
          port: parseInt(process.env.EMAIL_PORT || "587"),
          secure: process.env.EMAIL_PORT === "465" ? true: false, // true for 465, false for other ports
          auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS,
          },
        });

        // Send email with proper error handling
        try {
          const info = await transporter.sendMail({
            from: process.env.EMAIL_USER,
            to: email_address,
            subject: `Thank you for contacting us - ${subject}`,
            html: `
            <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
              <h2 style="color: #333;">Thank you for your message!</h2>
              <p>Hi ${full_name},</p>
              <p>We have received your message and will get back to you soon.</p>
              
              <div style="background-color: #f5f5f5; padding: 20px; border-radius: 5px; margin: 20px 0;">
                <h3>Your message:</h3>
                <p><strong>Subject:</strong> ${subject}</p>
                <p><strong>Message:</strong></p>
                <p>${form_message.replace(/\n/g, "<br>")}</p>
              </div>
              
              <p>Best regards,<br>Your Support Team</p>
            </div>
          `,
          });

          return NextResponse.json({
            success: true,
            messageId: info.messageId,
            formDetails: insertContactForm,
            message: "Contact Form Details Submitted Successfully and email sent",
          });
        } catch (emailError) {
          console.error("Email sending error:", emailError);

          // Even if email fails, we still saved the form data
          return NextResponse.json({
            success: true,
            formDetails: insertContactForm,
            message: "Contact Form Details Submitted Successfully (email delivery failed)",
            emailError: "Failed to send confirmation email",
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
    console.log(error);
  }
}
