<template>
  <label :for="labelFor" class="text-xxs font-bold text-neutral-500 sm:text-xs">
    {{ title }}</label
  >
  <p :id="id" class="text-xxs text-neutral-400 sm:text-xs">
    {{ description }}
  </p>
</template>

<script setup>
defineProps({
  title: {
    type: String,
    required: true,
  },

  labelFor: {
    type: String,
    default: "",
  },

  idTitle: {
    type: String,
    default: "",
  },

  description: {
    type: String,
    default: "",
  },
});
</script>
