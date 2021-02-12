import baseApi from "../api-base-service";
import { IProduct } from "./product.api";

export const getProducts = async (): Promise<Array<IProduct>> => {
  const response = await fetch(baseApi("products"));
  const products = await response.json();

  return products;
};
