import { Paginate } from "../interface/paginated.interface";

export async function paginate<T>({ options, query, total }: Paginate<T>) {
  const { limit, page } = options;
  const meta = {
    totalItems: total,
    itemCount: Number(limit),
    itemsPerPage: query.length,
    totalPages: Math.ceil(total / limit),
    currentPage: Number(page),
  };
  return {
    items: query,
    meta,
  };
}
