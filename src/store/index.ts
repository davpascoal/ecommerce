import { IProduct, IProducts } from "./../services/product/product.api";
import { IStore } from "@/store/state.api";
import { createStore } from "vuex";
import api from "@/services";

export enum ProductsActionTypes {
  GET_PRODUCTS_ASYNC = "getProductsAsync",
  GET_PRODUCTS_REQUEST = "getProductsRequest",
  GET_PRODUCTS_SUCCESS = "getProductsSuccess",
  GET_PRODUCTS_ERROR = "getProductsError",
}

export default createStore<IStore>({
  state: {
    products: {
      data: {} as any,
      isFetching: false,
    },
  },
  mutations: {
    getProductsRequest(state) {
      state.products.isFetching = true;
    },
    getProductsSuccess(state, payload: Array<IProduct>) {
      const indexedData: Map<string, IProduct> = new Map(
        payload.map((e) => [e.id.toString(), e])
      );
      state.products.data = indexedData;
      state.products.isFetching = false;
    },
    getProductsError(state, payload) {
      state.products.error = payload;
      state.products.isFetching = false;
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
  modules: {},
});
