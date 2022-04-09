export type Organization = {
  id: number;
  name: string;
  address: string;
  INN: number | string;
};

export type OrganizationCreate = {
  name: string;
  address: string;
  INN: number | string;
};
