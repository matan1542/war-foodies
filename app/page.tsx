"use client";

import { Auth0UserContext } from "@/types/userContext";
import { useUser, withPageAuthRequired } from "@auth0/nextjs-auth0/client";
import Layout from "./components/Layout";
import Deliveries from "./components/Deliveries";
import { dataDeliveries } from "../data";
import DeliveryInfo from "./components/DeliveryInfo";
import { Amount, Delivery, Item } from "@/types/api";
import { TransformedCategory, TransformedDelivery } from "@/types/ui";

const transformDeliveries = (deliveries: Delivery[]): TransformedDelivery[] => {
  return deliveries.map((delivery) => {
    const { items, orders } = delivery;
    const item2amounts = orders
      .flatMap((o) => o.amounts)
      .reduce(
        (acc, amount) => {
          const amounts = acc[amount.item.id] || [];
          amounts.push(amount);
          return { ...acc, [amount.item.id]: amounts };
        },
        {} as Record<string, Amount[]>
      );
    const categories = {} as Record<string, TransformedCategory>;

    for (const item of items) {
      const amounts = item2amounts[item.id] || [];
      const category = categories[item.category.id] || item.category;
      const itemsAndAmounts = category.itemsAndAmounts || {};
      itemsAndAmounts[item.id] = {
        amounts,
        item,
      };
      category.itemsAndAmounts = itemsAndAmounts;
      categories[item.category.id] = category;
    }

    return { ...delivery, categories };
  });
};
const Home = () => {
  const { user } = useUser() as Auth0UserContext;
  const deliveries = transformDeliveries(dataDeliveries);

  return (
    <Layout>
      <span>Hi {user.name}</span>
      <DeliveryInfo />
      <Deliveries deliveries={deliveries} />
    </Layout>
  );
};

export default withPageAuthRequired(Home, {
  returnTo: "/login",
});
