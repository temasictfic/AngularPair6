export interface PaginatedList<T> {
    pageIndex: number;
    pageSize: number;
    totalCount: number;
    items: T[];
 }
