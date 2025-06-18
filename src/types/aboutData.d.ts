export interface ISkill {
  label: string;
  rank: string;
  icon: string;
  percent?: number;
}

export interface ICertificate {
  label: string;
  issuer: string;
}

export interface ICompany {
  label: string;
  job: string;
  detail: string;
  period: string;
  years: string;
}
