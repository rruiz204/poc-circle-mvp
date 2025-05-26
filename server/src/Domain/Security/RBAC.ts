import { Role } from "@Models/Role";
import { Scope } from "@Models/Scope";

export const RBAC: Record<string, Scope.Enum[]> = {
  [Role.Enum.ADMIN]: [
    Scope.Enum.ALL_TASKS,
  ],
  [Role.Enum.LEADER]: [
    Scope.Enum.VIEW_TASKS,
    Scope.Enum.EDIT_TASKS,
    Scope.Enum.STATUS_TASKS,
    Scope.Enum.ASSING_TASKS,
    Scope.Enum.COMMENT_TASKS,
  ],
  [Role.Enum.MANAGER]: [
    Scope.Enum.VIEW_TASKS,
    Scope.Enum.CREATE_TASKS,
    Scope.Enum.EDIT_TASKS,
    Scope.Enum.STATUS_TASKS,
    Scope.Enum.COMMENT_TASKS,
  ],
  [Role.Enum.DEVELOPER]: [
    Scope.Enum.VIEW_TASKS,
    Scope.Enum.STATUS_TASKS,
    Scope.Enum.COMMENT_TASKS,
  ],
  [Role.Enum.STAKEHOLDER]: [
    Scope.Enum.VIEW_TASKS,
  ],
};