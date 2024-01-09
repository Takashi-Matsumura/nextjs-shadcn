import { Table } from "@tanstack/react-table";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  FaceSmileIcon,
  PauseCircleIcon,
  PlusIcon,
} from "@heroicons/react/24/outline";

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

export function DataTableToolbar<TData>({
  table,
}: DataTableToolbarProps<TData>) {
  return (
    <div className="flex items-center py-4">
      <div className=" flex items-center space-x-3">
        <Drawer>
          <DrawerTrigger asChild>
            <Button variant="outline">
              <PlusIcon className="h-4 w-4" />
              New
            </Button>
          </DrawerTrigger>
          <DrawerContent>
            <UserForm
              openType="create"
              className="px-4 grid items-start gap-4"
            />
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
