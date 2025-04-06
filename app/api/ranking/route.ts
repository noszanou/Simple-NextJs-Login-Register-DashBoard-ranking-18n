import { NextResponse } from "next/server";
import prisma from '@/server/db'

export async function GET() {
  const players = await prisma.player.findMany({
    orderBy: { score: "desc" },
    take: 10,
  });

  return NextResponse.json(players);
}
