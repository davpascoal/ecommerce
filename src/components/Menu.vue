<template>
  <div class="flex justify-between p-4">
    <button @click="() => toggleMenu(true)">
      <fa icon="bars" size="2x" />
    </button>

    <button>
      <fa icon="shopping-cart" size="2x" />
    </button>
  </div>
  <div class="menu" :class="[visible ? activeClass : '']">
    <nav class="p-4 bg-primary">
      <button @click="() => toggleMenu(false)">
        <fa icon="times" size="2x" />
      </button>
      <ul>
        <li v-for="link in menuLinks" :key="link.url">
          <router-link :to="link.url">{{ link.name }}</router-link>
        </li>
      </ul>
    </nav>
    <div class="overlay" @click="() => toggleMenu(false)"></div>
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
  activeClass = "menu--visible";
  menuLinks!: Array<any>;

  toggleMenu(visibility: boolean) {
    this.visible = visibility;
  }
}
</script>

<style scoped lang="scss">
.menu {
  display: grid;
  grid-template-columns: auto 1fr;
  position: fixed;
  top: 0;
  width: 100vw;
  height: 100vh;
  transform: translate3d(-100vw, 0, 0);
  transition: transform 0.3s ease-in-out;
  z-index: 10;

  &--visible {
    transform: translate3d(0, 0, 0);
  }
}

.overlay {
  background-color: rgba(0, 0, 0, 0.5);
}
</style>
