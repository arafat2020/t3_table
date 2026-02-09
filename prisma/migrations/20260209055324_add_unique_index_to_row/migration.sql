/*
  Warnings:

  - A unique constraint covering the columns `[sheetId,index]` on the table `Row` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Row_sheetId_index_key" ON "Row"("sheetId", "index");
