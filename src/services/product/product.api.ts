import { IRequest } from "@/store/state.api";

export interface IProduct {
  id: number;
  title: string;
  price: string;
  category: string;
  description: string;
  image: string;
}

export interface IProducts extends IRequest<Map<string, IProduct>> {}
