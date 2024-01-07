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

import { DataTableFacetedFilter } from "./data-table-faceted-filter";

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
        <Button variant="outline" className="gap-2">
          <PlusIcon className="h-4 w-4" />
          New
        </Button>
        <Input
          placeholder="ふりがな検索..."
          value={
            (table.getColumn("nameKana")?.getFilterValue() as string) ?? ""
          }
          onChange={(event) =>
            table.getColumn("nameKana")?.setFilterValue(event.target.value)
          }
          className="max-w-sm"
        />
        {table.getColumn("status") && (
          <DataTableFacetedFilter
            column={table.getColumn("status")}
            title="Status"
            options={statuses}
          />
        )}
      </div>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="outline" className="ml-auto">
            Columns <ChevronDown className="ml-2 h-4 w-4" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          {table
            .getAllColumns()
            .filter((column) => column.getCanHide())
            .map((column) => {
              return (
                <DropdownMenuCheckboxItem
                  key={column.id}
                  className="capitalize"
                  checked={column.getIsVisible()}
                  onCheckedChange={(value) => column.toggleVisibility(!!value)}
                >
                  {column.id}
                </DropdownMenuCheckboxItem>
              );
            })}
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}
