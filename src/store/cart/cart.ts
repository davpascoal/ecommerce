import { IProduct } from "./../../services/product/product.api";
import { Module } from "vuex";
import { IState } from "../state.api";

export type ICartState = Map<string, number>;

const cartModule: Module<ICartState, IState> = {
  state: new Map(),
  mutations: {
    addToCart(state, payload: Record<string, number>) {
      const key = Object.keys(payload)[0];
      const value = state.get(key) || 0;
      state.set(key, value + 1);
    },
    removeFromCart(state, id: string) {
      state.delete(id);
    },
    // deleteFromCart()
  },
  actions: {},
};

export default cartModule;
