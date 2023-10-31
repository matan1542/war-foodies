import { db } from "@/app/db";
import { Prisma } from "@prisma/client";
import { NextResponse } from "next/server";

export const GET = async () => {
  const deliveries = await db.delivery.findMany();
  return NextResponse.json({ deliveries });
};

export const DELETE = async (request: Request) => {
  const { id } = await request.json();
  await db.delivery.delete({ where: { id } });

  return new NextResponse(null, { status: 204 });
};
