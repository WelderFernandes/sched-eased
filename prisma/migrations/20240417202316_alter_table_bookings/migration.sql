-- DropForeignKey
ALTER TABLE "Booking" DROP CONSTRAINT "Booking_statusId_fkey";

-- AlterTable
ALTER TABLE "Booking" ALTER COLUMN "statusId" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "Booking" ADD CONSTRAINT "Booking_statusId_fkey" FOREIGN KEY ("statusId") REFERENCES "BookingStatus"("id") ON DELETE SET NULL ON UPDATE CASCADE;
