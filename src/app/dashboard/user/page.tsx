import { fetchUsers } from "@/app/lib/data";
import { DataTableQuery } from "@/app/ui/user/datatable-query";

export default async function Page() {
  const users = await fetchUsers();

  return (
    <>
      <DataTableQuery data={users} />
    </>
  );
}
