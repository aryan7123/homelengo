"use server";

import { PrismaClient } from "@prisma/client";
import { compare, hash } from "bcryptjs";
import { NextRequest, NextResponse } from "next/server";

const prisma = new PrismaClient();

export async function POST(req: NextRequest) {
    try {
        const body = await req.json();
        const { userId, old_password, new_password, confirm_password } = body;

        const user = await prisma.user.findUnique({
            where: {
                id: Number(userId)
            }
        });

        const isPasswordValid = await compare(old_password, user.password);

        if(!old_password) {
            return NextResponse.json({ message: "Old Password is empty" });
        }

        else if(!new_password) {
            return NextResponse.json({ message: "New Password is empty" });
        }

        else if(!confirm_password) {
            return NextResponse.json({ message: "Confirm Password is empty" });
        }

        else if(!isPasswordValid) {
            return NextResponse.json({ message: "Password is incorrect" });
        }

        else if (new_password !== confirm_password) {
            return NextResponse.json({ message: "Your new password did'nt matched" });
        }

        else {
            const hashedPassword = await hash(new_password, 12);
            const newPassword = await prisma.user.update({
                where: {
                    id: Number(userId)
                },
                data: {
                    password: hashedPassword
                }
            });
            return NextResponse.json({ message: "Password updated successfully" });
        }

    } catch (error) {
        console.log(error);
    }
}