import { db } from "@/src/db";
import { NextResponse } from "next/server";

export const GET = async () => {
  const withCategory = {
    include: {
      category: true,
    },
  };

  const withItem = {
    include: {
      item: withCategory,
    },
  };

  const withAmounts = {
    include: {
      amounts: withItem,
    },
  };

  const args = {
    include: {
      orders: withAmounts,
      items: withCategory,
    },
  };

  const deliveries = await db.delivery.findMany(args);

  return NextResponse.json({ deliveries });
};

export const POST = async (request: Request) => {
  const body = await request.json();

  const delivery = await db.delivery.create({ data: body });
  return NextResponse.json({ delivery });
};

export const DELETE = async (request: Request) => {
  const { id } = await request.json();
  await db.delivery.delete({ where: { id } });

  return new NextResponse(null, { status: 204 });
};
