"use client";

import * as React from "react";
import { Check, ChevronsUpDown } from "lucide-react";

import { Button } from "@/components/ui/button";
import { DrawerClose } from "@/components/ui/drawer";

import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { User } from "./data/schema";
import { createUser, fetchUsers, testFunction } from "@/app/lib/data";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { toast } from "@/components/ui/use-toast";

import axios from "axios";
import { dbConnectionCheck } from "@/app/lib/actions";

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
  console.log("UserForm is rendering", openType, user);
  console.log("b-- " + process.env.POSTGRES_URL);

  React.useEffect(() => {
    console.log("c-- " + process.env.POSTGRES_URL);
  }, []);

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
      //testFunction();
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
    ("use server");
    console.log("hoge");
  };

  return (
    <Form {...form}>
      <form className="p-10" action={dbConnectionCheck}>
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
