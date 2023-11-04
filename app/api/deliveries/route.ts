import { db } from "@/src/db";
import { getSession } from "@auth0/nextjs-auth0";
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
  const session = await getSession();
  if (!session?.user.isAdmin) {
    return new NextResponse("Access Denied", { status: 403 });
  }
  const body = await request.json();

  const delivery = await db.delivery.create({ data: body });
  return NextResponse.json({ delivery });
};

export const DELETE = async (request: Request) => {
  const session = await getSession();
  if (!session?.user.isAdmin) {
    return new NextResponse("Access Denied", { status: 403 });
  }

  const { id } = await request.json();
  await db.delivery.delete({ where: { id } });

  return new NextResponse(null, { status: 204 });
};
