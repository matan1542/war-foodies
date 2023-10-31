"use client";

import { auth0UserContext } from "@/types/userContext";
import { useUser, withPageAuthRequired } from "@auth0/nextjs-auth0/client";
import Layout from "./components/Layout";
import Deliveries from "./components/Deliveries";
import { dataDevlivries } from "../data";
import { useContext, useEffect } from "react";
import { DeliveryContext } from "./components/Delivery/deliveryProvider";
import DeliveryInfo from "./components/DeliveryInfo";

const Home = () => {
  const { deliveries, handleDeliveries } = useContext(DeliveryContext);
  const { user } = useUser() as auth0UserContext;

  useEffect(() => {
    handleDeliveries(dataDevlivries);
  }, []);

  if (!deliveries) return <div></div>;

  return (
    <Layout>
      <DeliveryInfo />
      <Deliveries deliveries={deliveries} />
    </Layout>
  );
};

export default withPageAuthRequired(Home, {
  returnTo: "/login",
});
