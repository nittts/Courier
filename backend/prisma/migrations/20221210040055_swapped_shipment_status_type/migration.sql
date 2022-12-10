/*
  Warnings:

  - You are about to alter the column `driver_id` on the `shipments` table. The data in that column could be lost. The data in that column will be cast from `Text` to `VarChar(36)`.
  - You are about to alter the column `parcel_id` on the `shipments` table. The data in that column could be lost. The data in that column will be cast from `Text` to `VarChar(36)`.

*/
-- DropForeignKey
ALTER TABLE "shipments" DROP CONSTRAINT "shipments_driver_id_fkey";

-- AlterTable
ALTER TABLE "shipments" ALTER COLUMN "status" SET DATA TYPE VARCHAR(36),
ALTER COLUMN "driver_id" SET DATA TYPE VARCHAR(36),
ALTER COLUMN "parcel_id" SET DATA TYPE VARCHAR(36);

-- AddForeignKey
ALTER TABLE "shipments" ADD CONSTRAINT "shipments_driver_id_fkey" FOREIGN KEY ("driver_id") REFERENCES "drivers"("user_id") ON DELETE RESTRICT ON UPDATE CASCADE;
