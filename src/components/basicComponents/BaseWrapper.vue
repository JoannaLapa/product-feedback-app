<template>
  <div class="wrapper">
    <slot></slot>
  </div>
</template>

<style scoped>
.wrapper {
  width: clamp(87.2vw, 80vw + 3vw, 89.2vw);
  max-width: 69.375rem;
}
</style>
