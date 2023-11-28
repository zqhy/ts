export class PagingParams {
  page?: number;
  pageSize?: number;

  constructor(page?: number, pageSize?: number) {
    this.page = page;
    this.pageSize = pageSize;
  }
}

export class Paging<ITEM> {
  page: number;
  pageSize: number;
  totalCount: number;
  items: ITEM[];
  // nextPage?: any;

  constructor(
    page: number,
    pageSize: number,
    totalCount: number,
    items: ITEM[]
  ) {
    this.page = page;
    this.pageSize = pageSize;
    this.totalCount = totalCount;
    this.items = items;
  }

  get totalPages(): number {
    if (this.pageSize > 0) {
      let totalPages = this.totalCount / this.pageSize;
      if (this.totalCount % this.pageSize > 0) {
        totalPages += 1;
      }
      return totalPages;
    }
    return 0;
  }

  get nextPage(): number | null {
    return this.page >= this.totalPages ? null : this.page + 1;
  }

  get previousPage(): number | null {
    return this.page == 1 || this.totalPages <= 1 ? null : this.page - 1;
  }

  get starPage(): number {
    return (this.page - 1) * this.pageSize + 1;
  }

  get endPage(): number {
    return Math.min(this.page * this.pageSize, this.totalCount);
  }
}
