import { Role as Enum } from "@Enums/Role";
import type { Role as Model } from "@Models/Role";

export const Roles: Model.CreateParams[] = [
  {
    name: Enum.ADMIN,
    description: "Full access to all system features, including user and permission management",
  },
  {
    name: Enum.LEADER,
    description: "Oversees team members and tasks within specific projects; can assign and update tasks",
  },
  {
    name: Enum.MANAGER,
    description: "Manages entire projects, tasks, and team workflows; broader access than leader",
  },
  {
    name: Enum.DEVELOPER,
    description: "Works on assigned tasks; can update status and add comments",
  },
  {
    name: Enum.STAKEHOLDER,
    description: "Can view project progress and possibly comment; no editing permissions",
  },
];