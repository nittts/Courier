import prisma from "../src/database/Prisma/database";

async function seed() {
  await prisma.userTypes.createMany({
    data: [{ type: "Admin" }, { type: "Manager" }, { type: "Employee" }, { type: "Client" }],
  });

  await prisma.cities.createMany({
    data: [
      { name: "Cidade 1", postcode: "12334556789" },
      { name: "Cidade 2", postcode: "12334556789" },
      { name: "Cidade 3", postcode: "12334556789" },
      { name: "Cidade 4", postcode: "12334556789" },
    ],
  });
}

seed()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);

    await prisma.$disconnect();

    process.exit(1);
  });
