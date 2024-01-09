"use client";

import * as React from "react";
import { Check, ChevronsUpDown } from "lucide-react";

import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { DrawerClose } from "@/components/ui/drawer";
import { Switch } from "@/components/ui/switch";

import { cn } from "@/lib/utils";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

type UserFormProps = {
  className?: string;
  // 他のpropsもここに追加します
  openType: "create" | "edit";
};

export function UserForm({ openType }: UserFormProps) {
  const frameworks = [
    {
      value: "next.js",
      label: "Aさん",
    },
    {
      value: "sveltekit",
      label: "Bさん",
    },
    {
      value: "nuxt.js",
      label: "Cさん",
    },
    {
      value: "remix",
      label: "Dさん",
    },
    {
      value: "astro",
      label: "Eさん",
    },
  ];

  return (
    <form className="p-10">
      <Card>
        <CardHeader>
          <CardTitle>
            {openType === "create" ? "Create user" : "Edit user"}
          </CardTitle>
          <CardDescription>note</CardDescription>
        </CardHeader>
        <CardContent className="flex items-center justify-between">
          <div className="flex space-x-4 items-center">
            <Label htmlFor="user">Select User</Label>
            <Popover>
              <PopoverTrigger asChild>
                <Button
                  variant="outline"
                  role="combobox"
                  className="w-[200px] justify-between"
                >
                  {/* {value
                    ? frameworks.find((framework) => framework.value === value)
                        ?.label
                    : "Select framework..."} */}
                  <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-[200px] p-0">
                <Command>
                  <CommandInput placeholder="Search framework..." />
                  <CommandEmpty>No framework found.</CommandEmpty>
                  <CommandGroup>
                    {frameworks.map((framework) => (
                      <CommandItem
                        key={framework.value}
                        value={framework.value}
                        onSelect={(currentValue) => {
                          // setValue(currentValue === value ? "" : currentValue);
                          // setOpen(false);
                        }}
                      >
                        {/* <Check
                          className={cn(
                            "mr-2 h-4 w-4",
                            value === framework.value
                              ? "opacity-100"
                              : "opacity-0"
                          )}
                        /> */}
                        {framework.label}
                      </CommandItem>
                    ))}
                  </CommandGroup>
                </Command>
              </PopoverContent>
            </Popover>
          </div>
          <div className="flex space-x-4 items-center">
            <Switch />
            <Label htmlFor="manager">Manager</Label>
          </div>
          <div className="flex space-x-4 items-center">
            <Switch />
            <Label htmlFor="member">Member</Label>
          </div>
        </CardContent>
      </Card>

      <div className="pt-10 flex items-center justify-between">
        <Button type="submit">Save changes</Button>
        <DrawerClose asChild>
          <Button variant="outline">Cancel</Button>
        </DrawerClose>
      </div>
    </form>
  );
}
