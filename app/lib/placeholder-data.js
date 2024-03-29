/////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////

const users = [
  {
    id: "410544b2-4001-4271-9855-fec4b6a6442a",
    name: "User",
    email: "user@gmail.com",
    password: "123456",
  },
];

const employees = [
  {
    id: "3958dc9e-712f-4377-85e9-fec4b6a6442a",
    name: "Delba de Oliveira",
    email: "delba@oliveira.com",
    image_url: "/customers/delba-de-oliveira.png",
    position: "Software Engineer",
    grade: "A",
  },
  {
    id: "3958dc9e-742f-4377-85e9-fec4b6a6442b",
    name: "Lee Robinson",
    email: "lee@robinson.com",
    image_url: "/customers/lee-robinson.png",
    position: "Marketing Specialist",
    grade: "B",
  },
  {
    id: "3958dc9e-737f-4377-85e9-fec4b6a6442c",
    name: "Hector Simpson",
    email: "hector@simpson.com",
    image_url: "/customers/hector-simpson.png",
    position: "HR Manager",
    grade: "C",
  },
  {
    id: "50ca3e18-62cd-11ee-8c99-0242ac120002",
    name: "Steven Tey",
    email: "steven@tey.com",
    image_url: "/customers/steven-tey.png",
    position: "Data Scientist",
    grade: "A",
  },
  {
    id: "3958dc9e-787f-4377-85e9-fec4b6a6442d",
    name: "Steph Dietz",
    email: "steph@dietz.com",
    image_url: "/customers/steph-dietz.png",
    position: "Product Manager",
    grade: "B",
  },
  {
    id: "76d65c26-f784-44a2-ac19-586678f7c2f2",
    name: "Michael Novotny",
    email: "michael@novotny.com",
    image_url: "/customers/michael-novotny.png",
    position: "Senior Developer",
    grade: "A",
  },
  {
    id: "d6e15727-9fe1-4961-8c5b-ea44a9bd81aa",
    name: "Evil Rabbit",
    email: "evil@rabbit.com",
    image_url: "/customers/evil-rabbit.png",
    position: "UI/UX Designer",
    grade: "B",
  },
  {
    id: "126eed9c-c90c-4ef6-a4a8-fcf7408d3c66",
    name: "Emil Kowalski",
    email: "emil@kowalski.com",
    image_url: "/customers/emil-kowalski.png",
    position: "DevOps Engineer",
    grade: "A",
  },
  {
    id: "CC27C14A-0ACF-4F4A-A6C9-D45682C144B9",
    name: "Amy Burns",
    email: "amy@burns.com",
    image_url: "/customers/amy-burns.png",
    position: "Customer Support",
    grade: "C",
  },
  {
    id: "13D07535-C59E-4157-A011-F8D2EF4E0CBB",
    name: "Balazs Orban",
    email: "balazs@orban.com",
    image_url: "/customers/balazs-orban.png",
    position: "QA Engineer",
    grade: "B",
  },
  {
    id: "2ee6c845-1d12-4f87-b22e-927775883b24",
    name: "Oliver Nyirongo",
    email: "olivernyirongo@gmail.com",
    image_url: "/customers/hector-simpson.png",
    position: "HR Manager",
    grade: "C",
  },
];

// const salaryledger = payslips.map((payslip) => {
//   const employee = employees.find((emp) => emp.id === payslip.employee_id);

//   return {
//     id: payslip.id,
//     name: employee?.name || '',
//     email: employee?.email || '',
//     image_url: employee?.image_url || '',
//     position: employee?.position || '',
//     grade: employee?.grade || '',
//     employee_id: payslip.employee_id,
//     salary: payslip.salary,
//     date_of_employment: payslip.date_of_employment,
//     pay_period: payslip.pay_period,
//     currency: payslip.currency,
//     department: payslip.department,
//     method_of_payment: payslip.method_of_payment,
//     gross_total: payslip.gross_total,
//     deduction_masm: payslip.deduction_masm,
//     deduction_paye: payslip.deduction_paye,
//     netSalary: payslip.net_salary,
//   };
// });

const payslips = [
  {
    id: "1",
    employee_id: employees[0].id,
    salary: 15795,
    date_of_employment: "2022-01-01",
    pay_period: "2023-01-20",
    currency: "MWK",
    department: "Finance",
    position: "Accountant",
    method_of_payment: "Direct Deposit",
    gross_total: 15795,
    deduction_masm: 500,
    deduction_paye: 200,
    net_salary: 15095,
  },
  {
    id: "2",
    employee_id: employees[1].id,
    salary: 20348,
    date_of_employment: "2021-08-15",
    pay_period: "2023-02-20",
    currency: "MWK",
    department: "IT",
    position: "Software Engineer",
    method_of_payment: "Check",
    gross_total: 20348,
    deduction_masm: 600,
    deduction_paye: 250,
    net_salary: 19498,
  },
  {
    id: "3",
    employee_id: employees[4].id,
    salary: 3040,
    date_of_employment: "2022-03-10",
    pay_period: "2023-03-20",
    currency: "MWK",
    department: "Marketing",
    position: "Product Manager",
    method_of_payment: "Direct Deposit",
    gross_total: 3040,
    deduction_masm: 100,
    deduction_paye: 40,
    net_salary: 2900,
  },
  {
    id: "4",
    employee_id: employees[10].id,
    salary: 3040,
    date_of_employment: "2022-03-10",
    pay_period: "2023-03-20",
    currency: "MWK",
    department: "Human Resource",
    position: "HR Manager",
    method_of_payment: "Direct Deposit",
    gross_total: 3040,
    deduction_masm: 100,
    deduction_paye: 40,
    net_salary: 2900,
  },
  {
    id: "5",
    employee_id: employees[10].id,
    salary: 3040,
    date_of_employment: "2022-03-10",
    pay_period: "2023-04-20",
    currency: "MWK",
    department: "Human Resource",
    position: "HR Manager",
    method_of_payment: "Direct Deposit",
    gross_total: 3040,
    deduction_masm: 100,
    deduction_paye: 40,
    net_salary: 2900,
  },
  {
    id: "6",
    employee_id: employees[10].id,
    salary: 3040,
    date_of_employment: "2022-03-10",
    pay_period: "2023-05-20",
    currency: "MWK",
    department: "Human Resource",
    position: "HR Manager",
    method_of_payment: "Direct Deposit",
    gross_total: 3040,
    deduction_masm: 100,
    deduction_paye: 40,
    net_salary: 2900,
  },
  {
    id: "7",
    employee_id: employees[10].id,
    salary: 3040,
    date_of_employment: "2022-03-10",
    pay_period: "2023-06-20",
    currency: "MWK",
    department: "Human Resource",
    position: "HR Manager",
    method_of_payment: "Direct Deposit",
    gross_total: 3040,
    deduction_masm: 100,
    deduction_paye: 40,
    net_salary: 2900,
  },
  {
    id: "8",
    employee_id: employees[10].id,
    salary: 3040,
    date_of_employment: "2022-03-10",
    pay_period: "2023-07-20",
    currency: "MWK",
    department: "Human Resource",
    position: "HR Manager",
    method_of_payment: "Direct Deposit",
    gross_total: 3040,
    deduction_masm: 100,
    deduction_paye: 40,
    net_salary: 2900,
  },
  {
    id: "9",
    employee_id: employees[10].id,
    salary: 3040,
    date_of_employment: "2022-03-10",
    pay_period: "2023-08-20",
    currency: "MWK",
    department: "Human Resource",
    position: "HR Manager",
    method_of_payment: "Direct Deposit",
    gross_total: 3040,
    deduction_masm: 100,
    deduction_paye: 40,
    net_salary: 2900,
  },
];

const salaryledgers = [
  {
    id: "d789f9a3-567c-4a51-9f45-65364a821df1",
    name: "Delba de Oliveira",
    email: "delba@oliveira.com",
    image_url: "/customers/delba-de-oliveira.png",
    position: "Software Engineer",
    grade: "A",
    employee_id: "3958dc9e-712f-4377-85e9-fec4b6a6442a",
    salary: 15795,
    date_of_employment: "2022-01-01",
    pay_period: "2023-01-20",
    currency: "MWK",
    department: "Finance",
    method_of_payment: "Direct Deposit",
    gross_total: 15795,
    deduction_masm: 500,
    deduction_paye: 200,
    net_salary: 15095,
  },
  {
    id: "55fd2b4a-1c3c-4f7e-bdf2-85a22edcf4a0",
    name: "Lee Robinson",
    email: "lee@robinson.com",
    image_url: "/customers/lee-robinson.png",
    position: "Marketing Specialist",
    grade: "B",
    employee_id: "3958dc9e-742f-4377-85e9-fec4b6a6442b",
    salary: 20348,
    date_of_employment: "2021-08-15",
    pay_period: "2023-02-20",
    currency: "MWK",
    department: "IT",
    method_of_payment: "Check",
    gross_total: 20348,
    deduction_masm: 600,
    deduction_paye: 250,
    net_salary: 19498,
  },
  {
    id: "1f5e53d1-d8dd-439a-86a1-d3d0aaf0c87a",
    name: "Hector Simpson",
    email: "hector@simpson.com",
    image_url: "/customers/hector-simpson.png",
    position: "HR Manager",
    grade: "C",
    employee_id: "3958dc9e-737f-4377-85e9-fec4b6a6442c",
    salary: 3040,
    date_of_employment: "2022-03-10",
    pay_period: "2023-03-20",
    currency: "MWK",
    department: "Human Resource",
    method_of_payment: "Direct Deposit",
    gross_total: 3040,
    deduction_masm: 100,
    deduction_paye: 40,
    net_salary: 2900,
  },
  {
    id: "4f16e114-20a0-4a36-841b-3fc14a9c723b",
    name: "Steven Tey",
    email: "steven@tey.com",
    image_url: "/customers/steven-tey.png",
    position: "Data Scientist",
    grade: "A",
    employee_id: "50ca3e18-62cd-11ee-8c99-0242ac120002",
    salary: 10000,
    date_of_employment: "2021-05-20",
    pay_period: "2023-04-20",
    currency: "MWK",
    department: "Data Science",
    method_of_payment: "Direct Deposit",
    gross_total: 10000,
    deduction_masm: 300,
    deduction_paye: 120,
    net_salary: 9680,
  },
  {
    id: "8eb687bf-2c80-4cb5-9a37-4e6f0573f24a",
    name: "Steph Dietz",
    email: "steph@dietz.com",
    image_url: "/customers/steph-dietz.png",
    position: "Product Manager",
    grade: "B",
    employee_id: "3958dc9e-787f-4377-85e9-fec4b6a6442d",
    salary: 18000,
    date_of_employment: "2022-02-10",
    pay_period: "2023-05-20",
    currency: "MWK",
    department: "Product Management",
    method_of_payment: "Check",
    gross_total: 18000,
    deduction_masm: 800,
    deduction_paye: 300,
    net_salary: 16900,
  },
];

const revenue = [
  { month: "Jan", revenue: 2000 },
  { month: "Feb", revenue: 1800 },
  { month: "Mar", revenue: 2200 },
  { month: "Apr", revenue: 2500 },
  { month: "May", revenue: 2300 },
  { month: "Jun", revenue: 3200 },
  { month: "Jul", revenue: 3500 },
  { month: "Aug", revenue: 3700 },
  { month: "Sep", revenue: 2500 },
  { month: "Oct", revenue: 2800 },
  { month: "Nov", revenue: 3000 },
  { month: "Dec", revenue: 4800 },
];

module.exports = {
  users,
  employees,
  payslips,
  revenue,
  salaryledgers,
};
