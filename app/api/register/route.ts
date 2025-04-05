import { NextResponse } from "next/server";
import bcrypt from "bcrypt";
import prisma from '@/server/db'

export async function POST(req: Request) {
  const { email, password } = await req.json();

  if (!email || !password) {
    return NextResponse.json({ error: "Champs requis" }, { status: 400 });
  }

  const hashedPassword = await bcrypt.hash(password, 10);
  try {
    const user = await prisma.user.create({
      data: { email, password: hashedPassword },
    });

    return NextResponse.json(user);
  } catch (error) {
    return NextResponse.json(
      { error: 'User already exists' },
      { status: 400 }
    )
  }
}
