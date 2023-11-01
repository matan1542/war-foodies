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

  const args = {
    include: {
      amounts: withItem,
    },
  };

  const orders = await db.order.findMany(args);

  return NextResponse.json({ orders });
};

export const POST = async (request: Request) => {
  const body = await request.json();

  const delivery = await db.order.create({ data: body });
  return NextResponse.json({ delivery });
};

export const PUT = async (request: Request) => {
  const body = await request.json();

  const delivery = await db.order.update({
    where: { id: body.id },
    data: body,
  });
  return NextResponse.json({ delivery });
};
