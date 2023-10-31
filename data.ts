import { Delivery } from "./types/delivery";
export const dataDevlivries: Delivery[] = [
  {
    id: "1",
    amount: 200,
    deadline: new Date("2018-05-30T00:00:00.000Z"),
    orders: [
      {
        id: "1sdasdas21112",
        userId: "asdausdhasu21",
        status: "pending",
        createdAt: new Date("2018-05-30T00:00:00.000Z"),
        updatedAt: new Date("2018-05-30T00:00:00.000Z"),
        deliveryId: 1,
        catagories: [
          {
            name: "בשר",
            items: [{ id: "1adasd", name: "קציצות", amount: 20 }],
          },
          {
            name: "עוף",
            items: [{ id: "1adadasdadsd", name: "שניצל", amount: 20 }],
          },
          {
            name: "עוף",
            items: [{ id: "1adasdsd", name: "פרגיות", amount: 20 }],
          },
        ],
      },
      {
        id: "1",
        userId: "asdausdhasu21",
        status: "pending",
        createdAt: new Date("2018-05-30T00:00:00.000Z"),
        updatedAt: new Date("2018-05-30T00:00:00.000Z"),
        deliveryId: 1,
        catagories: [
          {
            name: "צמחוני",
            items: [{ id: "1adasd", name: "אנטיפסטי", amount: 20 }],
          },
        ],
      },
    ],
  },
];
