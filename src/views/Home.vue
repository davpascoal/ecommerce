<template>
  <div class="home">
    <Products />
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import Products from "@/components/Products.vue"; // @ is an alias to /src

@Options({
  components: {
    Products,
  },
})
export default class Home extends Vue {}
</script>
