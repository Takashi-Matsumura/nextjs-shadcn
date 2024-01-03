"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Page() {
  return (
    <main className="flex min-h-screen flex-col p-6">
      <div>
        <Button onClick={() => console.log("hello")}>Click me</Button>
      </div>
    </main>
  );
}
