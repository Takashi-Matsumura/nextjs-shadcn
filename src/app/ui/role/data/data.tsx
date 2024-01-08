import { Role } from "./schema";

export const data: Role[] = [
  {
    id: "0000001",
    manager: true,
    member: false,
    user_id: "410544b2-4001-4271-9855-fec4b6a6442a",
    status: "active",
  },
  {
    id: "0000002",
    manager: false,
    member: true,
    user_id: "",
    status: "active",
  },
  {
    id: "0000003",
    manager: true,
    member: true,
    user_id: "",
    status: "active",
  },
  {
    id: "0000004",
    manager: false,
    member: false,
    user_id: "",
    status: "inactive",
  },
];
