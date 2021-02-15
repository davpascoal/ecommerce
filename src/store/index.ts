import { IState } from "@/store/state.api";
import { createStore } from "vuex";
import productsModule from "./products/products";
import cartModule from "./cart/cart";

export default createStore<IState>({
  modules: {
    products: productsModule,
    cart: cartModule,
  },
});
