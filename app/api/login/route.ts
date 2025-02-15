"use server";

import { PrismaClient } from "@prisma/client";
import { compare } from "bcryptjs";

const prisma = new PrismaClient();

export async function login(formData: FormData) {
  const email = formData.get("email_address") as string;
  const password = formData.get("password") as string;

  const errors: FieldErrors = {};

  if (!email) {
    errors.email = "Email is required";
  } else if (!/^\S+@\S+\.\S+$/.test(email)) {
    errors.email = "Invalid email address";
  }

  if (!password) {
    errors.password = "Password is required";
  } else if (password.length < 6) {
    errors.password = "Password must be at least 6 characters long";
  }

  if (Object.keys(errors).length > 0) {
    return { errors };
  }

  try {
    const user = await prisma.user.findUnique({
      where: { email },
    });

    const isPasswordValid = await compare(password, user.password)

    if (!user?.email) {
      return { errors: { email: "Email address is unavailable" } };
    }
    if(!isPasswordValid) {
      return { errors: { password: "Password is incorrect" } };
    }

    return { success: true, message: "Login Successfull!" };
  } catch (error) {
    console.error("Registration error:", error);
    return {
      errors: { server: "An unexpected error occurred. Please try again." },
    };
  }
}
