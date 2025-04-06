import { NextResponse } from "next/server";
import bcrypt from "bcrypt";
import prisma from '@/server/db'
import { z } from "zod";
import { registerSchema } from "@/types/zod/register";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const parsed = registerSchema.parse(body);
    const hashedPassword = await bcrypt.hash(parsed.password, 10);

    const user = await prisma.user.create({
      data: {
        email: parsed.email,
        password: hashedPassword,
      },
    });

    return NextResponse.json(user);
  } catch (error) {

    if (error instanceof z.ZodError) {
      return NextResponse.json({
        error: error.errors.map((e) => e.message).join(", "),
      }, { status: 400 });
    }

    return NextResponse.json({
      error: "User already exists"
    }, { status: 400 });
  }
}