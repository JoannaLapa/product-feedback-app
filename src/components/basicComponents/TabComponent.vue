<template>
  <li :class="title === selectedTitle ? 'block' : 'hidden'" class="sm:block">
    <slot></slot>
  </li>
</template>

<script setup>
import { inject } from "vue";
defineProps({
  title: {
    type: String,
    default: "Tab",
  },
});
const selectedTitle = inject("selectedTitle");
</script>
