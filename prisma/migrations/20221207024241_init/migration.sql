-- CreateTable
CREATE TABLE "cities" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(256) NOT NULL,

    CONSTRAINT "cities_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "branches" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(256) NOT NULL,
    "address" VARCHAR(256) NOT NULL,
    "city_id" INTEGER NOT NULL,

    CONSTRAINT "branches_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "userTypes" (
    "id" SERIAL NOT NULL,
    "type" VARCHAR(36) NOT NULL,

    CONSTRAINT "userTypes_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "users" (
    "id" VARCHAR(36) NOT NULL,
    "name" VARCHAR(256) NOT NULL,
    "email" VARCHAR(128) NOT NULL,
    "password" VARCHAR(128) NOT NULL,
    "phone" VARCHAR(20) NOT NULL,
    "userType_id" INTEGER NOT NULL,
    "branch_id" INTEGER NOT NULL,

    CONSTRAINT "users_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "managers" (
    "user_id" VARCHAR(36) NOT NULL,
    "isAdm" BOOLEAN NOT NULL,

    CONSTRAINT "managers_pkey" PRIMARY KEY ("user_id")
);

-- CreateTable
CREATE TABLE "drivers" (
    "user_id" TEXT NOT NULL,
    "truck_id" INTEGER NOT NULL
);

-- CreateTable
CREATE TABLE "trucks" (
    "id" SERIAL NOT NULL,
    "license_plate" VARCHAR(20) NOT NULL,
    "brand" VARCHAR(128) NOT NULL,
    "max_weight" DOUBLE PRECISION NOT NULL,
    "available" BOOLEAN NOT NULL,
    "driver_id" TEXT NOT NULL,
    "branch_id" INTEGER NOT NULL,

    CONSTRAINT "trucks_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "product" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(256) NOT NULL,
    "weight" DECIMAL NOT NULL,
    "require_date" TIMESTAMP NOT NULL,
    "requirer_id" TEXT NOT NULL,

    CONSTRAINT "product_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "parcels" (
    "id" VARCHAR(36) NOT NULL,
    "name" VARCHAR(256) NOT NULL,
    "content" VARCHAR(256) NOT NULL,
    "volume_weight" DOUBLE PRECISION NOT NULL,
    "admission_date" TIMESTAMP NOT NULL,
    "client_id" TEXT NOT NULL,
    "product_id" INTEGER NOT NULL,

    CONSTRAINT "parcels_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "shipments" (
    "id" VARCHAR(36) NOT NULL,
    "status" INTEGER NOT NULL,
    "arrival_time" TIMESTAMP NOT NULL,
    "departure_time" TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "weight" DECIMAL NOT NULL,
    "truck_id" INTEGER NOT NULL,
    "driver_id" TEXT NOT NULL,
    "destination_branch" INTEGER NOT NULL,
    "departure_branch" INTEGER NOT NULL,
    "parcel_id" TEXT NOT NULL,

    CONSTRAINT "shipments_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "cities_name_key" ON "cities"("name");

-- CreateIndex
CREATE UNIQUE INDEX "branches_name_key" ON "branches"("name");

-- CreateIndex
CREATE UNIQUE INDEX "userTypes_type_key" ON "userTypes"("type");

-- CreateIndex
CREATE UNIQUE INDEX "users_userType_id_key" ON "users"("userType_id");

-- CreateIndex
CREATE UNIQUE INDEX "users_branch_id_key" ON "users"("branch_id");

-- CreateIndex
CREATE UNIQUE INDEX "managers_user_id_key" ON "managers"("user_id");

-- CreateIndex
CREATE UNIQUE INDEX "drivers_user_id_key" ON "drivers"("user_id");

-- CreateIndex
CREATE UNIQUE INDEX "trucks_license_plate_key" ON "trucks"("license_plate");

-- CreateIndex
CREATE UNIQUE INDEX "trucks_branch_id_key" ON "trucks"("branch_id");

-- CreateIndex
CREATE UNIQUE INDEX "parcels_client_id_key" ON "parcels"("client_id");

-- CreateIndex
CREATE UNIQUE INDEX "parcels_product_id_key" ON "parcels"("product_id");

-- CreateIndex
CREATE UNIQUE INDEX "shipments_truck_id_key" ON "shipments"("truck_id");

-- CreateIndex
CREATE UNIQUE INDEX "shipments_driver_id_key" ON "shipments"("driver_id");

-- CreateIndex
CREATE UNIQUE INDEX "shipments_destination_branch_key" ON "shipments"("destination_branch");

-- CreateIndex
CREATE UNIQUE INDEX "shipments_departure_branch_key" ON "shipments"("departure_branch");

-- CreateIndex
CREATE UNIQUE INDEX "shipments_parcel_id_key" ON "shipments"("parcel_id");

-- AddForeignKey
ALTER TABLE "branches" ADD CONSTRAINT "branches_city_id_fkey" FOREIGN KEY ("city_id") REFERENCES "cities"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "users" ADD CONSTRAINT "users_userType_id_fkey" FOREIGN KEY ("userType_id") REFERENCES "userTypes"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "users" ADD CONSTRAINT "users_branch_id_fkey" FOREIGN KEY ("branch_id") REFERENCES "branches"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "managers" ADD CONSTRAINT "managers_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "trucks" ADD CONSTRAINT "trucks_driver_id_fkey" FOREIGN KEY ("driver_id") REFERENCES "drivers"("user_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "trucks" ADD CONSTRAINT "trucks_branch_id_fkey" FOREIGN KEY ("branch_id") REFERENCES "branches"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "product" ADD CONSTRAINT "product_requirer_id_fkey" FOREIGN KEY ("requirer_id") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "parcels" ADD CONSTRAINT "parcels_client_id_fkey" FOREIGN KEY ("client_id") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "parcels" ADD CONSTRAINT "parcels_product_id_fkey" FOREIGN KEY ("product_id") REFERENCES "product"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "shipments" ADD CONSTRAINT "shipments_truck_id_fkey" FOREIGN KEY ("truck_id") REFERENCES "trucks"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "shipments" ADD CONSTRAINT "shipments_driver_id_fkey" FOREIGN KEY ("driver_id") REFERENCES "drivers"("user_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "shipments" ADD CONSTRAINT "shipments_destination_branch_fkey" FOREIGN KEY ("destination_branch") REFERENCES "branches"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "shipments" ADD CONSTRAINT "shipments_departure_branch_fkey" FOREIGN KEY ("departure_branch") REFERENCES "branches"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "shipments" ADD CONSTRAINT "shipments_parcel_id_fkey" FOREIGN KEY ("parcel_id") REFERENCES "parcels"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
