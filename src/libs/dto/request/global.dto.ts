export class PaginationDTO {
  page: number = 1;
  limit: number = 10;
}

export class ReqGetDTO extends PaginationDTO {
  filter?: string;
  sort?: string;
  order?: string;
  location?: any;
  property_type?: any;
  features?: any;
  search_keyword?: any;
  property_status?: string;
}
