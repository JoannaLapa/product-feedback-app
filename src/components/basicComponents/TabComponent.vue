<template>
  <li
    :class="title === selectedTitle ? 'block' : 'hidden'"
    class="py-6 md:block md:py-7"
  >
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
