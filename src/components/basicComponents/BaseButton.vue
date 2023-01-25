<template>
  <router-link v-if="link" :to="to" :class="mode">
    <!-- router-link or router-view? -->
    {{ text }}
  </router-link>
  <button v-else :class="mode" @click="$emit('filter-data')">
    {{ text }}
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
    default: "",
  },
  to: {
    type: String,
    default: "/feedbacks",
  },
  text: {
    type: String,
    required: true,
  },
  value: {
    type: String,
    default: "",
  },
});

defineEmits(["filter-data"]);
</script>
