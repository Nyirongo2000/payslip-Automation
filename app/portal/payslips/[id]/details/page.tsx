import Form from '@/app/ui/payslip/edit-form';
import PaySlipDetailsForm from '@/app/ui/payslip/payslipdetailsform';
import Breadcrumbs from '@/app/ui/payslip/breadcrumbs';
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
            label: 'View Payslip',
            href: `/portal/payslips/${id}/details`,
            active: true,
          },
        ]}
      />
      <PaySlipDetailsForm id={id} />
    </main>
  );
}