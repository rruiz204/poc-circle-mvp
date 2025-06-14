import { Prisma } from "generated/prisma";
import type { Member as Model } from "generated/prisma";

export namespace Member {
  export type Entity = Model;

  export type UncheckedParams = Prisma.MemberUncheckedCreateInput;
  export type DeleteParams = Prisma.MemberUserIdCircleIdCompoundUniqueInput;
};