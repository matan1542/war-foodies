import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
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
