import { IProductState } from "./products/products";

export interface IState {
  products: IProductState;
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
