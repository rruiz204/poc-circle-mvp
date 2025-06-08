/*
  Warnings:

  - You are about to drop the `CircleMember` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "CircleMember" DROP CONSTRAINT "CircleMember_circleId_fkey";

-- DropForeignKey
ALTER TABLE "CircleMember" DROP CONSTRAINT "CircleMember_roleId_fkey";

-- DropForeignKey
ALTER TABLE "CircleMember" DROP CONSTRAINT "CircleMember_userId_fkey";

-- DropTable
DROP TABLE "CircleMember";

-- CreateTable
CREATE TABLE "Member" (
    "userId" INTEGER NOT NULL,
    "roleId" INTEGER NOT NULL,
    "circleId" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "Member_userId_circleId_key" ON "Member"("userId", "circleId");

-- AddForeignKey
ALTER TABLE "Member" ADD CONSTRAINT "Member_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Member" ADD CONSTRAINT "Member_roleId_fkey" FOREIGN KEY ("roleId") REFERENCES "Role"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Member" ADD CONSTRAINT "Member_circleId_fkey" FOREIGN KEY ("circleId") REFERENCES "Circle"("id") ON DELETE CASCADE ON UPDATE CASCADE;
