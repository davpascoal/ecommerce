<template>
  <section class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
    <div>Teste</div>
    <div>Teste</div>
    <div>Teste</div>
    <div>Teste</div>

    <div>Teste</div>
    <div>Teste</div>
    <div>Teste</div>
    <div>Teste</div>
  </section>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";

@Options({
  props: {},
})
export default class Products extends Vue {}
</script>

<style lang="scss" scoped></style>
