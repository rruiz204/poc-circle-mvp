-- CreateTable
CREATE TABLE "Shape" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "ownerId" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Shape_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Space" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "shapeId" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Space_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Shape" ADD CONSTRAINT "Shape_ownerId_fkey" FOREIGN KEY ("ownerId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Space" ADD CONSTRAINT "Space_shapeId_fkey" FOREIGN KEY ("shapeId") REFERENCES "Shape"("id") ON DELETE CASCADE ON UPDATE CASCADE;
