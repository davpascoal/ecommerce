<template>
    <div class="menu">
        <nav>
            <ul>
                <li>Link 1</li>
                <li>Link 2</li>
            </ul>
        </nav>
        <div class="overlay"></div>
    </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';

@Options({
})
export default class Menu extends Vue {}
</script>

<style scoped lang="scss">

.menu {
    display: grid;
    grid-template-columns: auto 1fr;
    position: fixed;
    width: 100vw;
    height: 100vh;
}

.overlay {
    background-color: rgba(0, 0, 0, 0.5);
}

</style>