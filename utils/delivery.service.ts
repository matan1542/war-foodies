import { Delivery, DeliveryFrontend } from "@/types/delivery";

export function parseDeliveryStructure(delivery: Delivery) {
  let deliveryMap: DeliveryFrontend = {
    id: delivery.id,
    amount: delivery.amount,
    deadline: delivery.deadline,
    order: {
      catagories: {},
    },
  };
  delivery.orders.forEach((order) => {
    order.catagories.forEach((catagory) => {
      catagory.items.forEach((item) => {
        if (!deliveryMap.order.catagories[catagory.name]) {
          deliveryMap.order.catagories[catagory.name] = {};
        }
        if (!deliveryMap.order.catagories[catagory.name][item.name]) {
          deliveryMap.order.catagories[catagory.name][item.name] = {
            amount: 0,
            id: item.id,
          };
        }
        deliveryMap.order.catagories[catagory.name][item.name].amount +=
          item.amount;
      });
    });
  });
  return deliveryMap;
}
