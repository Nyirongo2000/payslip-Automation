import Form from "@/app/ui/salaryledger/edit-form";
import Breadcrumbs from "@/app/ui/payslip/breadcrumbs";
import { fetchSalaryLedgerId, fetchEmployees } from "@/app/lib/data";
import { notFound } from "next/navigation";

export default async function Page({ params }: { params: { id: string } }) {
  const id = params.id;

  // const [invoice, customers] = await Promise.all([
  //     fetchInvoiceById(id),
  //     fetchCustomers(),
  //   ]);
  const [salaryledger, employees] = await Promise.all([
    fetchSalaryLedgerId(id),
    fetchEmployees(),
  ]);

  if (!salaryledger) {
    notFound();
  }

  return (
    <main>
      <Breadcrumbs
        breadcrumbs={[
          { label: "Payslip", href: "/portal/payslip" },
          {
            label: "Edit SalaryLedger",
            href: `/portal/salaryledgers/${id}/edit`,
            active: true,
          },
        ]}
      />
      {/* <Form salaryLedger={salaryledger} employees={employees} /> */}
    </main>
  );
}
