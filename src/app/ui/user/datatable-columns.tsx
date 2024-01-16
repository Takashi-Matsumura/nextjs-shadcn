import { ColumnDef } from "@tanstack/react-table";

import { User } from "./data/schema";

import { Drawer, DrawerContent, DrawerTrigger } from "@/components/ui/drawer";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import { PencilIcon, TrashIcon } from "@heroicons/react/24/outline";

import { Button } from "@/components/ui/button";
import { UserForm } from "./userForm";

export const columns: ColumnDef<User>[] = [
  {
    accessorKey: "id",
    header: "ID",
  },
  {
    accessorKey: "name",
    header: "Name",
  },
  {
    accessorKey: "email",
    header: "Email",
  },
  {
    accessorKey: "password",
    header: "Password",
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
      return (
        <div className="space-x-2">
          <Drawer>
            <DrawerTrigger asChild>
              <Button variant="outline">
                <PencilIcon className="h-4 w-4" />
              </Button>
            </DrawerTrigger>
            <DrawerContent>
              <UserForm
                openType="edit"
                user={row.original}
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
