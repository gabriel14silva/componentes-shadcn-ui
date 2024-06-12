import { payments } from "../../data/payments.data";
import { columns } from "./columns";
import { DataTable } from "./data-table";

async function fetchData() {
  return payments;
}

export default async function DataTablePage() {
  const data = await fetchData();

  return (
    <div>
      <DataTable columns={columns} data={data} />
    </div>
  );
}
