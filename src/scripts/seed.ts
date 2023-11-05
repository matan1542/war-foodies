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
        enName: "meat",
        heName: "בשר",
        type: "main-course",
      },
      {
        enName: "chicken",
        heName: "עוף",
        type: "main-course",
      },
      {
        enName: "vegetarian",
        heName: "צמחוני",
        type: "main-course",
      },
    ],
  });
  const categories = await prisma.category.findMany();

  await prisma.item.createMany({
    data: [
      {
        enName: "meatballs",
        heName: "קציצות",
        categoryId: categories.find((c) => c.enName === "meat")!.id,
      },
      {
        enName: "beaf",
        heName: "בקר",
        categoryId: categories.find((c) => c.enName === "meat")!.id,
      },
      {
        enName: "pullets",
        heName: "פרגיות",
        categoryId: categories.find((c) => c.enName === "chicken")!.id,
      },
    ],
  });

  const items = await prisma.item.findMany();

  await prisma.delivery.create({
    data: {
      amount: 500,
      deadline: new Date(),
      items: {
        connect: items.map((i) => ({ id: i.id })),
      },
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
                      id: items.find((i) => i.enName === "meatballs")!.id,
                    },
                  },
                },
                {
                  amount: 50,
                  item: {
                    connect: {
                      id: items.find((i) => i.enName === "beaf")!.id,
                    },
                  },
                },
                {
                  amount: 100,
                  item: {
                    connect: {
                      id: items.find((i) => i.enName === "pullets")!.id,
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
                      id: items.find((i) => i.enName === "meatballs")!.id,
                    },
                  },
                },
                {
                  amount: 50,
                  item: {
                    connect: {
                      id: items.find((i) => i.enName === "beaf")!.id,
                    },
                  },
                },
                {
                  amount: 100,
                  item: {
                    connect: {
                      id: items.find((i) => i.enName === "pullets")!.id,
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
