<template>
  <div class="flex flex-col">
    <div
      class="flex items-center gap-3 text-xxs font-bold text-neutral-400 sm:text-xs"
    >
      <ArrowLeft />

      <router-link
        to="/"
        class="underline-offset-2 transition delay-1000 duration-1000 hover:underline hover:decoration-neutral-400"
        >Go Back</router-link
      >
    </div>
    <slot></slot>
  </div>
</template>

<script setup>
import ArrowLeft from "../icons/ArrowLeft.vue";
</script>
