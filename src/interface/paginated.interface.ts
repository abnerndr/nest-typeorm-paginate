import { Meta } from "../types/meta";

export interface Paginated<T> {
  items: T[];
  meta: Meta;
}

export interface Paginate<T> {
  total: number;
  options: PaginateOptions;
  query: T[];
}

export interface PaginateOptions {
  limit: number;
  page: number;
}
