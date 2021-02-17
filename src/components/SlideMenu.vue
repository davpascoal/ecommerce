<template>
  <div>
    <div
      class="menu__drawer"
      :class="[isVisible ? activeClass : '', `menu__drawer-${direction}`]"
    >
      <slot></slot>
    </div>
    <div
      v-show="isVisible"
      class="overlay"
      @click="() => toggleMenu(false)"
    ></div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";

enum Direction {
  LEFT = "left",
  RIGHT = "right",
}

@Options({
  props: {
    isVisible: Boolean,
    toggleMenu: Function,
    direction: {
      type: String as () => Direction,
      default: Direction.LEFT,
    },
  },
})
export default class SlideMenu extends Vue {
  isVisible!: boolean;
  direction!: Direction;
  activeClass = `menu__drawer-${this.direction}--visible`;
  toggleMenu!: (isVisible?: boolean) => void;
}
</script>

<style scoped lang="scss">
.menu__drawer {
  position: fixed;
  top: 0;
  height: 100vh;
  transition: transform 0.2s ease-in-out;
  z-index: 10;
}

.menu__drawer-left {
  transform: translateX(-100%);

  &--visible {
    transform: translateX(0);
  }
}

.menu__drawer-right {
  right: 0;
  transform: translateX(100%);

  &--visible {
    transform: translateX(0);
  }
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
