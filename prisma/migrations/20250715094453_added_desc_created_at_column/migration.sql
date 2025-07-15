/*
  Warnings:

  - You are about to drop the column `Category` on the `Blog` table. All the data in the column will be lost.
  - Added the required column `category` to the `Blog` table without a default value. This is not possible if the table is not empty.
  - Added the required column `description` to the `Blog` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Blog" DROP COLUMN "Category",
ADD COLUMN     "category" TEXT NOT NULL,
ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "description" TEXT NOT NULL;
