<template>
  <button v-if="!link" :class="mode">
    <slot></slot>
  </button>
  <router-link v-else :to="to" :class="mode">
    <!-- router-link or router-view? -->
    <slot></slot>
  </router-link>
</template>

<script setup>
defineProps({
  link: {
    type: Boolean,
    default: false,
  },
  mode: {
    type: String,
    default: null,
  },
  to: {
    type: String,
    default: "/feedbacks",
  },
});
</script>
