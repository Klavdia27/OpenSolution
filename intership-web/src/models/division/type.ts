export type IDivision = {
  id: number;
  id_organization: number;
  name: string;
  phone: number | string;
};

export type IDivisionCreate = {
  id_organization: number;
  name: string;
  phone: number | string;
};

export type IdOrg = {
  id_organization: number;
};

export type IdDivDel = {
  id: number;
};
