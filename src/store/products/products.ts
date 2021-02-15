import { IRequest } from "@/store/state.api";
import api from "@/services";
import { IProduct } from "@/services/product/product.api";
import { Module } from "vuex";

export interface IProductState extends IRequest<Map<string, IProduct>> {}

export enum ProductsActionTypes {
  GET_PRODUCTS_ASYNC = "getProductsAsync",
  GET_PRODUCTS_REQUEST = "getProductsRequest",
  GET_PRODUCTS_SUCCESS = "getProductsSuccess",
  GET_PRODUCTS_ERROR = "getProductsError",
}

const productsModule: Module<any, any> = {
  state: {
    data: {} as any,
    isFetching: false,
  },
  mutations: {
    getProductsRequest(state) {
      state.isFetching = true;
    },
    getProductsSuccess(state, payload: Array<IProduct>) {
      const indexedData: Map<string, IProduct> = new Map(
        payload.map((e) => [e.id.toString(), e])
      );
      state.data = indexedData;
      state.isFetching = false;
    },
    getProductsError(state, payload) {
      state.error = payload;
      state.isFetching = false;
    },
  },
  actions: {
    getProductsAsync({ commit }) {
      commit(ProductsActionTypes.GET_PRODUCTS_REQUEST);

      api.products
        .getProducts()
        .then((products) => {
          commit(ProductsActionTypes.GET_PRODUCTS_SUCCESS, products);
        })
        .catch((error) => {
          commit(ProductsActionTypes.GET_PRODUCTS_SUCCESS, error);
        });
    },
  },
};

export default productsModule;
