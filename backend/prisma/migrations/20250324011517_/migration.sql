/*
  Warnings:

  - You are about to drop the `AutoParts` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "AutoParts";

-- CreateTable
CREATE TABLE "AutoPart" (
    "id" SERIAL NOT NULL,
    "ref" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT,
    "price" DECIMAL(65,30),
    "thumbnail" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "AutoPart_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "AutoPart_ref_key" ON "AutoPart"("ref");
