import { ColumnDef } from "@tanstack/react-table";

import { Employee } from "./data/schema";

import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import {
  PencilIcon,
  TrashIcon,
  PlusIcon,
  DocumentPlusIcon,
} from "@heroicons/react/24/outline";

import { Button } from "@/components/ui/button";
import { EmployeeForm } from "./employeeForm";

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

      return (
        <div className="space-x-2">
          <Drawer>
            <DrawerTrigger asChild>
              <Button variant="outline">
                <PencilIcon className="h-4 w-4" />
              </Button>
            </DrawerTrigger>
            <DrawerContent>
              <DrawerHeader className="text-left">
                <DrawerTitle>Edit profile</DrawerTitle>
                <DrawerDescription>
                  Make changes to your profile here. Click save when you're
                  done.
                </DrawerDescription>
              </DrawerHeader>
              <EmployeeForm className="px-4 grid items-start gap-4" />
            </DrawerContent>
          </Drawer>

          <Dialog>
            <DialogTrigger asChild>
              <Button variant="outline">
                <TrashIcon className="h-4 w-4" />
              </Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Are you sure absolutely sure?</DialogTitle>
                <DialogDescription>
                  This action cannot be undone. This will permanently delete
                  your account and remove your data from our servers.
                </DialogDescription>
              </DialogHeader>
            </DialogContent>
          </Dialog>
        </div>
      );
    },
  },
];
