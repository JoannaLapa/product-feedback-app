<template>
  <RouterView />
</template>

<script setup>
import { RouterView } from "vue-router";
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Jost:wght@400;600;700&display=swap");
*,
*::before,
*::after {
  box-sizing: border-box;
}
html {
  font-family: "Jost", sans-serif;
}
body {
  margin: 0 auto;
}
</style>
