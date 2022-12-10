/*
  Warnings:

  - You are about to drop the column `product_id` on the `parcels` table. All the data in the column will be lost.
  - You are about to alter the column `client_id` on the `parcels` table. The data in that column could be lost. The data in that column will be cast from `Text` to `VarChar(36)`.
  - You are about to alter the column `shipment_id` on the `parcels` table. The data in that column could be lost. The data in that column will be cast from `Text` to `VarChar(36)`.
  - You are about to drop the `managers` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `product` table. If the table is not empty, all the data it contains will be lost.
  - Made the column `truck_id` on table `shipments` required. This step will fail if there are existing NULL values in that column.
  - Made the column `driver_id` on table `shipments` required. This step will fail if there are existing NULL values in that column.
  - Made the column `destination_branch` on table `shipments` required. This step will fail if there are existing NULL values in that column.
  - Made the column `departure_branch` on table `shipments` required. This step will fail if there are existing NULL values in that column.
  - Made the column `parcel_id` on table `shipments` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE "managers" DROP CONSTRAINT "managers_user_id_fkey";

-- DropForeignKey
ALTER TABLE "parcels" DROP CONSTRAINT "parcels_client_id_fkey";

-- DropForeignKey
ALTER TABLE "parcels" DROP CONSTRAINT "parcels_product_id_fkey";

-- DropForeignKey
ALTER TABLE "parcels" DROP CONSTRAINT "parcels_shipment_id_fkey";

-- DropForeignKey
ALTER TABLE "product" DROP CONSTRAINT "product_requirer_id_fkey";

-- DropForeignKey
ALTER TABLE "shipments" DROP CONSTRAINT "shipments_departure_branch_fkey";

-- DropForeignKey
ALTER TABLE "shipments" DROP CONSTRAINT "shipments_destination_branch_fkey";

-- DropForeignKey
ALTER TABLE "shipments" DROP CONSTRAINT "shipments_driver_id_fkey";

-- DropForeignKey
ALTER TABLE "shipments" DROP CONSTRAINT "shipments_truck_id_fkey";

-- DropIndex
DROP INDEX "parcels_client_id_key";

-- DropIndex
DROP INDEX "parcels_product_id_key";

-- AlterTable
ALTER TABLE "drivers" ALTER COLUMN "truck_id" DROP NOT NULL;

-- AlterTable
ALTER TABLE "parcels" DROP COLUMN "product_id",
ALTER COLUMN "client_id" SET DATA TYPE VARCHAR(36),
ALTER COLUMN "shipment_id" DROP NOT NULL,
ALTER COLUMN "shipment_id" SET DATA TYPE VARCHAR(36);

-- AlterTable
ALTER TABLE "shipments" ALTER COLUMN "truck_id" SET NOT NULL,
ALTER COLUMN "driver_id" SET NOT NULL,
ALTER COLUMN "destination_branch" SET NOT NULL,
ALTER COLUMN "departure_branch" SET NOT NULL,
ALTER COLUMN "parcel_id" SET NOT NULL;

-- DropTable
DROP TABLE "managers";

-- DropTable
DROP TABLE "product";

-- AddForeignKey
ALTER TABLE "drivers" ADD CONSTRAINT "drivers_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "parcels" ADD CONSTRAINT "parcels_shipment_id_fkey" FOREIGN KEY ("shipment_id") REFERENCES "shipments"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "parcels" ADD CONSTRAINT "parcels_client_id_fkey" FOREIGN KEY ("client_id") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "shipments" ADD CONSTRAINT "shipments_truck_id_fkey" FOREIGN KEY ("truck_id") REFERENCES "trucks"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "shipments" ADD CONSTRAINT "shipments_driver_id_fkey" FOREIGN KEY ("driver_id") REFERENCES "drivers"("user_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "shipments" ADD CONSTRAINT "shipments_destination_branch_fkey" FOREIGN KEY ("destination_branch") REFERENCES "branches"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "shipments" ADD CONSTRAINT "shipments_departure_branch_fkey" FOREIGN KEY ("departure_branch") REFERENCES "branches"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
