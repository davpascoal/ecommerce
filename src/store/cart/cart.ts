/* eslint-disable @typescript-eslint/interface-name-prefix*/
import { IProduct } from "@/services/product/product.api";
import { Module } from "vuex";
import { IState } from "../state.api";

interface ICartItem extends IProduct {
  quantity: number;
}

export type ICartState = Map<string, ICartItem>;

export enum CartActionTypes {
  ADD_TO_CART = "addToCart",
  SUBTRACT_FROM_CART = "subtractFromCart",
  REMOVE_FROM_CART = "removeFromCart",
}

const cartModule: Module<ICartState, IState> = {
  state: new Map(),
  mutations: {
    addToCart(state, payload: IProduct) {
      const productId = payload.id.toString();
      const cartItem = state.get(productId);
      state.set(productId, {
        ...payload,
        quantity: cartItem ? cartItem.quantity + 1 : 1,
      });

      state = new Map(state);
    },
    // subtractFromCart()
    removeFromCart(state, id: string) {
      state.delete(id);
    },
  },
  actions: {
    addToCart({ commit }, product) {
      commit(CartActionTypes.ADD_TO_CART, product);
    },
  },
};

export default cartModule;
