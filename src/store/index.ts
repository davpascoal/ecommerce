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
      data: [],
      isFetching: false,
    },
  },
  mutations: {
    getProductsRequest(state) {
      state.products.isFetching = true;
    },
    getProductsSuccess(state, payload) {
      state.products.data = payload;
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
  // getters: {
  //   getProducts: (state) => state.products.data,
  // },
});
