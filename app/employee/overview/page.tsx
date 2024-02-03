import React from "react";

export default function Page() {
  return (
    <>
      <div className="p-6">
        <h1 className="text-4xl font-bold mb-4">PERSONAL DETAILS:</h1>
        <hr />
        <table className="table-fixed w-full">
          <tbody>
            <tr className="flex">
              <td className="py-7 flex-1">
                <b className=" p-2 w-0 rounded-md text-lg">Full name :</b> Oliver
                Nyirongo
              </td>
              <td className="py-7 flex-1">
                <b className=" p-2 w-0 rounded-md text-lg">Phone Number:</b>0882748301
              </td>
            </tr>

            <tr className="flex">
              <td className="py-7 flex-1">
                <b className=" p-2 w-0 rounded-md text-lg">Date of Birth :</b>{" "}
                07-06-2000{" "}
              </td>
              <td className="py-7 flex-1">
                <b className=" p-2 w-0 rounded-md text-lg">Grade:</b> G{" "}
              </td>
            </tr>

            <tr className="flex">
              <td className="py-7 flex-1">
                <b className=" p-2 w-0 rounded-md text-lg">Position:</b> HR manager{" "}
              </td>
              <td className="py-7 flex-1">
                <b className=" p-2 w-0 rounded-md text-lg">Email: </b>{" "}
                olivernyirongo@gmail.com
              </td>
            </tr>

            <tr className="flex">
              <td className="py-7 flex-1">
                <b className=" p-2 w-0 rounded-md text-lg">Image: </b>null{" "}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}
