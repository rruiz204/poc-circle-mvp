import { Role } from "@Enums/Role";
import { Scope } from "@Enums/Scope";

export const RBAC: Record<string, Scope[]> = {
  [Role.ADMIN]: [
    Scope.ALL_TASKS,
  ],
  [Role.LEADER]: [
    Scope.VIEW_TASKS,
    Scope.EDIT_TASKS,
    Scope.STATUS_TASKS,
    Scope.ASSING_TASKS,
    Scope.COMMENT_TASKS,
  ],
  [Role.MANAGER]: [
    Scope.VIEW_TASKS,
    Scope.CREATE_TASKS,
    Scope.EDIT_TASKS,
    Scope.STATUS_TASKS,
    Scope.COMMENT_TASKS,
  ],
  [Role.DEVELOPER]: [
    Scope.VIEW_TASKS,
    Scope.STATUS_TASKS,
    Scope.COMMENT_TASKS,
  ],
  [Role.STAKEHOLDER]: [
    Scope.VIEW_TASKS,
  ],
};