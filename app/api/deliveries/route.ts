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

  const withOrders = {
    include: {
      orders: withAmounts,
    },
  };

  const data = await db.delivery.findMany(withOrders);

  const deliveries = data.map((delivery) => {
    const amounts = delivery.orders.flatMap((o) => o.amounts);
    const categories = {} as Record<string, any>;

    for (const amount of amounts) {
      const { name: categoryName } = amount.item.category;
      const { name: itemName } = amount.item;

      const category = categories[categoryName] || {};
      const items = category[itemName] || [];
      items.push(amount);

      category[itemName] = items;
      categories[categoryName] = category;
    }

    return { ...delivery, categories };
  });

  return NextResponse.json({ deliveries });
};

export const DELETE = async (request: Request) => {
  const { id } = await request.json();
  await db.delivery.delete({ where: { id } });

  return new NextResponse(null, { status: 204 });
};
