<template>
  <div class="flex items-center gap-3 text-xxs font-bold text-neutral-400">
    <ArrowLeft />
    <router-link to="/">Go Back</router-link>
  </div>
  <slot></slot>
</template>

<script setup>
import ArrowLeft from "../icons/ArrowLeft.vue";
</script>
