import Pagination from "@/app/ui/payslip/pagination";
import Search from "@/app/ui/search";
import Table from "@/app/ui/salaryledger/table";
import { CreateSalaryLedger } from "@/app/ui/payslip/buttons";
import { lusitana } from "@/app/ui/fonts";
import {
  PaySlipsTableSkeleton,
  SalaryLedgerTableSkeleton
} from "@/app/ui/skeletons";
import { Suspense } from "react";
import { fetchSalaryLedgerPages } from "@/app/lib/data";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "SalaryLedger",
};

export default async function Page({
  searchParams,
}: {
  searchParams?: {
    query?: string;
    page?: string;
  };
}) {
  const query = searchParams?.query || "";
  const currentPage = Number(searchParams?.page) || 1;

  // const totalPages = await fetchInvoicesPages(query);
  // const totalPages = await fetchSalaryLedgerPages(query);
  const totalPages = 6;

  return (
    <div className="w-full">
      <div className="flex w-full items-center justify-between">
        <h1 className={`${lusitana.className} text-2xl`}>SalaryLedger</h1>
      </div>
      <div className="mt-4 flex items-center justify-between gap-2 md:mt-8">
        <Search placeholder="Search salaryledger..." />
        <CreateSalaryLedger />
      </div>
      <Suspense
        key={query + currentPage}
        fallback={<SalaryLedgerTableSkeleton />}
      >
        <Table query={query} currentPage={currentPage} />
      </Suspense>
      <div className="mt-5 flex w-full justify-center">
        <Pagination totalPages={totalPages} />
      </div>
    </div>
  );
}
