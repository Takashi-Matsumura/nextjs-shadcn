// "use client";

import { DataTableQuery } from "@/app/ui/user/datatable-query";
import { fetchRevenue, fetchUsers } from "@/app/lib/data";
import { useEffect, useState } from "react";
import { User } from "@/app/lib/definitions";

export default async function Page() {
  const data = await fetchRevenue();
  console.log(data);
  const users = await fetchUsers();
  console.log(users);

  // return <DataTableQuery data={data} />;
  // return <DataTableQuery />;
  return (
    <div>
      <h1>User page</h1>
    </div>
  );
}
