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
import { IProduct } from "@/services/product/product.api";
import { Options, Vue } from "vue-class-component";

@Options({
  props: {
    product: {
      type: Object as () => IProduct,
    },
  },
})
export default class Detail extends Vue {
  isFetching = false;
}
</script>
