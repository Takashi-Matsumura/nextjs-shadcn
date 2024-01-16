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
  // useEffect(() => {
  //   const data = fetchRevenue();
  //   console.log("User Page");
  // }, []);
  // const [data, setData] = useState<User[] | null>(null);
  // useEffect(() => {
  //   async function fetchData() {
  //     const result = await fetchUsers();
  //     setData(result);
  //   }
  //   fetchData();
  // }, []);
  // if (!data) {
  //   return <div>Loading...</div>;
  // }
  // return <DataTableQuery data={data} />;
  // return <DataTableQuery />;
  return (
    <div>
      <h1>User page</h1>
    </div>
  );
}
