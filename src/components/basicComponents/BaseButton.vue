<template>
  <router-link v-if="link" :to="to" :class="mode">
    <!-- router-link or router-view? -->
    <slot></slot>
  </router-link>
  <button v-else :class="mode">
    <slot></slot>
  </button>
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
