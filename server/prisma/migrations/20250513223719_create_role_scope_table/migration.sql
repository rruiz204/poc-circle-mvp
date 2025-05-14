-- CreateTable
CREATE TABLE "RoleScope" (
    "roleId" INTEGER NOT NULL,
    "scopeId" INTEGER NOT NULL,

    CONSTRAINT "RoleScope_pkey" PRIMARY KEY ("roleId","scopeId")
);

-- AddForeignKey
ALTER TABLE "RoleScope" ADD CONSTRAINT "RoleScope_roleId_fkey" FOREIGN KEY ("roleId") REFERENCES "Role"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "RoleScope" ADD CONSTRAINT "RoleScope_scopeId_fkey" FOREIGN KEY ("scopeId") REFERENCES "Scope"("id") ON DELETE CASCADE ON UPDATE CASCADE;
