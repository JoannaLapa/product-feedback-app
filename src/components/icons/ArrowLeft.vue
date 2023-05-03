<template>
  <svg width="7" height="10" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M6 9L2 5l4-4"
      :class="white ? 'stroke-neutral-1050' : 'stroke-primary-100'"
      stroke-width="2"
      fill="none"
      fill-rule="evenodd"
    />
  </svg>
</template>

<script setup>
defineProps({
  white: {
    type: Boolean,
    default: false,
  },
});
</script>
