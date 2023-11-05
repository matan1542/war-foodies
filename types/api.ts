import { Prisma } from "@prisma/client";

export type Item = Prisma.ItemGetPayload<{
  include: { category: true };
}>;

export type Amount = Prisma.AmountGetPayload<{
  include: { item: { include: { category: true } } };
}>;

export type Category = Prisma.CategoryGetPayload<{
  include: { items: true };
}>;

export type Order = Prisma.OrderGetPayload<{
  include: { amounts: true; delivery: true; user: true };
}>;

export type Delivery = Prisma.DeliveryGetPayload<{
  include: {
    orders: {
      include: {
        amounts: { include: { item: { include: { category: true } } } };
      };
    };
    items: {
      include: { category: true };
    };
  };
}>;
