export interface ICRUD<T>{
  create (item: Partial<T>): Promise<T | undefined>;
  read(id: string): Promise<T | undefined>;
  update (id: string, item: Partial<T>): Promise<boolean>;
  delete (id: string): Promise<boolean>;
  search(query?: SearchQuery<T>) :Promise<T[]>;
}


export type SearchQuery<T> = Partial<T> | { [key: string]: any };