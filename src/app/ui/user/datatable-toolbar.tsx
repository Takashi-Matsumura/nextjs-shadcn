import { Table } from "@tanstack/react-table";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  FaceSmileIcon,
  PauseCircleIcon,
  PlusIcon,
} from "@heroicons/react/24/outline";
import { ChevronDown } from "lucide-react";

import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { UserForm } from "./userForm";

interface DataTableToolbarProps<TData> {
  table: Table<TData>;
}

const statuses = [
  { label: "Active", value: "active", icon: FaceSmileIcon },
  { label: "Inactive", value: "inactive", icon: PauseCircleIcon },
];

export function DataTableToolbar<TData>({
  table,
}: DataTableToolbarProps<TData>) {
  return (
    <div className="flex items-center py-4">
      <div className=" flex items-center space-x-3">
        {/* <Button
          variant="outline"
          className="gap-2"
          onClick={() => {
            console.log("clicked2");
          }}
        >
          <PlusIcon className="h-4 w-4" />
          New
        </Button> */}
        <Drawer>
          <DrawerTrigger asChild>
            <Button variant="outline">
              <PlusIcon className="h-4 w-4" />
              New
            </Button>
          </DrawerTrigger>
          <DrawerContent>
            <DrawerHeader className="text-left">
              <DrawerTitle>Edit profile</DrawerTitle>
              <DrawerDescription>
                Make changes to your profile here. Click save when you're done.
              </DrawerDescription>
            </DrawerHeader>
            <UserForm className="px-4 grid items-start gap-4" />
          </DrawerContent>
        </Drawer>
        <Input
          placeholder="Email search..."
          value={(table.getColumn("email")?.getFilterValue() as string) ?? ""}
          onChange={(event) =>
            table.getColumn("email")?.setFilterValue(event.target.value)
          }
        />
      </div>
    </div>
  );
}
