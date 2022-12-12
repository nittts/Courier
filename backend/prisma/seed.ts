import prisma from "../src/database/database";

async function seed() {
  await prisma.userTypes.createMany({
    data: [{ type: "Admin" }, { type: "Manager" }, { type: "Employee" }, { type: "Driver" }],
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
        id: "USR-0f2196b7-dc8d-4e81-a4c3-34c374fc4e4f",
        name: "Admin",
        email: "sudo@sudo.com",
        password: "$2y$10$eEndac041EOh8sbwYMdL8OICY0VQVNRUGM2/QgMrOb.RYdWIox18y",
        phone: "123456",
        user_type_id: 1,
        branch_id: 1,
        createdOn: new Date(),
      },
      {
        id: "USR-8b0dd641-8c3e-4376-b385-a34d753b8c0d",
        name: "Manager",
        email: "manager@manager.com",
        password: "$2y$10$eEndac041EOh8sbwYMdL8OICY0VQVNRUGM2/QgMrOb.RYdWIox18y",
        phone: "123456",
        user_type_id: 2,
        branch_id: 1,
        createdOn: new Date(),
      },
      {
        id: "USR-78abd298-2eaa-4867-998e-a295e9c94c4e",
        name: "Employee",
        email: "employee@employee.com",
        password: "$2y$10$eEndac041EOh8sbwYMdL8OICY0VQVNRUGM2/QgMrOb.RYdWIox18y",
        phone: "123456",
        user_type_id: 3,
        branch_id: 1,
        createdOn: new Date(),
      },
      {
        id: "USR-609fc98b-13b6-49f2-af68-e7d0f2256d99",
        name: "Client",
        email: "client@client.com",
        password: "$2y$10$eEndac041EOh8sbwYMdL8OICY0VQVNRUGM2/QgMrOb.RYdWIox18y",
        phone: "123456",
        user_type_id: 4,
        branch_id: 1,
        createdOn: new Date(),
      },
    ],
  });

  await prisma.trucks.createMany({
    data: [
      {
        id: 1,
        license_plate: "1",
        brand: "volvo",
        max_weight: 400,
        available: true,
        driver_id: "78abd298-2eaa-4867-998e-a295e9c94c4e",
        branch_id: 1,
      },
      {
        id: 2,
        license_plate: "2",
        brand: "volvo",
        max_weight: 800,
        available: false,
        driver_id: "78abd298-2eaa-4867-998e-a295e9c94c4e",
        branch_id: 1,
      },
    ],
  });

  await prisma.shipments.create({
    data: {
      id: "8a94e852-d6c1-42a5-9589-e2c782cbb126",
      status: "Delayed",
      departure_time: new Date(),
      weight: 400,
      truck_id: 1,
      driver_id: "78abd298-2eaa-4867-998e-a295e9c94c4e",
      destination_branch: 1,
      departure_branch: 1,
    },
  });

  await prisma.parcels.create({
    data: {
      id: "db607179-4983-40f5-a9ab-c1c834684733",
      name: "parcel-1",
      content: "things",
      volume_weight: 200,
      admission_date: new Date(),
      client_id: "0f2196b7-dc8d-4e81-a4c3-34c374fc4e4f",
      shipment_id: "8a94e852-d6c1-42a5-9589-e2c782cbb126",
    },
  });

  await prisma.products.createMany({
    data: [
      {
        name: "produto 1",
        weight: 200,
        parcel_id: "db607179-4983-40f5-a9ab-c1c834684733",
      },
      {
        name: "produto 2",
        weight: 200,
        parcel_id: null,
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
