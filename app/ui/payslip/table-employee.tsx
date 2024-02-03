import Image from "next/image";
import { PaySlipDetails, PaySlipDetailsEmployee } from "@/app/ui/payslip/buttons";
import { formatDateToLocal, formatCurrency } from "@/app/lib/utils";
import { fetchFilteredPayslips} from "@/app/lib/data";


export default async function PaySlipTable({
  query,
  currentPage,
}: {
  query: string;
  currentPage: number;
}) {
  // const payslips = await fetchFilteredPayslips(query, currentPage);


  const employeeId = "3958dc9e-787f-4377-85e9-fec4b6a6442d";
  const payslips = await fetchFilteredPayslips(query,currentPage,employeeId);


  

// try {
//   const payslipsForEmployee = await fetchPayslipsForEmployee(employeeId);
//   console.log("Payslips for employee:", payslipsForEmployee);
// } catch (error) {
//   console.error("Error fetching payslips for employee:", error.message);
// }


  return (

    <div className="mt-6 flow-root">
      <div className="inline-block min-w-full align-middle">
        <div className="rounded-lg bg-gray-50 p-2 md:pt-0">
          <div className="md:hidden">
            {payslips?.map((payslip) => (
              <div
                key={payslip.id}
                className="mb-2 w-full rounded-md bg-white p-4"
              >
                <div className="flex items-center justify-between border-b pb-4">
                  <div>
                    <div className="mb-2 flex items-center">
                      <p>{payslip.id}</p>
                    </div>
                    <p className="text-sm text-gray-500">
                      {payslip.employee_id}
                    </p>
                  </div>
                </div>
                <div className="flex w-full items-center justify-between pt-4">
                  <div>
                    <p>{formatDateToLocal(payslip.pay_period)}</p>
                  </div>
                  <div className="flex justify-end gap-2">
                    <PaySlipDetails id={payslip.id} />
                  </div>
                </div>
              </div>
            ))}
          </div>
          <table className="hidden min-w-full text-gray-900 md:table">
            <thead className="rounded-lg text-left text-sm font-normal">
              <tr>
                <th scope="col" className="px-4 py-5 font-bold sm:pl-6">
                  Date
                </th>
                <th scope="col" className="px-3 py-5 font-bold">
                  Employee ID
                </th>
                <th scope="col" className="px-3 py-5 font-bold">
                  Employee Name
                </th>
                <th scope="col" className="px-3 py-5 font-bold">
                  Position
                </th>
                <th scope="col" className="px-3 py-5 font-bold">
                
                </th>
                <th scope="col" className="px-3 py-5 font-bold">
                  Details
                </th>
              </tr>
            </thead>
            <tbody className="bg-white">
              {payslips?.map((payslip) => (
                <tr
                  key={payslip.id}
                  className="w-full border-b py-3 text-sm last-of-type:border-none [&:first-child>td:first-child]:rounded-tl-lg [&:first-child>td:last-child]:rounded-tr-lg [&:last-child>td:first-child]:rounded-bl-lg [&:last-child>td:last-child]:rounded-br-lg"
                >
                  <td className="whitespace-nowrap py-3 pl-6 pr-3">
                    <div className="flex items-center gap-3">
                      {formatDateToLocal(payslip.pay_period)}
                    </div>
                  </td>
                  <td className="whitespace-nowrap px-3 py-3">
                    {payslip.employee_id}
                  </td>
                  <td className="whitespace-nowrap px-3 py-3">
                    {payslip.name}
                  </td>
                  <td className="whitespace-nowrap px-3 py-3">
                    {payslip.position}
                  </td>
                  <td className="whitespace-nowrap px-3 py-3"></td>
                  <td className="whitespace-nowrap py-3 pl-6 pr-3">
                    <div className="flex justify-end gap-3">
                      <PaySlipDetailsEmployee id={payslip.id} />
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
