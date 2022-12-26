<template>
<the-header></the-header>
<router-view></router-view>
</template>

<script>
import { RouterLink, RouterView } from "vue-router";
import TheHeader from './components/layout/TheHeader.vue';

export default {
    components: {
    TheHeader
}
}
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Jost:wght@400;600;700&display=swap');

*, *::before, *::after {
    box-sizing: border-box;
}

html {
    font-family: 'Jost', sans-serif;
}

body {
    margin: 0 auto;
}
</style>
