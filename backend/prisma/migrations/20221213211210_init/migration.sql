-- CreateTable
CREATE TABLE "cities" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(256) NOT NULL,
    "postcode" VARCHAR(12) NOT NULL,

    CONSTRAINT "cities_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "branches" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(256) NOT NULL,
    "address" VARCHAR(256) NOT NULL,
    "city_id" INTEGER NOT NULL,
    "branch_lat" CHAR(21) NOT NULL,
    "branch_long" CHAR(21) NOT NULL,

    CONSTRAINT "branches_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "userTypes" (
    "id" SERIAL NOT NULL,
    "type" VARCHAR(128) NOT NULL,

    CONSTRAINT "userTypes_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "users" (
    "id" VARCHAR(40) NOT NULL,
    "name" VARCHAR(256) NOT NULL,
    "email" VARCHAR(128) NOT NULL,
    "password" VARCHAR(128) NOT NULL,
    "phone" VARCHAR(20) NOT NULL,
    "user_type_id" INTEGER NOT NULL,
    "branch_id" INTEGER,
    "createdOn" TIMESTAMP NOT NULL,

    CONSTRAINT "users_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "trucks" (
    "id" SERIAL NOT NULL,
    "license_plate" VARCHAR(20) NOT NULL,
    "brand" VARCHAR(128) NOT NULL,
    "max_weight" DOUBLE PRECISION NOT NULL,
    "available" BOOLEAN NOT NULL,
    "driver_id" VARCHAR(40),
    "branch_id" INTEGER NOT NULL,

    CONSTRAINT "trucks_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "products" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(256) NOT NULL,
    "weight" DECIMAL NOT NULL,
    "parcel_id" VARCHAR(40),
    "client_id" VARCHAR(40),

    CONSTRAINT "products_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "parcels" (
    "id" VARCHAR(40) NOT NULL,
    "name" VARCHAR(256) NOT NULL,
    "content" VARCHAR(256) NOT NULL,
    "volume_weight" DOUBLE PRECISION NOT NULL,
    "admission_date" TIMESTAMP NOT NULL,
    "client_id" VARCHAR(40),
    "shipment_id" VARCHAR(41),

    CONSTRAINT "parcels_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "shipments" (
    "id" VARCHAR(45) NOT NULL,
    "shipment_number" VARCHAR(128) NOT NULL,
    "status" VARCHAR(128) NOT NULL,
    "arrival_time" TIMESTAMP,
    "departure_time" TIMESTAMP NOT NULL,
    "weight" DOUBLE PRECISION NOT NULL,
    "truck_id" INTEGER,
    "driver_id" VARCHAR(40),
    "destination_branch" INTEGER,
    "departure_branch" INTEGER,

    CONSTRAINT "shipments_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "cities_name_key" ON "cities"("name");

-- CreateIndex
CREATE UNIQUE INDEX "branches_name_key" ON "branches"("name");

-- CreateIndex
CREATE UNIQUE INDEX "userTypes_type_key" ON "userTypes"("type");

-- CreateIndex
CREATE UNIQUE INDEX "trucks_license_plate_key" ON "trucks"("license_plate");

-- CreateIndex
CREATE UNIQUE INDEX "parcels_shipment_id_key" ON "parcels"("shipment_id");

-- CreateIndex
CREATE UNIQUE INDEX "shipments_shipment_number_key" ON "shipments"("shipment_number");

-- CreateIndex
CREATE UNIQUE INDEX "shipments_truck_id_key" ON "shipments"("truck_id");

-- CreateIndex
CREATE UNIQUE INDEX "shipments_driver_id_key" ON "shipments"("driver_id");

-- CreateIndex
CREATE UNIQUE INDEX "shipments_destination_branch_key" ON "shipments"("destination_branch");

-- CreateIndex
CREATE UNIQUE INDEX "shipments_departure_branch_key" ON "shipments"("departure_branch");

-- AddForeignKey
ALTER TABLE "branches" ADD CONSTRAINT "branches_city_id_fkey" FOREIGN KEY ("city_id") REFERENCES "cities"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "users" ADD CONSTRAINT "users_user_type_id_fkey" FOREIGN KEY ("user_type_id") REFERENCES "userTypes"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "users" ADD CONSTRAINT "users_branch_id_fkey" FOREIGN KEY ("branch_id") REFERENCES "branches"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "trucks" ADD CONSTRAINT "trucks_driver_id_fkey" FOREIGN KEY ("driver_id") REFERENCES "users"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "trucks" ADD CONSTRAINT "trucks_branch_id_fkey" FOREIGN KEY ("branch_id") REFERENCES "branches"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "products" ADD CONSTRAINT "products_client_id_fkey" FOREIGN KEY ("client_id") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "products" ADD CONSTRAINT "products_parcel_id_fkey" FOREIGN KEY ("parcel_id") REFERENCES "parcels"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "parcels" ADD CONSTRAINT "parcels_shipment_id_fkey" FOREIGN KEY ("shipment_id") REFERENCES "shipments"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "parcels" ADD CONSTRAINT "parcels_client_id_fkey" FOREIGN KEY ("client_id") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "shipments" ADD CONSTRAINT "shipments_truck_id_fkey" FOREIGN KEY ("truck_id") REFERENCES "trucks"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "shipments" ADD CONSTRAINT "shipments_driver_id_fkey" FOREIGN KEY ("driver_id") REFERENCES "users"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "shipments" ADD CONSTRAINT "shipments_destination_branch_fkey" FOREIGN KEY ("destination_branch") REFERENCES "branches"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "shipments" ADD CONSTRAINT "shipments_departure_branch_fkey" FOREIGN KEY ("departure_branch") REFERENCES "branches"("id") ON DELETE CASCADE ON UPDATE CASCADE;
