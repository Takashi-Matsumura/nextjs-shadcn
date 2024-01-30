import { fetchUsers } from "@/app/lib/data";
import { DataTableQuery } from "@/app/ui/user/datatable-query";

export default async function Page() {
  const users = await fetchUsers();
  //console.log(users);

  console.log("1**" + process.env.POSTGRES_URL);

  return (
    <>
      <DataTableQuery data={users} />
    </>
  );
}
