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

  await prisma.branches.createMany({
    data: [
      {
        name: "branch-1",
        address: "rua 1",
        city_id: 1,
        branch_lat: "123466778435",
        branch_long: "12312312312",
      },
      {
        name: "branch-2",
        address: "rua 2",
        city_id: 2,
        branch_lat: "123466778435",
        branch_long: "12312312312",
      },
      {
        name: "branch-3",
        address: "rua 3",
        city_id: 3,
        branch_lat: "123466778435",
        branch_long: "12312312312",
      },
      {
        name: "branch-4",
        address: "rua 4",
        city_id: 4,
        branch_lat: "123466778435",
        branch_long: "12312312312",
      },
    ],
  });

  await prisma.users.createMany({
    data: [
      {
        id: "adminidnew",
        name: "Admin",
        email: "sudo@sudo.com",
        password: "123456",
        phone: "123456",
        userType_id: 1,
        branch_id: 1,
      },
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
