
import React from 'react';
import Form from '@/app/ui/invoices/create-form';
import Breadcrumbs from '@/app/ui/invoices/breadcrumbs';
import RevenueChart from '@/app/ui/dashboard/revenue-chart';
import LatestInvoices from '@/app/ui/dashboard/latest-invoices';
import { lusitana } from '@/app/ui/fonts';
import { Suspense } from 'react';
import { RevenueChartSkeleton,LatestInvoicesSkeleton,CardsSkeleton } from '@/app/ui/skeletons';



export default function Page() {
      

  return (
    <>
    
      <div>
        <th className="centre">PERSONAL DETAILS</th>
        <table>
          <tbody>
          <tr>
              <td>Employee Full Name:</td>
              {/* <td><input type="text" disabled /></td> */}
            </tr>
            <tr>
              <td>Employee DOB:</td>
              {/* <td><input type="text" disabled /></td> */}
            </tr>
            <tr>
              <td>Employee Number:</td>
              {/* <td><input type="text" disabled /></td> */}
            </tr>
            <tr>
              <td>Employment Date:</td>
              {/* <td><input type="date" disabled /></td> */}
            </tr>
            <tr>
              <td>Salary:</td>
              {/* <td><input type="text" disabled /></td> */}
            </tr>
            <tr>
              <td>Department:</td>
              {/* <td><input type="text" disabled /></td> */}
            </tr>
            <tr>
              <td>Position:</td>
              {/* <td><input type="text" disabled /></td> */}
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}
