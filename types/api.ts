import { Prisma } from "@prisma/client";

export type Item = Prisma.ItemGetPayload<{
  include: { category: true };
}>;

export type Catagory = Prisma.CategoryGetPayload<{
  include: { items: true };
}>;

export type Order = Prisma.OrderGetPayload<{
  include: { amounts: true; delivery: true; user: true };
}>;

export type Delivery = Prisma.DeliveryGetPayload<{
  include: { orders: true; items: true };
}>;

export interface ItemFrontend {
  [key: string]: {
    id: string;
    amount: number;
  };
}

export interface CatagoryFrontend {
  [key: string]: ItemFrontend;
}

export interface OrderFrontend {
  catagories: CatagoryFrontend;
}

export interface DeliveryFrontend {
  id: string;
  amount: number;
  deadline: Date;
  order: OrderFrontend;
}
