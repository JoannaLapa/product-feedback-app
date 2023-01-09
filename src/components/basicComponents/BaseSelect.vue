<template>
  <select :id="id" :aria-describedby="ariaDescribedBy" :name="name">
    <slot></slot>
  </select>
</template>

<script setup>
defineProps({
  ariaDescribedBy: {
    type: String,
    required: false,
    default: null,
  },
  id: {
    type: String,
    required: false,
    default: null,
  },
  name: {
    type: String,
    required: false,
    default: null,
  },
});
</script>
