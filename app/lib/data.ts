// import { sql } from '@vercel/postgres';
// import {
//   CustomerField,
//   CustomersTableType,
//   InvoiceForm,
//   InvoicesTable,
//   LatestInvoiceRaw,
//   User,
//   Revenue,
// } from './definitions';

// import { formatCurrency } from './utils';
// import { unstable_noStore as noStore } from 'next/cache';

// export async function fetchRevenue() {
//   noStore();
//   // Add noStore() here prevent the response from being cached.
//   // This is equivalent to in fetch(..., {cache: 'no-store'}).

//   try {
//     // Artificially delay a response for demo purposes.
//     // Don't do this in production :)

//     // console.log('Fetching revenue data...');
//     // await new Promise((resolve) => setTimeout(resolve, 3000));

//     const data = await sql<Revenue>`SELECT * FROM revenue`;

//     // console.log('Data fetch completed after 3 seconds.');

//     return data.rows;
//   } catch (error) {
//     console.error('Database Error:', error);
//     throw new Error('Failed to fetch revenue data.');
//   }
// }

// export async function fetchLatestInvoices() {
//   noStore();
//   try {
//     const data = await sql<LatestInvoiceRaw>`
//       SELECT invoices.amount, customers.name, customers.image_url, customers.email, invoices.id
//       FROM invoices
//       JOIN customers ON invoices.customer_id = customers.id
//       ORDER BY invoices.date DESC
//       LIMIT 5`;

//     const latestInvoices = data.rows.map((invoice) => ({
//       ...invoice,
//       amount: formatCurrency(invoice.amount),
//     }));
//     return latestInvoices;
//   } catch (error) {
//     console.error('Database Error:', error);
//     throw new Error('Failed to fetch the latest invoices.');
//   }
// }

// export async function fetchCardData() {
//   noStore();
//   try {
//     // You can probably combine these into a single SQL query
//     // However, we are intentionally splitting them to demonstrate
//     // how to initialize multiple queries in parallel with JS.
//     const invoiceCountPromise = sql`SELECT COUNT(*) FROM invoices`;
//     const customerCountPromise = sql`SELECT COUNT(*) FROM customers`;
//     const invoiceStatusPromise = sql`SELECT
//          SUM(CASE WHEN status = 'paid' THEN amount ELSE 0 END) AS "paid",
//          SUM(CASE WHEN status = 'pending' THEN amount ELSE 0 END) AS "pending"
//          FROM invoices`;

//     const data = await Promise.all([
//       invoiceCountPromise,
//       customerCountPromise,
//       invoiceStatusPromise,
//     ]);

//     const numberOfInvoices = Number(data[0].rows[0].count ?? '0');
//     const numberOfCustomers = Number(data[1].rows[0].count ?? '0');
//     const totalPaidInvoices = formatCurrency(data[2].rows[0].paid ?? '0');
//     const totalPendingInvoices = formatCurrency(data[2].rows[0].pending ?? '0');

//     return {
//       numberOfCustomers,
//       numberOfInvoices,
//       totalPaidInvoices,
//       totalPendingInvoices,
//     };
//   } catch (error) {
//     console.error('Database Error:', error);
//     throw new Error('Failed to fetch card data.');
//   }
// }

// const ITEMS_PER_PAGE = 6;
// export async function fetchFilteredInvoices(
//   query: string,
//   currentPage: number,
// ) {
//   noStore();
//   const offset = (currentPage - 1) * ITEMS_PER_PAGE;

//   try {
//     const invoices = await sql<InvoicesTable>`
//       SELECT
//         invoices.id,
//         invoices.amount,
//         invoices.date,
//         invoices.status,
//         customers.name,
//         customers.email,
//         customers.image_url
//       FROM invoices
//       JOIN customers ON invoices.customer_id = customers.id
//       WHERE
//         customers.name ILIKE ${`%${query}%`} OR
//         customers.email ILIKE ${`%${query}%`} OR
//         invoices.amount::text ILIKE ${`%${query}%`} OR
//         invoices.date::text ILIKE ${`%${query}%`} OR
//         invoices.status ILIKE ${`%${query}%`}
//       ORDER BY invoices.date DESC
//       LIMIT ${ITEMS_PER_PAGE} OFFSET ${offset}
//     `;

//     return invoices.rows;
//   } catch (error) {
//     console.error('Database Error:', error);
//     throw new Error('Failed to fetch invoices.');
//   }
// }

// export async function fetchInvoicesPages(query: string) {
//   noStore();
//   try {
//     const count = await sql`SELECT COUNT(*)
//     FROM invoices
//     JOIN customers ON invoices.customer_id = customers.id
//     WHERE
//       customers.name ILIKE ${`%${query}%`} OR
//       customers.email ILIKE ${`%${query}%`} OR
//       invoices.amount::text ILIKE ${`%${query}%`} OR
//       invoices.date::text ILIKE ${`%${query}%`} OR
//       invoices.status ILIKE ${`%${query}%`}
//   `;

//     const totalPages = Math.ceil(Number(count.rows[0].count) / ITEMS_PER_PAGE);
//     return totalPages;
//   } catch (error) {
//     console.error('Database Error:', error);
//     throw new Error('Failed to fetch total number of invoices.');
//   }
// }

// export async function fetchInvoiceById(id: string) {
//   noStore();
//   try {
//     const data = await sql<InvoiceForm>`
//       SELECT
//         invoices.id,
//         invoices.customer_id,
//         invoices.amount,
//         invoices.status
//       FROM invoices
//       WHERE invoices.id = ${id};
//     `;

//     const invoice = data.rows.map((invoice) => ({
//       ...invoice,
//       // Convert amount from cents to dollars
//       amount: invoice.amount / 100,
//     }));

//     return invoice[0];
//   } catch (error) {
//     console.error('Database Error:', error);
//     throw new Error('Failed to fetch invoice.');
//   }
// }

// export async function fetchCustomers() {
//   noStore();
//   try {
//     const data = await sql<CustomerField>`
//       SELECT
//         id,
//         name
//       FROM customers
//       ORDER BY name ASC
//     `;

//     const customers = data.rows;
//     return customers;
//   } catch (err) {
//     console.error('Database Error:', err);
//     throw new Error('Failed to fetch all customers.');
//   }
// }

// export async function fetchFilteredCustomers(query: string) {
//   noStore();
//   try {
//     const data = await sql<CustomersTableType>`
// 		SELECT
// 		  customers.id,
// 		  customers.name,
// 		  customers.email,
// 		  customers.image_url,
// 		  COUNT(invoices.id) AS total_invoices,
// 		  SUM(CASE WHEN invoices.status = 'pending' THEN invoices.amount ELSE 0 END) AS total_pending,
// 		  SUM(CASE WHEN invoices.status = 'paid' THEN invoices.amount ELSE 0 END) AS total_paid
// 		FROM customers
// 		LEFT JOIN invoices ON customers.id = invoices.customer_id
// 		WHERE
// 		  customers.name ILIKE ${`%${query}%`} OR
//         customers.email ILIKE ${`%${query}%`}
// 		GROUP BY customers.id, customers.name, customers.email, customers.image_url
// 		ORDER BY customers.name ASC
// 	  `;

//     const customers = data.rows.map((customer) => ({
//       ...customer,
//       total_pending: formatCurrency(customer.total_pending),
//       total_paid: formatCurrency(customer.total_paid),
//     }));

//     return customers;
//   } catch (err) {
//     console.error('Database Error:', err);
//     throw new Error('Failed to fetch customer table.');
//   }
// }

// export async function getUser(email: string) {

//   try {
//     const user = await sql`SELECT * FROM users WHERE email=${email}`;
//     return user.rows[0] as User;
//   } catch (error) {
//     console.error('Failed to fetch user:', error);
//     throw new Error('Failed to fetch user.');
//   }
// }

/////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////
/////////////////////////////

import { sql } from "@vercel/postgres";
import {
  PaySlipsTable,
  PaySlipForm,
  LatestPaySlipsRaw,
  EmployeeField,
  User,
  Revenue,
  SalaryLedgerTable,
  SalaryLedger,
  PaySlip,
} from "./definitions";

import { formatCurrency } from "./utils";
import { unstable_noStore as noStore } from "next/cache";
import { payslips } from "./placeholder-data";

export async function fetchRevenue() {
  noStore();

  try {
    const data = await sql<Revenue>`SELECT * FROM revenue`;

    return data.rows;
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error("Failed to fetch revenue data.");
  }
}

export async function fetchLatestPaySlips() {
  noStore();
  try {
    const data = await sql<LatestPaySlipsRaw>`
      SELECT payslips.pay_period, employees.name, payslips.id
      FROM payslips
      JOIN employees ON payslips.employee_id = employees.id
      ORDER BY payslips.payPeriod DESC
      LIMIT 5`;

    const LatestPaySlip = data.rows.map((payslip) => ({
      ...payslip,
      amount: formatCurrency(payslip.amount),
    }));
    return LatestPaySlip;
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error("Failed to fetch the latest payslips.");
  }
}

const ITEMS_PER_PAGE = 6;
// export async function fetchFilteredPayslips(
//   query: string,
//   currentPage: number
// ) {
//   noStore();
//   const offset = (currentPage - 1) * ITEMS_PER_PAGE;

//   try {
//     const payslips = await sql<PaySlipsTable>`
//       SELECT
//         payslips.id,
//         payslips.employee_id,
//         payslips.pay_period,
//         employees.name,
//         employees.email,
//         employees.image_url,
//         employees.position
//       FROM payslips
//       JOIN employees ON payslips.employee_id = employees.id
//       WHERE
//         employees.name ILIKE ${`%${query}%`} OR
//         employees.email ILIKE ${`%${query}%`} OR
//         payslips.pay_period::text ILIKE ${`%${query}%`} OR
//         employees.position ILIKE ${`%${query}%`}
//       ORDER BY payslips.pay_period DESC
//       LIMIT ${ITEMS_PER_PAGE} OFFSET ${offset}
//     `;

//     return payslips.rows;
//   } catch (error) {
//     console.error("Database Error:", error);
//     throw new Error("Failed to fetch payslips.");
//   }
// }

export async function fetchFilteredPayslips(
  query: string,
  currentPage: number,
  employeeId: string
) {
  noStore();
  const offset = (currentPage - 1) * ITEMS_PER_PAGE;

  try {
    const payslips = await sql<PaySlipsTable>`
      SELECT
        payslips.id,
        payslips.employee_id,
        employees.name,
        payslips.pay_period,
        employees.position
      FROM payslips
      JOIN employees ON payslips.employee_id = employees.id
      WHERE
        (employees.name ILIKE ${`%${query}%`} OR
        employees.email ILIKE ${`%${query}%`} OR
        payslips.pay_period::text ILIKE ${`%${query}%`} OR 
        employees.position ILIKE ${`%${query}%`})
        AND payslips.employee_id = ${employeeId}
      ORDER BY payslips.pay_period DESC
      LIMIT ${ITEMS_PER_PAGE} OFFSET ${offset}
    `;

    return payslips.rows;
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error("Failed to fetch payslips.");
  }
}

export async function fetchFilteredSalaryLedger(
  query: string,
  currentPage: number
) {
  noStore();
  const offset = (currentPage - 1) * ITEMS_PER_PAGE;

  try {
    const payslips = await sql<SalaryLedgerTable>`
      SELECT
        *
      FROM salaryledgers
      WHERE
        (salaryledgers.name ILIKE ${`%${query}%`} OR
        salaryledgers.email ILIKE ${`%${query}%`} OR
        salaryledgers.pay_period::text ILIKE ${`%${query}%`} OR 
        salaryledgers.position ILIKE ${`%${query}%`})
      ORDER BY salaryledgers.date_of_employment DESC
      LIMIT ${ITEMS_PER_PAGE} OFFSET ${offset}
    `;

    return payslips.rows;
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error("Failed to fetch salary Ledgers.");
  }
}

// export async function fetchPayslipsForEmployee(
//   employeeId: string
// ): Promise<PaySlipsTable[]> {
//   try {
//     noStore();
//     const payslips = await sql<PaySlipsTable>`
//       SELECT
//         payslips.id,
//         payslips.employee_id,
//         employees.name,
//         payslips.pay_period,
//         employees.position
//       FROM payslips
//       JOIN employees ON payslips.employee_id = employees.id
//       WHERE payslips.employee_id = ${employeeId}
//       ORDER BY payslips.pay_period DESC
//       LIMIT ${ITEMS_PER_PAGE} OFFSET ${offset}
//     `;

//     return payslips.rows;
//   } catch (error) {
//     console.error("Database Error:", error);
//     throw new Error("Failed to fetch payslips for the employee.");
//   }
// }

export async function fetchSalaryLedgerPages(query: string) {
  noStore();
  try {
    const count = await sql`SELECT COUNT(*)
    FROM salaryledgers
    JOIN employees ON salaryledgers.employee_id = employees.id
    WHERE
      employees.name ILIKE ${`%${query}%`} OR
      employees.email ILIKE ${`%${query}%`} OR
      salaryledgers.salary::text ILIKE ${`%${query}%`} OR
      salaryledgers.pay_period::text ILIKE ${`%${query}%`} 
      
  `;

    const totalPages = Math.ceil(Number(count.rows[0].count) / ITEMS_PER_PAGE);
    return totalPages;
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error("Failed to fetch total number of salaryledgers.");
  }
}

export async function fetchPaySlipsPages(query: string) {
  noStore();
  try {
    const count = await sql`SELECT COUNT(*)
    FROM payslips
    JOIN employees ON payslips.employee_id = employees.id
    WHERE
      employees.name ILIKE ${`%${query}%`} OR
      employees.email ILIKE ${`%${query}%`} OR
      payslips.salary::text ILIKE ${`%${query}%`} OR
      payslips.pay_period::text ILIKE ${`%${query}%`} 
      
  `;

    const totalPages = Math.ceil(Number(count.rows[0].count) / ITEMS_PER_PAGE);
    return totalPages;
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error("Failed to fetch total number of payslips.");
  }
}

// export async function fetchPaySlipsById(id: string) {
//   noStore();
//   try {
//     const data = await sql<PaySlip>`
//       SELECT
//         payslips.id,
//         payslips.employee_id,
//         payslips.salary,
//         payslips.position,
//         payslips.date_of_employment,
//         payslips.pay_period,
//         payslips.currency,
//         payslips.department,
//         payslips.method_of_payment,
//         payslips.gross_total,
//         payslips.deduction_masm,
//         payslips.deduction_paye,
//         payslips.net_salary
//       FROM payslips
//       WHERE payslips.id = ${id};
//     `;

//     const payslip = data.rows.map((payslip) => ({
//       ...payslip,
//     }));

//     return payslip[0];
//   } catch (error) {
//     console.error("Database Error:", error);
//     throw new Error("Failed to fetch Payslip.");
//   }
// }

export async function fetchPaySlipById(id: string) {
  noStore();
  try {
    const data = await sql<PaySlipForm>`
      SELECT
        payslips.id,
        payslips.employee_id,
        payslips.salary,
        payslips.position
      FROM payslips
      WHERE payslips.id = ${id};
    `;

    const payslip = data.rows.map((payslip) => ({
      ...payslip,
      // Convert amount from cents to dollars
    }));

    return payslip[0];
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error("Failed to fetch payslip.");
  }
}

export async function fetchSalaryLedgerId(id: string) {
  noStore();
  try {
    const data = await sql<SalaryLedgerTable>`
      SELECT
      salaryledgers.id,
      salaryledgers.name,
      salaryledgers.email,
      salaryledgers.image_url,
      salaryledgers.position,
      salaryledgers.grade,
      salaryledgers.employee_id,
      salaryledgers.salary,
      salaryledgers.date_of_employment,
      salaryledgers.pay_period,
      salaryledgers.currency,
      salaryledgers.department,
      salaryledgers.method_of_payment,
      salaryledgers.gross_total,
      salaryledgers.deduction_masm,
      salaryledgers.deduction_paye,
      salaryledgers.netSalary,
      FROM salaryledgers
      WHERE salaryledgers.id = ${id};
    `;

    const salaryledgers = data.rows.map((salaryledger) => ({
      ...salaryledger,
    }));

    return salaryledgers;
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error("Failed to fetch SalaryLedger.");
  }
}

// export async function fetchPaySlipsById(id: string) {
//   noStore();
//   try {
//     const data = await sql<PaySlipForm>`
//       SELECT
//         payslips.id,
//         payslips.employee_id,
//         payslips.salary,
//         payslips.position,
//         payslips.date_of_employment,
//         payslips.pay_period,
//         payslips.currency,
//         payslips.department,
//         payslips.method_of_payment,
//         payslips.gross_total,
//         payslips.deduction_masm,
//         payslips.deduction_paye,
//         payslips.net_salary
//       FROM payslips
//       WHERE payslips.id = ${id};
//     `;

//     const payslips = data.rows.map((payslip) => ({
//       ...payslip,
//     }));

//     return payslips[0];
//   } catch (error) {
//     console.error("Database Error:", error);
//     throw new Error("Failed to fetch Payslip.");
//   }
// }

// export async function fetchPaySlipById(id: string) {
//   noStore();
//   try {
//     const data = await sql<PaySlipForm>`
//       SELECT
//         payslips.id,
//         payslips.employee_id,
//         payslips.salary,
//         payslips.position,
//         payslips.date_of_employment,
//         payslips.pay_period,
//         payslips.currency,
//         payslips.department,
//         payslips.method_of_payment,
//         payslips.gross_total,
//         payslips.deduction_masm,
//         payslips.deduction_paye,
//         payslips.net_salary
//       FROM payslips
//       WHERE payslips.id = ${id};
//     `;

//     if (data.rows.length === 0) {
//       throw new Error("Payslip not found.");
//     }

//     return data.rows[0];
//   } catch (error) {
//     console.error("Database Error:", error);
//     throw new Error("Failed to fetch Payslip.");
//   }
// }

export async function fetchEmployees() {
  noStore();
  try {
    const data = await sql<EmployeeField>`
      SELECT
        id,
        name
      FROM employees
      ORDER BY name ASC
    `;

    const employees = data.rows;
    return employees;
  } catch (err) {
    console.error("Database Error:", err);
    throw new Error("Failed to fetch all employees.");
  }
}

export async function getUser(email: string) {
  try {
    const user = await sql`SELECT * FROM users WHERE email=${email}`;
    return user.rows[0] as User;
  } catch (error) {
    console.error("Failed to fetch user:", error);
    throw new Error("Failed to fetch user.");
  }
}
