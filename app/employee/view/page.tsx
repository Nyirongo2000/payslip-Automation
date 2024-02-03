import { fetchPaySlipById } from "@/app/lib/data";

export default async function PaySlipDetailsForm({ id }: { id: string }) {
  // const payslip = await fetchPaySlipById(id);
  // const idd =""

  // const payslip = await fetchPaySlipById(idd);

  return (
    <>
      <div className="p-6">
        <h1 className="text-2xl font-bold mb-4">MY PAYSLIP</h1>
        <table className="table-fixed w-full">
          <tbody>
            <tr className="flex">
              <td className="py-7 flex-1">
                <strong>PaySlip ID : {""}</strong>9
              </td>
              <td className="py-7 flex-1">
                <strong>EMPLOYEE NUMBER : </strong>
                E15{" "}
              </td>
            </tr>
            <tr className="flex">
              <td className="py-7 flex-1">
                <strong>SALARY : </strong>
                3040
              </td>
              <td className="py-7 flex-1">
                <strong>EMPLOYEMENT DATE : </strong>
                Mar 10,2022
              </td>
            </tr>
            <tr className="flex">
              <td className="py-7 flex-1">
                <strong> PAY PERIOD : </strong>
                Aug 08,2023{" "}
              </td>
              <td className="py-7 flex-1">
                <strong>CURRENCY : </strong>
                MWK
              </td>
            </tr>
            <tr className="flex">
              <td className="py-7 flex-1">
                <strong>DEPARTMENT : </strong>
                Marketing
              </td>
              <td className="py-7 flex-1">
                <strong>POSITION : </strong>
                Product Manager
              </td>
            </tr>
            <tr className="flex">
              <td className="py-7 flex-1">
                <strong>PAYMENT METHOD : </strong>
                Direct Deposit
              </td>
              <td className="py-7 flex-1">
                <strong>GROSS TOTAL : </strong>
                3040
              </td>
            </tr>
            <tr className="flex">
              <td className="py-7 flex-1">
                <strong> DEDUCTION MASM : </strong>
                100
              </td>
              <td className="py-7 flex-1">
                <strong>DEDUCTION PAYE : </strong>
                40
              </td>
            </tr>
            <tr className="flex">
              <td className="py-7 flex-1">
                <strong>NET SALARY : </strong>
                2900
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}
// import { fetchPaySlipsById } from '@/app/lib/data';

// export default async function PaySlipDetailsForm({ id }: { id: string }) {
//   try {
//     const payslip = await fetchPaySlipsById(id);

//     return (
//       <>
//         <div className="p-6">
//           <h1 className="text-2xl font-bold mb-4">MY PAYSLIP</h1>
//           <table className="table-fixed w-full">
//             <tbody>
//               <tr className="flex">
//                 <td className="py-7 flex-1">ID: {payslip.id}</td>
//                 <td className="py-7 flex-1">EMPLOYEE NUMBER: {payslip.employee_id}</td>
//               </tr>
//               <tr className="flex">
//                 <td className="py-7 flex-1">SALARY: {payslip.salary}</td>
//                 <td className="py-7 flex-1">EMPLOYMENT DATE: {payslip.date_of_employment}</td>
//               </tr>
//               <tr className="flex">
//                 <td className="py-7 flex-1">PAY PERIOD: {payslip.pay_period}</td>
//                 <td className="py-7 flex-1">CURRENCY: {payslip.currency}</td>
//               </tr>
//               <tr className="flex">
//                 <td className="py-7 flex-1">DEPARTMENT: {payslip.department}</td>
//                 <td className="py-7 flex-1">POSITION: {payslip.position}</td>
//               </tr>
//               <tr className="flex">
//                 <td className="py-7 flex-1">PAYMENT METHOD: {payslip.method_of_payment}</td>
//                 <td className="py-7 flex-1">GROSS TOTAL: {payslip.gross_total}</td>
//               </tr>
//               <tr className="flex">
//                 <td className="py-7 flex-1">DEDUCTION MASS: {payslip.deduction_masm}</td>
//                 <td className="py-7 flex-1">DEDUCTION PAYE: {payslip.deduction_paye}</td>
//               </tr>
//               <tr className="flex">
//                 <td className="py-7 flex-1">NET SALARY: {payslip.net_salary}</td>
//               </tr>
//             </tbody>
//           </table>
//         </div>
//       </>
//     );
//   } catch (error) {
//     console.error('Error fetching payslip details:', error);
//     return <p>Error fetching payslip details.</p>;
//   }
// }
