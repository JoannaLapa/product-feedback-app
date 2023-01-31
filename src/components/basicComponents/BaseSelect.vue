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
    default: "",
  },
  id: {
    type: String,
    required: false,
    default: "",
  },
  name: {
    type: String,
    required: false,
    default: "",
  },
});
</script>
