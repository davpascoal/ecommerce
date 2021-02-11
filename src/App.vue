<template>
  <Menu :menu-links="menuLinks" />
  <router-view />
  <!-- Footer -->
</template>

<script lang="ts">
import Menu from "@/components/Menu.vue";
import { Options, Vue } from "vue-class-component";
import { routes } from "@/router/index";

@Options({
  components: {
    Menu,
  },
})
export default class App extends Vue {
  menuLinks = routes;
}
</script>
