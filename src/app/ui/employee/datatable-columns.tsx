import { ColumnDef } from "@tanstack/react-table";

import { Employee } from "./data/schema";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

export const columns: ColumnDef<Employee>[] = [
  {
    accessorKey: "nameKanji",
    header: "氏名",
  },
  {
    accessorKey: "nameKana",
    header: "ふりがな",
    enableHiding: false,
  },
  {
    accessorKey: "gender",
    header: "性別",
    enableHiding: false,
  },
  {
    accessorKey: "birthDate",
    header: "生年月日",
    enableHiding: false,
  },
  {
    accessorKey: "postalCode",
    header: "郵便番号",
  },
  {
    accessorKey: "address",
    header: "住所",
  },
  {
    accessorKey: "phoneNumber",
    header: "電話番号",
  },
  {
    accessorKey: "email",
    header: "メールアドレス",
    enableHiding: false,
  },
  {
    accessorKey: "status",
    header: "ステータス",
    enableHiding: false,
  },
  {
    id: "actions",
    enableHiding: false,
    cell: ({ row }) => {
      const customer = row.original;

      return <div className="space-x-2"></div>;
    },
  },
];
