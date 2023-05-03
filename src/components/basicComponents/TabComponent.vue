<template>
  <li v-show="title === selectedTitle">
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
