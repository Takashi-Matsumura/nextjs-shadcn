import { fetchRevenue, fetchUsers } from "@/app/lib/data";

export default async function Page() {
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
