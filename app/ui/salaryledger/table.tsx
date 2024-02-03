import Image from "next/image";
import { DeletePayslip, UpdateSalaryLedger } from "@/app/ui/payslip/buttons";
import { formatDateToLocal, formatCurrency } from "@/app/lib/utils";
import { fetchFilteredSalaryLedger } from "@/app/lib/data";
import { salaryledgers } from "@/app/lib/placeholder-data";

export default async function SalaryLedgerTable({
  query,
  currentPage,
}: {
  query: string;
  currentPage: number;
}) {
  const salaryledgers = await fetchFilteredSalaryLedger(query, currentPage);

  return (
    <div className="mt-6 flow-root">
      <div className="inline-block min-w-full align-middle">
        <div className="rounded-lg bg-gray-50 p-2 md:pt-0">
          <div className="md:hidden">
            {salaryledgers?.map((salaryledger) => (
              <div
                key={salaryledger.id}
                className="mb-2 w-full rounded-md bg-white p-4"
              >
                <div className="flex items-center justify-between border-b pb-4">
                  <div>
                    <div className="mb-2 flex items-center">
                      <p>{salaryledger.id}</p>
                    </div>
                    <p className="text-sm text-gray-500">
                      {salaryledger.employee_id}
                    </p>
                  </div>
                </div>
                <div className="flex w-full items-center justify-between pt-4">
                  <div>
                    {/* <p>{formatDateToLocal(salaryledger.pay_period)}</p> */}
                    <p>{salaryledger.pay_period}</p>
                  </div>
                  <div className="flex justify-end gap-2">
                    <UpdateSalaryLedger id={salaryledger.id} />
                    <DeletePayslip id={salaryledger.id} />
                  </div>
                </div>
              </div>
            ))}
          </div>
          <table className="hidden min-w-full text-gray-900 md:table">
            <thead className="rounded-lg text-left text-sm font-normal">
              <tr>
                <th scope="col" className="px-2 py-5 font-bold sm:pl-6">
                  Date Of Employment
                </th>
                <th scope="col" className="px-2 py-5 font-bold">
                  Employee Name
                </th>
                <th scope="col" className="px-2 py-5 font-bold">
                  Email
                </th>
                <th scope="col" className="px-2 py-5 font-bold">
                  Position
                </th>
                <th scope="col" className="px-1 py-5 font-bold">
                  Grade
                </th>

                <th scope="col" className="px-1 py-5 font-bold">
                  Currency
                </th>
                <th scope="col" className="px-2 py-5 font-bold">
                  Department
                </th>
                <th scope="col" className="px-2 py-5 font-bold">
                  Payment Method
                </th>

                <th scope="col" className="px-2 py-5 font-bold">
                  Net_salary
                </th>
              </tr>
            </thead>
            <tbody className="bg-white">
              {salaryledgers?.map((salaryledger) => (
                <tr
                  key={salaryledger.id}
                  className="w-full border-b py-3 text-sm last-of-type:border-none [&:first-child>td:first-child]:rounded-tl-lg [&:first-child>td:last-child]:rounded-tr-lg [&:last-child>td:first-child]:rounded-bl-lg [&:last-child>td:last-child]:rounded-br-lg"
                >
                  <td className="whitespace-nowrap py-3 pl-6 pr-3">
                    <div className="flex items-center gap-3">
                      {/* {formatDateToLocal(salaryledger.date_of_employment)} */}
                      {salaryledger.date_of_employment}
                    </div>
                  </td>
                  <td className="whitespace-nowrap px-3 py-3">
                    {salaryledger.name}
                  </td>
                  <td className="whitespace-nowrap px-3 py-3">
                    {salaryledger.email}
                  </td>
                  <td className="whitespace-nowrap px-3 py-3">
                    {salaryledger.position}
                  </td>
                  <td className="whitespace-nowrap px-1 py-3">
                    {salaryledger.grade}
                  </td>

                  <td className="whitespace-nowrap px-1 py-3">
                    {salaryledger.currency}
                  </td>
                  <td className="whitespace-nowrap px-3 py-3">
                    {salaryledger.department}
                  </td>
                  <td className="whitespace-nowrap px-3 py-3">
                    {salaryledger.method_of_payment}
                  </td>

                  <td className="whitespace-nowrap px-3 py-3">
                    {salaryledger.net_salary}
                  </td>

                  <td className="whitespace-nowrap py-3 pl-6 pr-3">
                    <div className="flex justify-end gap-3">
                      <UpdateSalaryLedger id={salaryledger.id} />
                      <DeletePayslip id={salaryledger.id} />
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
