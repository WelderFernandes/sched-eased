/*
  Warnings:

  - You are about to drop the column `bookingId` on the `Service` table. All the data in the column will be lost.
  - Added the required column `serviceId` to the `Booking` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Service" DROP CONSTRAINT "Service_bookingId_fkey";

-- AlterTable
ALTER TABLE "Booking" ADD COLUMN     "serviceId" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Service" DROP COLUMN "bookingId";

-- AddForeignKey
ALTER TABLE "Booking" ADD CONSTRAINT "Booking_serviceId_fkey" FOREIGN KEY ("serviceId") REFERENCES "Service"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
