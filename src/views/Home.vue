<template>
  <div class="home">
    <div v-if="products.isFetching">Loading...</div>

    <Products
      v-else-if="products.data.length > 0"
      :product-list="products.data"
    />
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import Products from "@/components/Products.vue"; // @ is an alias to /src
import { mapState } from "vuex";
import { ProductsActionTypes } from "@/store";
import { IProduct } from "@/services/product/product.api";
import { IRequest } from "@/store/state.api";

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
  products!: IRequest<Array<IProduct>>;
  getProducts!: Function;

  created() {
    this.getProducts();
  }
}
</script>
