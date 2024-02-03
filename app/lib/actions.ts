"use server";

import { z } from "zod";
import { sql } from "@vercel/postgres";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { salaryledgers } from "./placeholder-data";
// import { signIn } from '@/auth';
// import { AuthError } from 'next-auth';

// ...

// export async function authenticate(
//   prevState: string | undefined,
//   formData: FormData,
// ) {
//   try {
//     await signIn('credentials', formData);
//   } catch (error) {
//     if (error instanceof AuthError) {
//       switch (error.type) {
//         case 'CredentialsSignin':
//           return 'Invalid credentials.';
//         default:
//           return 'Something went wrong.';
//       }
//     }
//     throw error;
//   }
// }

const FormSchema = z.object({
  id: z.string(),
  name: z.string({
    invalid_type_error: "Please enter a Name.",
  }),
  email: z.string({
    invalid_type_error: "Please enter a valid Email.",
  }),
  position: z.string({
    invalid_type_error: "Please enter a Position.",
  }),
  grade: z.string({
    invalid_type_error: "Please enter a Grade.",
  }),
  date_of_employment: z.string(),
  pay_period: z.string({
    invalid_type_error: "Please enter a valid Pay Period.",
  }),
  currency: z.string({
    invalid_type_error: "Please enter a valid Currency.",
  }),
  department: z.string({
    invalid_type_error: "Please enter a Department.",
  }),
  image_url: z.string({
    invalid_type_error: "Please enter a Method of Payment.",
  }),
  method_of_payment: z.string({
    invalid_type_error: "Please enter a Method of Payment.",
  }),
  gross_total: z.coerce.number(),
  deduction_masm: z.coerce.number(),
  deduction_paye: z.coerce.number(),
  net_salary: z.coerce.number(),
});

const CreateSalaryLedger = FormSchema.omit({
  id: true,date_of_employment:true
});

export async function createSalaryLedger(formData: FormData) {
  const {
    name,
    email,
    position,
    grade,
    pay_period,
    currency,
    image_url,
    department,
    method_of_payment,
    gross_total,
    deduction_masm,
    deduction_paye,
    net_salary,
  } = CreateSalaryLedger.parse({
    name: formData.get("name"),
    email: formData.get("email"),
    position: formData.get("position"),
    grade: formData.get("grade"),
    image_url: "formData.",
    pay_period: formData.get("pay_period"),
    currency: formData.get("currency"),
    department: formData.get("department"),
    method_of_payment: formData.get("method_of_payment"),
    gross_total: formData.get("gross_total"),
    deduction_masm: formData.get("deduction_masm"),
    deduction_paye: formData.get("deduction_paye"),
    net_salary: formData.get("net_salary"),
  });
  // date_of_employment: formData.get("date_of_employment"),

  const date_of_employment = new Date().toISOString().split("T")[0];

  await sql`
    INSERT INTO salaryledgers ( name, email, position, grade,image_url,
      pay_period, currency, department, method_of_payment,gross_total,deduction_masm,deduction_paye, net_salary,date_of_employment
    )
    VALUES ( ${name}, ${email}, ${position}, ${grade}, ${pay_period},${image_url}, ${currency}, ${department},
      ${method_of_payment},${gross_total},${deduction_masm},${deduction_paye},${net_salary},${date_of_employment}
    )
  `;

  revalidatePath("/portal/salaryledger");
  redirect("/portal/salaryledger");
}





// delete salaryledgers
export async function deleteSalaryLedger(id: string) {
  await sql`DELETE FROM salaryledgers WHERE id = ${id}`;
  revalidatePath('/portal/salaryledger');
}