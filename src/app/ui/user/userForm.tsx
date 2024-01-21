"use client";

import * as React from "react";
import { Check, ChevronsUpDown } from "lucide-react";

import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { DrawerClose } from "@/components/ui/drawer";
import { Switch } from "@/components/ui/switch";

import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

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

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { toast } from "@/components/ui/use-toast";

type UserFormProps = {
  className?: string;
  // 他のpropsもここに追加します
  openType: "create" | "edit";
  user: User | null;
};

const FormSchema = z.object({
  username: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
  useremail: z.string().email({ message: "Invalid email address." }),
  userpassword: z.string().min(8, {
    message: "Password must be at least 8 characters.",
  }),
});

export function UserForm({ openType, user }: UserFormProps) {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      username: user?.name ?? "",
      useremail: user?.email ?? "",
      userpassword: user?.password ?? "",
    },
  });

  const handleSubmit = (values: z.infer<typeof FormSchema>) => {
    if (openType === "create") {
      const formData = new FormData();
      formData.append("username", values.username);
      formData.append("useremail", values.useremail);
      formData.append("userpassword", values.userpassword);

      toast({
        title: "createUser...",
        description: <pre></pre>,
      });

      console.log("createUser", formData);
      createUser(values);
    } else {
    }

    // toast({
    //   title: "You submitted the following values:",
    //   description: (
    //     <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
    //       <code className="text-white">{JSON.stringify(values, null, 2)}</code>
    //     </pre>
    //   ),
    // });
  };

  const onSubmit = (data: z.infer<typeof FormSchema>) => {
    toast({
      title: "You submitted the following values:",
      description: (
        <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
          <code className="text-white">{JSON.stringify(data, null, 2)}</code>
        </pre>
      ),
    });
  };

  return (
    <Form {...form}>
      <form className="p-10" onSubmit={form.handleSubmit(handleSubmit)}>
        <Card>
          <CardHeader>
            <CardTitle>
              {openType === "create" ? "Create user" : "Edit user"}
            </CardTitle>
            <CardDescription>note</CardDescription>
          </CardHeader>
          <CardContent className="flex items-center justify-center gap-10">
            <FormField
              control={form.control}
              name="username"
              render={({ field }) => (
                <FormItem className="flex items-center justify-between gap-5">
                  <FormLabel>Username</FormLabel>
                  <FormControl>
                    <Input placeholder="user name" {...field} />
                  </FormControl>
                  {/* <FormDescription>This is a user name.</FormDescription> */}
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="useremail"
              render={({ field }) => (
                <FormItem className="flex items-center justify-between gap-5">
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input placeholder="user email" type="emal" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="userpassword"
              render={({ field }) => (
                <FormItem className="flex items-center justify-between gap-5">
                  <FormLabel>Password</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="user password"
                      type="password"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </CardContent>
        </Card>

        <div className="pt-10 flex items-center justify-between">
          <Button type="submit">Save changes</Button>
          <DrawerClose asChild>
            <Button variant="outline">Cancel</Button>
          </DrawerClose>
        </div>
      </form>
    </Form>
  );
}
