<template>
  <div class="home">
    <div v-if="products.isFetching">Loading...</div>

    <!-- TODO: Improve the array from -->
    <Products
      v-else-if="products.data.size > 0"
      :product-list="Array.from(products.data.values())"
    />
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import Products from "@/components/Products.vue"; // @ is an alias to /src
import { mapState } from "vuex";
import { IProductState, ProductsActionTypes } from "@/store/products/products";

@Options({
  components: {
    Products,
  },
  computed: {
    ...mapState(["products"]),
  },
  methods: {
    getProducts() {
      this.$store.dispatch(ProductsActionTypes.GET_PRODUCTS_ASYNC);
    },
  },
})
export default class Home extends Vue {
  getProducts!: Function;
  products!: IProductState;

  created() {
    if (!this.products.data.size) {
      this.getProducts();
    }
  }
}
</script>
