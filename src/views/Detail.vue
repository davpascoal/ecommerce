<template>
  <section v-if="product" class="p-4 pb-20">
    <div class="lg:grid lg:grid-cols-2">
      <div class="flex-grow flex items-center px-24">
        <img :src="product.image" />
      </div>

      <!-- Info -->
      <div>
        <h1 class="font-bold text-xl mt-4">{{ product.title }}</h1>
        <p class="mt-4 text-lg font-bold">{{ product.price }}$</p>
        <button class="mt-4 border-2 border-purple-500 p-2 hidden lg:block">
          Add to Cart
        </button>
      </div>
    </div>
    <p class="mt-4">{{ product.description }}</p>
    <!-- Quick actions footer for mobile -->
    <footer
      class="h-20 fixed bottom-0 bg-detail-footer w-full border-t-2 border-gray-200 flex justify-center items-center lg:hidden"
    >
      <button
        class="border-2 border-purple-500 p-2"
        @click="() => addToCart(product)"
      >
        <fa icon="shopping-cart" />
        Add to Cart
      </button>
    </footer>
  </section>
  <div v-else-if="isFetching">Loading...</div>
  <div v-else>Product not available</div>
</template>

<script lang="ts">
import { IProduct } from "@/services/product/product.api";
import { Options, Vue } from "vue-class-component";
import { mapState } from "vuex";
import api from "@/services";
import { IProductState } from "@/store/products/products";
import { CartActionTypes } from "@/store/cart/cart";

@Options({
  computed: {
    ...mapState(["products"]),
  },
  methods: {
    addToCart(product: IProduct) {
      this.$store.dispatch(CartActionTypes.ADD_TO_CART, product);
    },
  },
})
export default class Detail extends Vue {
  products!: IProductState;
  isFetching = false;
  product: undefined | IProduct;

  created() {
    const id = this.$route.params.id as string;
    this.product = this.products.data.size
      ? this.products.data.get(id)
      : undefined;

    // Get product
    if (!this.product) {
      this.isFetching = true;
      api.products
        .getProduct(id)
        .then((product) => {
          this.product = product;
          this.isFetching = false;
        })
        .catch((error) => {
          this.isFetching = false;
          console.log("Error fetching product", error);
        });
    }
  }
}
</script>
