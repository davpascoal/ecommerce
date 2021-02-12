<template>
  <article>
    {{ product }}
  </article>
</template>

<script lang="ts">
import { IProduct } from "@/services/product/product.api";
import { Options, Vue } from "vue-class-component";

@Options({
  props: {
    product: {
      type: Object as () => IProduct,
    },
  },
})
export default class ProductCard extends Vue {}
</script>

<style scoped></style>
