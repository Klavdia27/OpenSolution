export type IEmployee = {
  id: number;
  id_division: number;
  FIO: string;
  address: string;
  position: string;
};

export type IEmployeeCreate = {
  id_division: number;
  FIO: string;
  address: string;
  position: string;
};

export type IdDiv = {
  id_division: number;
};

export type EmployeeDel = {
  id: number;
  idDivision: number;
};
