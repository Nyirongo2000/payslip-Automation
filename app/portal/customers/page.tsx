
import { Metadata } from 'next';
import Pagination from '@/app/ui/payslip/pagination';
import Search from '@/app/ui/search';
import Table from '@/app/ui/customers/table';
import { TableRowSkeleton } from '@/app/ui/skeletons';
import { Suspense } from 'react';
// import { fetchCustomers } from '@/app/lib/data';
import { lusitana } from '@/app/ui/fonts';

export const metadata: Metadata = {
  title: 'Customer',
};


export default function page(){

  // const query = searchParams?.query || '';
  // const currentPage = Number(searchParams?.page) || 1;
  
  // const totalPages = await fetchInvoicesPages(query);
  // const customers = await fetchCustomers();

    return <div>customers</div>
    //   <div className="w-full">
    //   <div className="flex w-full items-center justify-between">
    //     <h1 className={`${lusitana.className} text-2xl`}>Customers</h1>
    //   </div>
    //   <div className="mt-4 flex items-center justify-between gap-2 md:mt-8">
    //     <Search placeholder="Search invoices..." />
      
    //   </div>
    //    <Suspense key={query + currentPage} fallback={<TableRowSkeleton />}>
    //     <Table  customers={}/>
    //   </Suspense>
    //   <div className="mt-5 flex w-full justify-center">
    //     <Pagination totalPages={totalPages} />
    //   </div>
    // </div>
}