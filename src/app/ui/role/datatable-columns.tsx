import { ColumnDef } from "@tanstack/react-table";

import { Role } from "./data/schema";

import {
  Drawer,
  DrawerContent,
  DrawerDescription,
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
  DialogFooter,
  DialogClose,
} from "@/components/ui/dialog";

import { PencilIcon, TrashIcon } from "@heroicons/react/24/outline";

import { Button } from "@/components/ui/button";
import { RoleForm } from "./roleForm";

export const columns: ColumnDef<Role>[] = [
  {
    accessorKey: "id",
    header: "ID",
  },
  {
    accessorKey: "manager",
    header: "Manager",
  },
  {
    accessorKey: "member",
    header: "Member",
  },
  {
    accessorKey: "user_id",
    header: "User_ID",
  },
  {
    accessorKey: "status",
    header: "Status",
    filterFn: (row, id, value) => {
      return value.includes(row.getValue(id));
    },
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
              <RoleForm
                openType="edit"
                className="px-4 grid items-start gap-4"
              />
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
                  選択したユーザーの権限情報を削除します。この操作は取り消せません。
                </DialogDescription>
              </DialogHeader>
              <DialogFooter className="sm:justify-start">
                <DialogClose asChild>
                  <Button type="button" variant="secondary">
                    OK
                  </Button>
                </DialogClose>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </div>
      );
    },
  },
];
