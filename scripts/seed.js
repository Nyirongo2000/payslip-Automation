// const { db } = require('@vercel/postgres');
// const {
//   invoices,
//   customers,
//   revenue,
//   users,
// } = require('../app/lib/placeholder-data.js');
// const bcrypt = require('bcrypt');

// async function seedUsers(client) {
//   try {
//     await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;
//     // Create the "users" table if it doesn't exist
//     const createTable = await client.sql`
//       CREATE TABLE IF NOT EXISTS users (
//         id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
//         name VARCHAR(255) NOT NULL,
//         email TEXT NOT NULL UNIQUE,
//         password TEXT NOT NULL
//       );
//     `;

//     console.log(`Created "users" table`);

//     // Insert data into the "users" table
//     const insertedUsers = await Promise.all(
//       users.map(async (user) => {
//         const hashedPassword = await bcrypt.hash(user.password, 10);
//         return client.sql`
//         INSERT INTO users (id, name, email, password)
//         VALUES (${user.id}, ${user.name}, ${user.email}, ${hashedPassword})
//         ON CONFLICT (id) DO NOTHING;
//       `;
//       }),
//     );

//     console.log(`Seeded ${insertedUsers.length} users`);

//     return {
//       createTable,
//       users: insertedUsers,
//     };
//   } catch (error) {
//     console.error('Error seeding users:', error);
//     throw error;
//   }
// }

// async function seedInvoices(client) {
//   try {
//     await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;

//     // Create the "invoices" table if it doesn't exist
//     const createTable = await client.sql`
//     CREATE TABLE IF NOT EXISTS invoices (
//     id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
//     customer_id UUID NOT NULL,
//     amount INT NOT NULL,
//     status VARCHAR(255) NOT NULL,
//     date DATE NOT NULL
//   );
// `;

//     console.log(`Created "invoices" table`);

//     // Insert data into the "invoices" table
//     const insertedInvoices = await Promise.all(
//       invoices.map(
//         (invoice) => client.sql`
//         INSERT INTO invoices (customer_id, amount, status, date)
//         VALUES (${invoice.customer_id}, ${invoice.amount}, ${invoice.status}, ${invoice.date})
//         ON CONFLICT (id) DO NOTHING;
//       `,
//       ),
//     );

//     console.log(`Seeded ${insertedInvoices.length} invoices`);

//     return {
//       createTable,
//       invoices: insertedInvoices,
//     };
//   } catch (error) {
//     console.error('Error seeding invoices:', error);
//     throw error;
//   }
// }

// async function seedCustomers(client) {
//   try {
//     await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;

//     // Create the "customers" table if it doesn't exist
//     const createTable = await client.sql`
//       CREATE TABLE IF NOT EXISTS customers (
//         id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
//         name VARCHAR(255) NOT NULL,
//         email VARCHAR(255) NOT NULL,
//         image_url VARCHAR(255) NOT NULL
//       );
//     `;

//     console.log(`Created "customers" table`);

//     // Insert data into the "customers" table
//     const insertedCustomers = await Promise.all(
//       customers.map(
//         (customer) => client.sql`
//         INSERT INTO customers (id, name, email, image_url)
//         VALUES (${customer.id}, ${customer.name}, ${customer.email}, ${customer.image_url})
//         ON CONFLICT (id) DO NOTHING;
//       `,
//       ),
//     );

//     console.log(`Seeded ${insertedCustomers.length} customers`);

//     return {
//       createTable,
//       customers: insertedCustomers,
//     };
//   } catch (error) {
//     console.error('Error seeding customers:', error);
//     throw error;
//   }
// }

// async function seedRevenue(client) {
//   try {
//     // Create the "revenue" table if it doesn't exist
//     const createTable = await client.sql`
//       CREATE TABLE IF NOT EXISTS revenue (
//         month VARCHAR(4) NOT NULL UNIQUE,
//         revenue INT NOT NULL
//       );
//     `;

//     console.log(`Created "revenue" table`);

//     // Insert data into the "revenue" table
//     const insertedRevenue = await Promise.all(
//       revenue.map(
//         (rev) => client.sql`
//         INSERT INTO revenue (month, revenue)
//         VALUES (${rev.month}, ${rev.revenue})
//         ON CONFLICT (month) DO NOTHING;
//       `,
//       ),
//     );

//     console.log(`Seeded ${insertedRevenue.length} revenue`);

//     return {
//       createTable,
//       revenue: insertedRevenue,
//     };
//   } catch (error) {
//     console.error('Error seeding revenue:', error);
//     throw error;
//   }
// }

// async function main() {
//   const client = await db.connect();

//   await seedUsers(client);
//   await seedCustomers(client);
//   await seedInvoices(client);
//   await seedRevenue(client);

//   await client.end();
// }

// main().catch((err) => {
//   console.error(
//     'An error occurred while attempting to seed the database:',
//     err,
//   );
// });

///////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////
const { db } = require("@vercel/postgres");
const {
  payslips,
  employees,
  revenue,
  salaryledgers,
  users,
} = require("../app/lib/placeholder-data.js");

const bcrypt = require("bcrypt");

async function seedUsers(client) {
  try {
    await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;
    // Create the "users" table if it doesn't exist
    const createTable = await client.sql`
      CREATE TABLE IF NOT EXISTS users (
        id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        email TEXT NOT NULL UNIQUE,
        password TEXT NOT NULL
      );
    `;

    console.log(`Created "users" table`);

    // Insert data into the "users" table
    const insertedUsers = await Promise.all(
      users.map(async (user) => {
        const hashedPassword = await bcrypt.hash(user.password, 10);
        return client.sql`
        INSERT INTO users (id, name, email, password)
        VALUES (${user.id}, ${user.name}, ${user.email}, ${hashedPassword})
        ON CONFLICT (id) DO NOTHING;
      `;
      })
    );

    console.log(`Seeded ${insertedUsers.length} users`);

    return {
      createTable,
      users: insertedUsers,
    };
  } catch (error) {
    console.error("Error seeding users:", error);
    throw error;
  }
}

async function seedPaySlips(client) {
  try {
    await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;

    // Create the "payslips" table if it doesn't exist
    const createTable = await client.sql`
    CREATE TABLE IF NOT EXISTS payslips (
    id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
    employee_id UUID NOT NULL,
    salary INT NOT NULL,
    date_of_employment DATE NOT NULL,
    pay_period DATE NOT NULL,
    currency VARCHAR(255) NOT NULL,
    department VARCHAR(255) NOT NULL,
    position VARCHAR(255) NOT NULL,
    method_of_payment VARCHAR(255) NOT NULL,
    gross_total INT NOT NULL,
    deduction_masm INT NOT NULL,
    deduction_paye INT NOT NULL,
    net_salary INT NOT NULL
  );
`;

    console.log(`Created "payslips" table`);

    // Insert data into the "payslips" table
    const insertedPayslips = await Promise.all(
      payslips.map(
        (payslip) => client.sql`
        INSERT INTO payslips (employee_id ,
          salary ,
          date_of_employment ,
          pay_period ,
          currency ,
          department ,
          position ,
          method_of_payment ,
          gross_total ,
          deduction_masm ,
          deduction_paye ,
          net_salary )
        VALUES (${payslip.employee_id}, ${payslip.salary}, ${payslip.date_of_employment},${payslip.pay_period},${payslip.currency},${payslip.department},${payslip.position},${payslip.method_of_payment},${payslip.gross_total},${payslip.deduction_masm},${payslip.deduction_paye},${payslip.net_salary})
        ON CONFLICT (id) DO NOTHING;
      `
      )
    );

    console.log(`Seeded ${insertedPayslips.length} payslips`);

    return {
      createTable,
      payslips: insertedPayslips,
    };
  } catch (error) {
    console.error("Error seeding payslips:", error);
    throw error;
  }
}

async function seedEmployees(client) {
  try {
    await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;

    // Create the "employees" table if it doesn't exist
    const createTable = await client.sql`
      CREATE TABLE IF NOT EXISTS employees (
        id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        email VARCHAR(255) NOT NULL,
        image_url VARCHAR(255) NOT NULL,
        position VARCHAR(255) NOT NULL,
        grade VARCHAR(255) NOT NULL
      );
    `;

    console.log(`Created "employees" table`);

    // Insert data into the "employees" table
    const insertedEmployees = await Promise.all(
      employees.map(
        (employee) => client.sql`
        INSERT INTO employees (id, name, email, image_url, position, grade)
        VALUES (${employee.id}, ${employee.name}, ${employee.email}, ${employee.image_url},${employee.position},${employee.grade})
        ON CONFLICT (id) DO NOTHING;
      `
      )
    );

    console.log(`Seeded ${insertedEmployees.length} employees`);

    return {
      createTable,
      employees: insertedEmployees,
    };
  } catch (error) {
    console.error("Error seeding employees:", error);
    throw error;
  }
}

//
async function seedSalaryLedgers(client) {
  try {
    await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;

    // Create the "salaryledger" table if it doesn't exist
    // const createTable = await client.sql`
    //   CREATE TABLE IF NOT EXISTS salaryledgers (
    //     id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
    //     name VARCHAR(255) NOT NULL,
    //     email VARCHAR(255) NOT NULL,
    //     image_url VARCHAR(255) NOT NULL,
    //     position VARCHAR(255) NOT NULL,
    //     grade VARCHAR(255) NOT NULL,
    //     date_of_employment VARCHAR(255) NOT NULL,
    //     pay_period VARCHAR(255) NOT NULL,
    //     currency VARCHAR(255) NOT NULL,
    //     department VARCHAR(255) NOT NULL,
    //     method_of_payment VARCHAR(255) NOT NULL,
    //     gross_total VARCHAR(255) NOT NULL,
    //     deduction_masm VARCHAR(255) NOT NULL,
    //     deduction_paye VARCHAR(255) NOT NULL,
    //     net_salary INT NOT NULL
    //   );
    // `;
 const createTable = await client.sql`
      CREATE TABLE IF NOT EXISTS salaryledgers (
        id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
        name TEXT NOT NULL,
        email TEXT NOT NULL,
        image_url VARCHAR(255) NOT NULL,
        position VARCHAR(255) NOT NULL,
        grade VARCHAR(255) NOT NULL,
        date_of_employment DATE NOT NULL,
        pay_period DATE NOT NULL,
        currency VARCHAR(255) NOT NULL,
        department VARCHAR(255) NOT NULL,
        method_of_payment VARCHAR(255) NOT NULL,
        gross_total INT NOT NULL,
        deduction_masm INT NOT NULL,
        deduction_paye INT NOT NULL,
        net_salary INT NOT NULL
      );
    `;
    console.log(`Created "salaryledgers" table`);

    // Insert data into the "salaryledger" table
    const insertedSalaryLedgers = await Promise.all(
      salaryledgers.map(
        (salaryledger) => client.sql`
        INSERT INTO salaryledgers (id,name ,
        email ,
        image_url ,
        position ,
        grade ,
        date_of_employment ,
        pay_period ,
        currency ,
        department ,
        method_of_payment ,
        gross_total ,
        deduction_masm ,
        deduction_paye ,
        net_salary )
        VALUES (${salaryledger.id}, ${salaryledger.name}, ${salaryledger.email}, ${salaryledger.image_url},${salaryledger.position},${salaryledger.grade},${salaryledger.date_of_employment} ,
          ${salaryledger.pay_period} ,
          ${salaryledger.currency} ,
          ${salaryledger.department}  ,
          ${salaryledger.method_of_payment}  ,
          ${salaryledger.gross_total}  ,
          ${salaryledger.deduction_masm}  ,
          ${salaryledger.deduction_paye}  ,
          ${salaryledger.net_salary})
        ON CONFLICT (id) DO NOTHING;
      `
      )
    );

    console.log(`Seeded ${insertedSalaryLedgers.length}  salaryledgers`);

    return {
      createTable,
      salaryledgers: insertedSalaryLedgers,
    };
  } catch (error) {
    console.error("Error seeding salaryledgers:", error);
    throw error;
  }
}

///////////////////////

async function seedRevenue(client) {
  try {
    // Create the "revenue" table if it doesn't exist
    const createTable = await client.sql`
      CREATE TABLE IF NOT EXISTS revenue (
        month VARCHAR(4) NOT NULL UNIQUE,
        revenue INT NOT NULL
      );
    `;

    console.log(`Created "revenue" table`);

    // Insert data into the "revenue" table
    const insertedRevenue = await Promise.all(
      revenue.map(
        (rev) => client.sql`
        INSERT INTO revenue (month, revenue)
        VALUES (${rev.month}, ${rev.revenue})
        ON CONFLICT (month) DO NOTHING;
      `
      )
    );

    console.log(`Seeded ${insertedRevenue.length} revenue`);

    return {
      createTable,
      revenue: insertedRevenue,
    };
  } catch (error) {
    console.error("Error seeding revenue:", error);
    throw error;
  }
}

async function main() {
  const client = await db.connect();

  await seedUsers(client);
  await seedEmployees(client);
  await seedPaySlips(client);
  await seedRevenue(client);
  await seedSalaryLedgers(client);

  await client.end();
}

main().catch((err) => {
  console.error(
    "An error occurred while attempting to seed the database:",
    err
  );
});
