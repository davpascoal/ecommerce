<template>
  <router-link
    :to="{ name: 'Detail', params: { id: product.id } }"
    class="shadow-lg p-4 break-words flex flex-col"
  >
    <div class="flex-grow flex items-center">
      <img :src="product.image" />
    </div>
    <h1 class="font-bold text-xl mt-4">{{ product.title }}</h1>
    <p class="mt-4">{{ product.price }}$</p>
  </router-link>
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
