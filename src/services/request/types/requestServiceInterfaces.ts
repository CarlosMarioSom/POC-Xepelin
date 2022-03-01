export interface IGet {
  domain: string;
  method: string;
  params?: { [key: string]: string | number };
  headers?: string | number | boolean;
}
