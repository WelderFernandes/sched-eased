/*
  Warnings:

  - Made the column `name` on table `Establishment` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "Establishment" ADD COLUMN     "description" TEXT,
ALTER COLUMN "name" SET NOT NULL;
