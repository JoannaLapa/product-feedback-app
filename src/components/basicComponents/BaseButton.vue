<template>
  <button v-if="!link" :class="mode" value="value">
    {{ text }}
  </button>
  <router-link v-else :to="to" :class="mode">
    <!-- router-link or router-view? -->
    {{ text }}
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
  text: { type: String, required: true },
  value: {
    type: String,
    required: false,
    default: null,
  },
});
</script>
