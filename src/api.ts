import { Delivery, Order } from "@prisma/client";
import axios from "axios";
import useSWR from "swr";

export const http = axios.create({ baseURL: "/api" });

interface GetDeliveriesResponse {
  deliveries: Delivery[];
}

interface CreateOrderResponse {
  order: Order;
}

export const fetchDeliveries = async () => {
  const { data } = await http.get<GetDeliveriesResponse>("/deliveries");
  return data.deliveries;
};
export const useDeliveries = () => useSWR("/deliveries", fetchDeliveries);

export const createOrder = async () => {
  const { data } = await http.post<CreateOrderResponse>("/orders");
  return data.order;
};
