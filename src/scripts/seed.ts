import { OrderStatus, PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  const user = await prisma.user.create({
    data: {
      auth0Id: "google-oauth2|114543682494396138967",
    },
  });
  await prisma.category.createMany({
    data: [
      {
        name: "meat",
        type: "main-course",
      },
      {
        name: "chicken",
        type: "main-course",
      },
      {
        name: "vegetable",
        type: "main-course",
      },
    ],
  });
  const categories = await prisma.category.findMany();

  await prisma.item.createMany({
    data: [
      {
        name: "meatballs",
        categoryId: categories.find((c) => c.name === "meat")!.id,
      },
      {
        name: "beaf",
        categoryId: categories.find((c) => c.name === "meat")!.id,
      },
      {
        name: "pullets",
        categoryId: categories.find((c) => c.name === "chicken")!.id,
      },
    ],
  });

  const items = await prisma.item.findMany();

  await prisma.delivery.create({
    data: {
      amount: 500,
      deadline: new Date(),
      orders: {
        create: [
          {
            userId: user.id,
            status: OrderStatus.PENDING,
            amounts: {
              create: [
                {
                  amount: 20,
                  item: {
                    connect: {
                      id: items.find((i) => i.name === "meatballs")!.id,
                    },
                  },
                },
                {
                  amount: 50,
                  item: {
                    connect: {
                      id: items.find((i) => i.name === "beaf")!.id,
                    },
                  },
                },
                {
                  amount: 100,
                  item: {
                    connect: {
                      id: items.find((i) => i.name === "pullets")!.id,
                    },
                  },
                },
              ],
            },
          },
          {
            userId: user.id,
            status: OrderStatus.PENDING,
            amounts: {
              create: [
                {
                  amount: 20,
                  item: {
                    connect: {
                      id: items.find((i) => i.name === "meatballs")!.id,
                    },
                  },
                },
                {
                  amount: 50,
                  item: {
                    connect: {
                      id: items.find((i) => i.name === "beaf")!.id,
                    },
                  },
                },
                {
                  amount: 100,
                  item: {
                    connect: {
                      id: items.find((i) => i.name === "pullets")!.id,
                    },
                  },
                },
              ],
            },
          },
        ],
      },
    },
  });
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
