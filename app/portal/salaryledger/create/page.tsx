import Form from "@/app/ui/salaryledger/create-form";
import Breadcrumbs from "@/app/ui/payslip/breadcrumbs";
import { fetchEmployees } from "@/app/lib/data";

import { Metadata } from "next";
import { EmployeeField } from "@/app/lib/definitions";

export const metadata: Metadata = {
  title: "Create Salary Ledger",
};

export default async function Page({
  customers,
}: {
  customers: EmployeeField[];
}) {
  const employees = await fetchEmployees();

  return (
    <main>
      <Breadcrumbs
        breadcrumbs={[
          { label: "SalaryLedger", href: "/portal/salaryledger" },
          {
            label: "Create SalaryLedge",
            href: "/portal/salaryledger/create",
            active: true,
          },
        ]}
      />
      <Form  />
    </main>
  );
}
