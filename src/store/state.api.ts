import { IProduct } from "@/services/product/product.api";

export interface IStore {
  products: IRequest<Map<number, IProduct>>;
}

export interface IRequest<T, TT = boolean> {
  data: T;
  isFetching: TT;
  error?: string;
}

export interface IFetchable {
  isFetching: boolean;
}

export interface IData<T> {
  data: T;
}
