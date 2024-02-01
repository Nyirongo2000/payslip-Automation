import React from 'react';

export default function Page() {
  return (
    <>
      <div className="p-6">
        <h1 className="text-2xl font-bold mb-4">MY PAYSLIP</h1>
        <table className="table-fixed w-full">
          <tbody>
            <tr className="flex">
              <td className="py-7 flex-1">ID:</td>
              <td className="py-7 flex-1">EMPLOYEE NUMBER:</td>
            </tr>
            <tr className="flex">
              <td className="py-7 flex-1">SALARY:</td>
              <td className="py-7 flex-1">EMPLOYEMENT DATE:</td>
            </tr>
            <tr className="flex">
              <td className="py-7 flex-1">PAY PERIOD:</td>
              <td className="py-7 flex-1">CURRENCY:</td>
            </tr>
            <tr className="flex">
              <td className="py-7 flex-1">DEPARTMENT:</td>
              <td className="py-7 flex-1">POSITION:</td>
            </tr>
            <tr className="flex">
              <td className="py-7 flex-1">PAYMENT METHOD:</td>
              <td className="py-7 flex-1">GROSS TOTAL:</td>
            </tr>
            <tr className="flex">
              <td className="py-7 flex-1">DEDUCTION MASS:</td>
              <td className="py-7 flex-1">DEDUCTION PAYE:</td>
            </tr>
            <tr className="flex">
              <td className="py-7 flex-1">NET SALARY:</td>
            
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}
