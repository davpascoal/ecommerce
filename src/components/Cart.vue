<template>
  <div class="bg-primary h-full text-center">
    <p>Cart Content</p>
    <ul>
      <li v-for="item in Array.from(cart.values())" :key="item.id">
        {{ item.title }}
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { ICartState } from "@/store/cart/cart";
import { Options, Vue } from "vue-class-component";
import { mapState } from "vuex";

@Options({
  computed: {
    ...mapState(["cart"]),
  },
})
export default class Cart extends Vue {}
</script>
