/*
  Warnings:

  - A unique constraint covering the columns `[name]` on the table `Shape` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Shape_name_key" ON "Shape"("name");
