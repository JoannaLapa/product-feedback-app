<template>
  <router-link v-if="link" :to="to" :class="mode">
    <!-- router-link or router-view? -->
    {{ text }}
  </router-link>
  <div v-if="likeAButton" :class="mode">
    <p>{{ text }}</p>
  </div>
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
  likeAButton: {
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
