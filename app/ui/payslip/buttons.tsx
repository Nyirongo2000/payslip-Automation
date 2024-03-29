// import { deletePaySlip } from '@/app/lib/actions';
import { deleteSalaryLedger } from "@/app/lib/actions";
import { PencilIcon, PlusIcon, TrashIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
// import { deleteInvoice } from '@/app/lib/actions';

// export function CreateInvoice() {
//   return (
//     <Link
//       href="/dashboard/invoices/create"
//       className="flex h-10 items-center rounded-lg bg-blue-600 px-4 text-sm font-medium text-white transition-colors hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
//     >
//       <span className="hidden md:block">Create Invoice</span>{' '}
//       <PlusIcon className="h-5 md:ml-4" />
//     </Link>
//   );
// }
export function CreateSalaryLedger() {
  return (
    <Link
      href="/portal/salaryledger/create"
      className="flex h-10 items-center rounded-lg bg-blue-600 px-4 text-sm font-medium text-white transition-colors hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
    >
      <span className="hidden md:block">Salary Ledger Entry</span>{" "}
      <PlusIcon className="h-5 md:ml-4" />
    </Link>
  );
}
export function PaySlipDetails({ id }: { id: string }) {
  return (
    // <Link
    //   href={`/portal/payslips/${id}/details`}
    //   className="flex h-10 items-center rounded-lg bg-blue-600 px-4 text-sm font-medium text-white transition-colors hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
    // >
    <Link
      href={`/portal/payslips/view`}
      className="flex h-10 items-center rounded-lg bg-blue-600 px-4 text-sm font-medium text-white transition-colors hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
    >
      <span className="hidden md:block">Pay Slip Details</span>
    </Link>
  );
}

export function PaySlipDetailsEmployee({ id }: { id: string }) {
  return (
    // <Link
    //   href={`/portal/payslips/${id}/details`}
    //   className="flex h-10 items-center rounded-lg bg-blue-600 px-4 text-sm font-medium text-white transition-colors hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
    // >
    <Link
      href={`/employee/view`}
      className="flex h-10 items-center rounded-lg bg-blue-600 px-4 text-sm font-medium text-white transition-colors hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
    >
      <span className="hidden md:block">Pay Slip Details</span>
    </Link>
  );
}

export function UpdatePayslip({ id }: { id: string }) {
  return (
    <Link
      href={`/portal/payslips/${id}/edit`}
      className="rounded-md border p-2 hover:bg-gray-100"
    >
      <PencilIcon className="w-5" />
    </Link>
  );
}

export function DeletePayslip({ id }: { id: string }) {
  // const deletePaySlipWithId = deletePaySlip.bind(null, id);

  return (
    <>
      {/* <form action={deletePaySlipWithId}> */}
      <form action={""}>
        <button className="rounded-md border p-2 hover:bg-gray-100">
          <span className="sr-only">Delete</span>
          <TrashIcon className="w-5" />
        </button>
      </form>
    </>
  );
}

export function UpdateSalaryLedger({ id }: { id: string }) {
  return (
    <Link
      href={`/portal/salaryledger/${id}/edit`}
      className="rounded-md border p-2 hover:bg-gray-100"
    >
      <PencilIcon className="w-5" />
    </Link>
  );
}

export function DeleteSalaryLedger({ id }: { id: string }) {
  const deleteSalaryledgerWithId = deleteSalaryLedger.bind(null, id);

  return (
    <>
      <form action={deleteSalaryledgerWithId}>
        <button className="rounded-md border p-2 hover:bg-gray-100">
          <span className="sr-only">Delete</span>
          <TrashIcon className="w-5" />
        </button>
      </form>
    </>
  );
}
