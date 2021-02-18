<template>
  <nav class="grid grid-cols-3 p-4">
    <!-- Toggle -->
    <div class="flex justify-start">
      <button @click="() => toggleMenu(true)" class="lg:hidden">
        <fa icon="bars" size="2x" />
      </button>
    </div>

    <!-- Desktop Menu -->
    <!-- TODO: How to extract this into a method?? -->
    <div class="flex justify-center">
      <ul class="hidden lg:flex">
        <li v-for="link in menuLinks" :key="link.path" class="p-3">
          <router-link :to="link.path">{{ link.name }}</router-link>
        </li>
      </ul>
    </div>

    <!-- Shopping Cart -->
    <div class="flex justify-end">
      <button @click="() => toggleCart(true)">
        <fa icon="shopping-cart" size="2x" />
      </button>
    </div>
  </nav>

  <!-- Menu Drawer -->
  <SlideMenu
    class="lg:hidden"
    :isVisible="menuVisible"
    :toggleMenu="toggleMenu"
  >
    <nav class="bg-primary h-full text-center">
      <ul @click="() => toggleMenu(false)">
        <li v-for="link in menuLinks" :key="link.path" class="p-3">
          <router-link :to="link.path">{{ link.name }}</router-link>
        </li>
      </ul>
    </nav>
  </SlideMenu>

  <!-- Cart Drawer -->
  <SlideMenu
    :isVisible="cartVisible"
    :toggleMenu="toggleCart"
    :direction="'right'"
  >
    <Cart />
  </SlideMenu>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import SlideMenu from "@/components/SlideMenu.vue";
import Cart from "@/components/Cart.vue";

@Options({
  props: {
    menuLinks: Array,
  },
  components: {
    SlideMenu,
    Cart,
  },
})
export default class Menu extends Vue {
  menuVisible = false;
  cartVisible = false;
  menuLinks!: Array<any>;

  toggleMenu(visibility: boolean) {
    this.menuVisible = visibility;
  }

  toggleCart(visibility: boolean) {
    this.cartVisible = visibility;
  }
}
</script>

<style scoped lang="scss">
.router-link-exact-active {
  color: #42b983;
}
</style>
