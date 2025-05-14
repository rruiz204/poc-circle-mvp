import { Scope as Enum } from "@Enums/Scope";
import type { Scope as Model } from "@Models/Scope";

export const Scopes: Model.CreateParams[] = [
  {
    name: Enum.ALL_TASKS,
    description: "Grants full access to all task-related actions",
  },
  {
    name: Enum.EDIT_TASKS,
    description: "Allows the user to edit existing tasks information",
  },
  {
    name: Enum.STATUS_TASKS,
    description: "Allows the user to change the status of tasks",
  },
  {
    name: Enum.ASSING_TASKS,
    description: "Allows the user to assign tasks to team members",
  },
  {
    name: Enum.CREATE_TASKS,
    description: "Allows the user to create new tasks within projects",
  },
  {
    name: Enum.DELETE_TASKS,
    description: "Allows the user to delete existing tasks",
  },
  {
    name: Enum.COMMENT_TASKS,
    description: "Allows the user to comment on tasks",
  },
  {
    name: Enum.VIEW_TASKS,
    description: "Allows the user to view all tasks within projects",
  },
];