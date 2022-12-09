/*
  Warnings:

  - A unique constraint covering the columns `[shipment_id]` on the table `parcels` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `shipment_id` to the `parcels` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "shipments" DROP CONSTRAINT "shipments_parcel_id_fkey";

-- AlterTable
ALTER TABLE "parcels" ADD COLUMN     "shipment_id" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "parcels_shipment_id_key" ON "parcels"("shipment_id");

-- AddForeignKey
ALTER TABLE "parcels" ADD CONSTRAINT "parcels_shipment_id_fkey" FOREIGN KEY ("shipment_id") REFERENCES "shipments"("id") ON DELETE CASCADE ON UPDATE CASCADE;
