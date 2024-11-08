import { PaginateOptions } from "../interface/paginated.interface";

export function parsePaginate({ limit, page }: PaginateOptions) {
  let options: PaginateOptions;
  options = {
    limit,
    page: page === 1 ? 0 : (page - 1) * limit,
  };
  return options;
}
