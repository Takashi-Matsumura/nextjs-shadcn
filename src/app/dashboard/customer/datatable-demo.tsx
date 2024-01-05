"use client";

import * as React from "react";
import {
  ColumnDef,
  ColumnFiltersState,
  SortingState,
  VisibilityState,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { ArrowUpDown, ChevronDown, MoreHorizontal } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

const data: Customer[] = [
  {
    id: "46716243",
    nameKanji: "鈴木一郎",
    nameKana: "すずきいちろう",
    gender: "男性",
    birthDate: "2008-05-08",
    postalCode: "982-9090",
    address: "浦添市沢岻",
    phoneNumber: "702-9846-7912",
    email: "example@mail",
    specialNotes: "",
    status: "inactive",
  },
  {
    id: "83561675",
    nameKanji: "田中優子",
    nameKana: "たなかゆうこ",
    gender: "女性",
    birthDate: "1979-09-13",
    postalCode: "216-6594",
    address: "那覇市安里",
    phoneNumber: "232-9746-7235",
    email: "example@mail",
    specialNotes: "特記事項あり",
    status: "active",
  },
  {
    id: "76110738",
    nameKanji: "伊藤健太",
    nameKana: "いとうけんた",
    gender: "男性",
    birthDate: "1987-06-24",
    postalCode: "405-1268",
    address: "那覇市牧志",
    phoneNumber: "285-8433-4981",
    email: "example@mail",
    specialNotes: "",
    status: "active",
  },
  {
    id: "82631747",
    nameKanji: "鈴木一郎",
    nameKana: "すずきいちろう",
    gender: "男性",
    birthDate: "1994-01-14",
    postalCode: "205-3991",
    address: "浦添市港川",
    phoneNumber: "247-2343-7689",
    email: "example@mail",
    specialNotes: "",
    status: "inactive",
  },
  {
    id: "24783243",
    nameKanji: "田中優子",
    nameKana: "たなかゆうこ",
    gender: "女性",
    birthDate: "1985-05-25",
    postalCode: "678-8645",
    address: "浦添市城間",
    phoneNumber: "223-9587-2655",
    email: "example@mail",
    specialNotes: "",
    status: "inactive",
  },
];

export type Customer = {
  id: string;
  nameKanji: string;
  nameKana: string;
  gender: string;
  birthDate: string;
  postalCode: string;
  address: string;
  phoneNumber: string;
  email: string;
  specialNotes: string;
  status: "active" | "inactive";
};

export const columns: ColumnDef<Customer>[] = [
  {
    accessorKey: "nameKanji",
    header: "氏名",
    cell: ({ row }) => {
      const birthDate = new Date(row.getValue("birthDate"));
      const today = new Date();
      let age = today.getFullYear() - birthDate.getFullYear();
      const m = today.getMonth() - birthDate.getMonth();
      if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
        age--;
      }

      const gender = row.getValue("gender");
      const status = row.getValue("status");
      let bgColor, textColor;

      if (gender === "男性" && status === "active") {
        bgColor = "bg-blue-700";
        textColor = "text-white";
      } else if (gender === "男性" && status === "inactive") {
        bgColor = "bg-blue-200";
        textColor = "text-black";
      } else if (gender !== "男性" && status === "active") {
        bgColor = "bg-pink-700";
        textColor = "text-white";
      } else {
        bgColor = "bg-pink-200";
        textColor = "text-black";
      }

      return (
        <div className="flex items-center space-x-4">
          <Avatar>
            <AvatarFallback className={`${bgColor} ${textColor}`}>
              {age}
            </AvatarFallback>
          </Avatar>
          <div className="w-full">
            <p className="text-sm">{row.getValue("nameKana")}</p>
            <p className="text-lg">{row.getValue("nameKanji")}</p>
          </div>
          <p className="text-xs text-right w-full">
            {row.getValue("specialNotes")}
          </p>
        </div>
      );
    },
  },
  {
    // 非表示カラム
    accessorKey: "nameKana",
    header: "ふりがな",
  },
  {
    // 非表示カラム
    accessorKey: "gender",
    header: "性別",
  },
  {
    // 非表示カラム
    accessorKey: "birthDate",
    header: "年齢",
  },
  {
    accessorKey: "address",
    header: "住所",
  },
  {
    accessorKey: "phoneNumber",
    header: "連絡先",
    cell: ({ row }) => {
      return (
        <div className="flex flex-col">
          <p>{row.getValue("phoneNumber")}</p>
          <p>{row.getValue("email")}</p>
        </div>
      );
    },
  },
  {
    // 非表示カラム
    accessorKey: "email",
    header: "メールアドレス",
  },
  {
    // 非表示カラム
    accessorKey: "specialNotes",
    header: "特記事項",
  },
  {
    // 非表示カラム
    accessorKey: "status",
    header: "ステータス",
  },
];

export function DataTableDemo() {
  const [sorting, setSorting] = React.useState<SortingState>([]);
  const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>(
    []
  );
  // const [columnVisibility, setColumnVisibility] =
  //   React.useState<VisibilityState>({});
  const [columnVisibility, setColumnVisibility] =
    React.useState<VisibilityState>({
      nameKana: false,
      gender: false,
      birthDate: false,
      email: false,
      specialNotes: false,
      status: false,
    });
  const [rowSelection, setRowSelection] = React.useState({});

  const table = useReactTable({
    data,
    columns,
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    onColumnVisibilityChange: setColumnVisibility,
    onRowSelectionChange: setRowSelection,
    state: {
      sorting,
      columnFilters,
      columnVisibility,
      rowSelection,
    },
  });

  return (
    <div className="w-full">
      <div className="flex items-center py-4">
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
                    onCheckedChange={(value) =>
                      column.toggleVisibility(!!value)
                    }
                  >
                    {column.id}
                  </DropdownMenuCheckboxItem>
                );
              })}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
      <div className="rounded-md border">
        <Table>
          <TableHeader>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => {
                  return (
                    <TableHead key={header.id}>
                      {header.isPlaceholder
                        ? null
                        : flexRender(
                            header.column.columnDef.header,
                            header.getContext()
                          )}
                    </TableHead>
                  );
                })}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map((row) => (
                <TableRow
                  key={row.id}
                  data-state={row.getIsSelected() && "selected"}
                >
                  {row.getVisibleCells().map((cell) => (
                    <TableCell key={cell.id}>
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell
                  colSpan={columns.length}
                  className="h-24 text-center"
                >
                  No results.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
      <div className="flex items-center justify-end space-x-2 py-4">
        <div className="flex-1 text-sm text-muted-foreground">
          {table.getFilteredSelectedRowModel().rows.length} of{" "}
          {table.getFilteredRowModel().rows.length} row(s) selected.
        </div>
        <div className="space-x-2">
          <Button
            variant="outline"
            size="sm"
            onClick={() => table.previousPage()}
            disabled={!table.getCanPreviousPage()}
          >
            Previous
          </Button>
          <Button
            variant="outline"
            size="sm"
            onClick={() => table.nextPage()}
            disabled={!table.getCanNextPage()}
          >
            Next
          </Button>
        </div>
      </div>
    </div>
  );
}
