import { NextResponse } from "next/server";
import prisma from '@/server/db'

export async function GET() {
  const players = await prisma.player.findMany({
    orderBy: { score: "desc" },
    take: 10,
  });

  players.forEach(player => {
    console.log(`Player Name: ${player.name}, Score: ${player.score}`);
  });

  return NextResponse.json(players);
}
