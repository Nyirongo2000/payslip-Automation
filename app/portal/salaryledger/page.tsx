import React from 'react';

export default function Page() {
  return (
    <>
      <div className="p-6">
        <h1 className="text-2xl font-bold mb-4">SALARY LEDGER</h1>
        <table className="table-fixed w-full">
          <tbody>
            <tr className="flex bg-gray-200">
              <th className="py-3 px-6 flex-1">Name</th>
              <th className="py-3 px-6 flex-1">Employees_ID</th>
              <th className="py-3 px-6 flex-1">Annual Salary</th>
              <th className="py-3 px-6 flex-1">Hourly Rate</th>
              <th className="py-3 px-6 flex-1">Overtime Rate</th>
              <th className="py-3 px-6 flex-1">Gross Weekly</th>
              <th className="py-3 px-6 flex-1">Tax With-holding Rate</th>
              <th className="py-3 px-6 flex-1">Net weekly pay</th>
            </tr>
            <tr className="flex">
              <td className="py-3 px-6 flex-1">John Doe</td>
              <td className="py-3 px-6 flex-1">EMP123</td>
              <td className="py-3 px-6 flex-1">$60,000</td>
              <td className="py-3 px-6 flex-1">$25</td>
              <td className="py-3 px-6 flex-1">$30</td>
              <td className="py-3 px-6 flex-1">$1,200</td>
              <td className="py-3 px-6 flex-1">15%</td>
              <td className="py-3 px-6 flex-1">$1,020</td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}
