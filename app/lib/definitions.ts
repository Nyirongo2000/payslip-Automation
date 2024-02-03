
///////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////
export type User = {
  id: string;
  name: string;
  email: string;
  password: string;
};

export type EmployeeField = {
  id: string;
  name: string;
};

export type Employee = {
  id: string;
  name: string;
  email: string;
  image_url: string;
  position: string;
  grade: string;
};

export type SalaryLedger = {
  id: string;
  name: string;
  email: string;
  position: string;
  grade: string;
  employee_id: string;
  image_url: string;
  date_of_employment: string;
  pay_period: string;
  currency: string;
  department: string;
  method_of_payment: string;
  gross_total: number;
  deduction_masm: number;
  deduction_paye: number;
  net_Salary: number;
};

export type SalaryLedgerTable = {
  id: string;
  name: string;
  email: string;
  image_url: string;
  position: string;
  grade: string;
  employee_id: string;
  salary: number;
  date_of_employment: string;
  pay_period: string;
  currency: string;
  department: string;
  method_of_payment: string;
  gross_total: number;
  deduction_masm: number;
  deduction_paye: number;
  net_salary: number;
};

export type salary_grader = {
  id: string;
  amount: number;
  grade: string;
};

export type PaySlip = {
  id: string;
  employee_id: string;
  salary: number;
  date_of_employment: string;
  pay_period: string;
  currency: string;
  department: string;
  position: string;
  method_of_payment: string;
  gross_total: number;
  deduction_masm: number;
  deduction_paye: number;
  net_salary: number;
};

export type Revenue = {
  month: string;
  revenue: number;
};

export type PaySlipsTable = {
  id: string;
  employee_id: string;
  name: string;
  pay_period: string;
  position: string;
};

export type PaySlipForm = {
  id: string;
  employee_id: string;
  salary: number;
  date_of_employment: string;
  pay_period: string;
  currency: string;
  department: string;
  position: string;
  method_of_payment: string;
  gross_total: number;
  deduction_masm: number;
  deduction_paye: number;
  net_salary: number;
};

export type LatestPaySlip = {
  id: string;
  employee_id: string;
  amount: number;
  date_of_employment: string;
};

export type LatestPaySlipsRaw = Omit<LatestPaySlip, "amount"> & {
  amount: number;
};
