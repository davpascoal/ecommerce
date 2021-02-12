<template>
  <section class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
    <ProductCard
      v-for="product in productList"
      :product="product"
      :key="product.id"
    />
    <div>{{ productList }}</div>
  </section>
</template>

<script lang="ts">
import { IProduct } from "@/services/product/product.api";
import { Options, Vue } from "vue-class-component";
import ProductCard from "@/components/ProductCard.vue";

@Options({
  props: {
    productList: {
      type: Array as () => Array<IProduct>,
    },
  },
  components: {
    ProductCard,
  },
})
export default class Products extends Vue {}
</script>

<style lang="scss" scoped></style>
