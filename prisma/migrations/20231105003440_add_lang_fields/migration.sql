/*
  Warnings:

  - You are about to drop the column `name` on the `Category` table. All the data in the column will be lost.
  - You are about to drop the column `name` on the `Item` table. All the data in the column will be lost.
  - Added the required column `enName` to the `Category` table without a default value. This is not possible if the table is not empty.
  - Added the required column `heName` to the `Category` table without a default value. This is not possible if the table is not empty.
  - Added the required column `enName` to the `Item` table without a default value. This is not possible if the table is not empty.
  - Added the required column `heName` to the `Item` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Category" DROP COLUMN "name",
ADD COLUMN     "enName" TEXT NOT NULL,
ADD COLUMN     "heName" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Item" DROP COLUMN "name",
ADD COLUMN     "enName" TEXT NOT NULL,
ADD COLUMN     "heName" TEXT NOT NULL;
