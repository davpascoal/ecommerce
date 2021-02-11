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
      <button>
        <fa icon="shopping-cart" size="2x" />
      </button>
    </div>
  </nav>
  <div class="lg:hidden">
    <nav
      class="bg-primary h-full menu__drawer w-1/4 text-center"
      :class="[visible ? activeClass : '']"
    >
      <ul @click="() => toggleMenu(false)">
        <li v-for="link in menuLinks" :key="link.path" class="p-3">
          <router-link :to="link.path">{{ link.name }}</router-link>
        </li>
      </ul>
    </nav>
    <div
      v-show="visible"
      class="overlay"
      @click="() => toggleMenu(false)"
    ></div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";

@Options({
  props: {
    menuLinks: Array,
  },
})
export default class Menu extends Vue {
  visible = false;
  activeClass = "menu__drawer--visible";
  menuLinks!: Array<any>;

  toggleMenu(visibility: boolean) {
    this.visible = visibility;
  }
}
</script>

<style scoped lang="scss">
.menu__drawer {
  position: fixed;
  top: 0;
  height: 100vh;
  transform: translate3d(-100%, 0, 0);
  transition: transform 0.2s ease-in-out;
  z-index: 10;

  &--visible {
    transform: translate3d(0, 0, 0);
  }
}

.router-link-exact-active {
  color: #42b983;
}

.overlay {
  position: fixed;
  top: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 5;
}
</style>
