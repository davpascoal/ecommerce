<template>
  <section v-if="product">
    <div class="flex-grow flex items-center">
      <img :src="product.image" />
    </div>
    <h1 class="font-bold text-xl mt-4">{{ product.title }}</h1>
    <p class="mt-4">{{ product.price }}$</p>
  </section>
  <div v-else-if="isFetching">Loading...</div>
  <div v-else>Product not available</div>
</template>

<script lang="ts">
import { IProduct, IProducts } from "@/services/product/product.api";
import { Options, Vue } from "vue-class-component";
import { mapState } from "vuex";
import api from "@/services";

@Options({
  computed: {
    ...mapState(["products"]),
  },
})
export default class Detail extends Vue {
  products!: IProducts;
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
