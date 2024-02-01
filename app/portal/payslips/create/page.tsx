import Form from '@/app/ui/invoices/create-form';
import Breadcrumbs from '@/app/ui/invoices/breadcrumbs';
import { fetchEmployees } from '@/app/lib/data';

import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Create Invoice',
};
 
export default async function Page() {
  const customers = await fetchEmployees();
 
  return (
    <main>
      <Breadcrumbs
        breadcrumbs={[
          { label: 'Payslip', href: '/portal/payslips' },
          {
            label: 'Create Payslip',
            href: '/portal/payslips/create',
            active: true,
          },
        ]}
      />
      {/* <Form employees={employee} /> */}
    </main>
  );
}