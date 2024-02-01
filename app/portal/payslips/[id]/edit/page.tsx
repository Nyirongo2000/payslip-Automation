import Form from '@/app/ui/invoices/edit-form';
import Breadcrumbs from '@/app/ui/invoices/breadcrumbs';
import { fetchPaySlipsById,fetchEmployees } from '@/app/lib/data';
import { notFound } from 'next/navigation';
 
export default async function Page({ params }: { params: { id: string } }) {
    const id = params.id;

    const [payslip, employees] = await Promise.all([
        fetchPaySlipsById(id),
        fetchEmployees(),
      ]);

      if (!payslip) {
        notFound();
      }

  return (
    <main>
      <Breadcrumbs
        breadcrumbs={[
          { label: 'PaySlip', href: '/portal/payslips' },
          {
            label: 'Edit Invoice',
            href: `/portal/payslips/${id}/edit`,
            active: true,
          },
        ]}
      />
      <Form payslip={payslip} employees={employees} />
    </main>
  );
}