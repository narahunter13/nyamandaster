export interface Todo {
  id: number;
  content: string;
}

export interface Meta {
  totalCount: number;
}

export interface ListTabel {
  title: string;
  excel: string;
}

export interface ListPublikasi {
  pub_id: number;
  title: string;
  pdf: string;
  rl_date: number;
  cover: string;
}

export interface ListPublikasi {
  title: string;
  pdf: string;
  rl_date: number;
}

export interface Metadata {
  page: number;
  pages: number;
  per_page: number;
  count: number;
  total:number;
}