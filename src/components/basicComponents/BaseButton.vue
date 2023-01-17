<template>
<<<<<<< HEAD
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
=======
  <button v-if="!link" :class="mode" value="value">
    {{ text }}
  </button>
  <router-link v-else :to="to" :class="mode">
    <!-- router-link or router-view? -->
    {{ text }}
  </router-link>
>>>>>>> af3065d1b0060f0c14e95251b435059755802924
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
