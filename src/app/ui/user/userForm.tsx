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
import { Input } from "@/components/ui/input";

type UserFormProps = {
  className?: string;
  // 他のpropsもここに追加します
  openType: "create" | "edit";
};

export function UserForm({ openType }: UserFormProps) {
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
            <Label htmlFor="name">Username</Label>
            <Input type="text" id="name" />
          </div>
          <div className="flex space-x-4 items-center">
            <Label htmlFor="email">Email</Label>
            <Input type="email" id="email" />
          </div>
          <div className="flex space-x-4 items-center">
            <Label htmlFor="password">Password</Label>
            <Input type="password" id="password" />
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
