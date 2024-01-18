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
import { useFormState } from "react-dom";
import { init } from "next/dist/compiled/webpack/webpack";
import { User } from "./data/schema";
import { createUser } from "@/app/lib/data";

type UserFormProps = {
  className?: string;
  // 他のpropsもここに追加します
  openType: "create" | "edit";
  user: User | null;
};

export function UserForm({ openType, user }: UserFormProps) {
  //console.log(user);
  // if (user) {
  //   const { id, name, email, password } = user;
  // }

  const initialState = {
    errors: {
      name: [],
      email: [],
      password: [],
    },
    message: "",
  };

  type State = {
    name?: string;
    email?: string;
    password?: string;
    errors?: {
      name?: string[];
      email?: string[];
      password?: string[];
    };
    message?: string | null;
  };

  const action = async (state: State) => {
    console.log(state);

    const formData = new FormData();
    formData.append("name", state.name ?? "");
    formData.append("email", state.email ?? "");
    formData.append("password", state.password ?? "");

    const result = await createUser(state, formData);
    return result;
  };

  const [state, dispatch] = useFormState(action, initialState);

  return (
    <form className="p-10" action={dispatch}>
      <Card>
        <CardHeader>
          <CardTitle>
            {openType === "create" ? "Create user" : "Edit user"}
          </CardTitle>
          <CardDescription>note</CardDescription>
        </CardHeader>
        <CardContent className="flex items-center justify-center gap-10">
          <div className="flex space-x-4 items-center">
            <Label htmlFor="name">Username</Label>
            <Input type="text" id="name" defaultValue={user?.name} />
          </div>
          <div className="flex space-x-4 items-center">
            <Label htmlFor="email">Email</Label>
            <Input type="email" id="email" defaultValue={user?.email} />
          </div>
          <div className="flex space-x-4 items-center">
            <Label htmlFor="password">Password</Label>
            <Input
              type="password"
              id="password"
              defaultValue={user?.password}
            />
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
