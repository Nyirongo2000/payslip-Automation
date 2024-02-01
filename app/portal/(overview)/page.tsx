import React from 'react';

export default function Page() {
  return (
    <>
      <div className="p-6">
        <h1 className="text-2xl font-bold mb-4">PERSONAL DETAILS</h1>
        <table className="table-fixed w-full">
          <tbody>
            <tr className="flex">
              <td className="py-7 flex-1">Full Name:</td>
              <td className="py-7 flex-1">Number:</td>
            </tr>
            <tr className="flex">
              <td className="py-7 flex-1">DOB:</td>
              <td className="py-7 flex-1">Grade:</td>
            </tr>
            <tr className="flex">
              <td className="py-7 flex-1">Position:</td>
              <td className="py-7 flex-1">Email:</td>
            </tr>
            <tr className="flex">
              <td className="py-7 flex-1">Image:</td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}
