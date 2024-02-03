"use client";

import { EmployeeField } from "@/app/lib/definitions";
import Link from "next/link";
import {
  CheckIcon,
  ClockIcon,
  CurrencyDollarIcon,
  UserCircleIcon,
} from "@heroicons/react/24/outline";
import { Button } from "@/app/ui/button";
// import { createSalaryLedger } from "@/app/lib/actions";
import { useFormState } from "react-dom";
import { createSalaryLedger } from "@/app/lib/actions";

export default function Form() {
  return (
    <form action={createSalaryLedger}>
      <div className="rounded-md bg-gray-50 p-4 md:p-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="col-span-1">
            <div className="mb-4">
              <label htmlFor="name" className="mb-2 block text-sm font-medium">
                Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                placeholder="Enter Full name"
                className="block w-full rounded-md border border-gray-200 py-2 px-3 text-sm outline-2 placeholder:text-gray-500"
              />
            </div>
          </div>

          <div className="col-span-1">
            <div className="mb-4">
              <label htmlFor="email" className="mb-2 block text-sm font-medium">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                placeholder="Enter email"
                className="block w-full rounded-md border border-gray-200 py-2 px-3 text-sm outline-2 placeholder:text-gray-500"
              />
            </div>
          </div>

          <div className="col-span-1">
            <div className="mb-4">
              <label
                htmlFor="position"
                className="mb-2 block text-sm font-medium"
              >
                Position
              </label>
              <input
                id="position"
                name="position"
                type="text"
                placeholder="Enter  position"
                className="block w-full rounded-md border border-gray-200 py-2 px-3 text-sm outline-2 placeholder:text-gray-500"
              />
            </div>
          </div>

          <div className="col-span-1">
            <div className="mb-4">
              <label htmlFor="grade" className="mb-2 block text-sm font-medium">
                Grade
              </label>
              <input
                id="grade"
                name="grade"
                type="text"
                placeholder="Enter your grade"
                className="block w-full rounded-md border border-gray-200 py-2 px-3 text-sm outline-2 placeholder:text-gray-500"
              />
            </div>
          </div>

          {/* <div className="col-span-1">
            <div className="mb-4">
              <label
                htmlFor="employee_id"
                className="mb-2 block text-sm font-medium"
              >
                Employee ID
              </label>
              <input
                id="employee_id"
                name="employee_id"
                type="text"
                placeholder="Enter employee ID"
                className="block w-full rounded-md border border-gray-200 py-2 px-3 text-sm outline-2 placeholder:text-gray-500"
              />
            </div>
          </div> */}

          {/* <div className="col-span-1">
            <div className="mb-4">
              <label
                htmlFor="date_of_employment"
                className="mb-2 block text-sm font-medium"
              >
                Date of Employment
              </label>
              <input
                id="date_of_employment"
                name="date_of_employment"
                type="text"
                placeholder="Enter date of employment"
                className="block w-full rounded-md border border-gray-200 py-2 px-3 text-sm outline-2 placeholder:text-gray-500"
              />
            </div>
          </div> */}

          <div className="col-span-1">
            <div className="mb-4">
              <label
                htmlFor="pay_period"
                className="mb-2 block text-sm font-medium"
              >
                Pay Period
              </label>
              <input
                id="pay_period"
                name="pay_period"
                type="text"
                placeholder="Enter pay period"
                className="block w-full rounded-md border border-gray-200 py-2 px-3 text-sm outline-2 placeholder:text-gray-500"
              />
            </div>
          </div>

          <div className="col-span-1">
            <div className="mb-4">
              <label
                htmlFor="currency"
                className="mb-2 block text-sm font-medium"
              >
                Currency
              </label>
              <input
                id="currency"
                name="currency"
                type="text"
                placeholder="Enter currency"
                className="block w-full rounded-md border border-gray-200 py-2 px-3 text-sm outline-2 placeholder:text-gray-500"
              />
            </div>
          </div>

          <div className="col-span-1">
            <div className="mb-4">
              <label
                htmlFor="department"
                className="mb-2 block text-sm font-medium"
              >
                Department
              </label>
              <input
                id="department"
                name="department"
                type="text"
                placeholder="Enter department"
                className="block w-full rounded-md border border-gray-200 py-2 px-3 text-sm outline-2 placeholder:text-gray-500"
              />
            </div>
          </div>

          <div className="col-span-1">
            <div className="mb-4">
              <label
                htmlFor="method_of_payment"
                className="mb-2 block text-sm font-medium"
              >
                Method of Payment
              </label>
              <input
                id="method_of_payment"
                name="method_of_payment"
                type="text"
                placeholder="Enter method of payment"
                className="block w-full rounded-md border border-gray-200 py-2 px-3 text-sm outline-2 placeholder:text-gray-500"
              />
            </div>
          </div>
          <div className="col-span-1">
            <div className="mb-4">
              <label
                htmlFor="salary"
                className="mb-2 block text-sm font-medium"
              >
                Gross Total
              </label>
              <input
                id="gross_total"
                name=""
                type="number"
                placeholder="Enter Salary"
                className="block w-full rounded-md border border-gray-200 py-2 px-3 text-sm outline-2 placeholder:text-gray-500"
              />
            </div>
          </div>
          <div className="col-span-1">
            <div className="mb-4">
              <label
                htmlFor="salary"
                className="mb-2 block text-sm font-medium"
              >
                Deduction: Masm
              </label>
              <input
                id="deduction_masm"
                name="deduction_masm"
                type="number"
                placeholder="Enter Amount"
                className="block w-full rounded-md border border-gray-200 py-2 px-3 text-sm outline-2 placeholder:text-gray-500"
              />
            </div>
          </div>

          <div className="col-span-1">
            <div className="mb-4">
              <label
                htmlFor="salary"
                className="mb-2 block text-sm font-medium"
              >
                Deduction : Paye
              </label>
              <input
                id="deduction_paye"
                name="deduction_paye"
                type="number"
                placeholder="Enter amount"
                className="block w-full rounded-md border border-gray-200 py-2 px-3 text-sm outline-2 placeholder:text-gray-500"
              />
            </div>
          </div>
          <div className="col-span-1">
            <div className="mb-4">
              <label
                htmlFor="net_salary"
                className="mb-2 block text-sm font-medium"
              >
                Net Salary
              </label>
              <input
                id="net_salary"
                name="net_salary"
                type="text"
                placeholder="Enter net salary"
                className="block w-full rounded-md border border-gray-200 py-2 px-3 text-sm outline-2 placeholder:text-gray-500"
              />
            </div>
          </div>
        </div>

        <div className="mt-6 flex justify-end gap-4">
          <Link
            href="/portal/salaryledger"
            className="flex h-10 items-center rounded-lg bg-gray-100 px-4 text-sm font-medium text-gray-600 transition-colors hover:bg-gray-200"
          >
            Cancel
          </Link>
          <Button type="submit">Create SalaryLedger</Button>
        </div>
      </div>
    </form>
  );
}
