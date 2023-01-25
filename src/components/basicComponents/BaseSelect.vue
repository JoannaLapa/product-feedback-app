<template>
  <select :id="id" :aria-describedby="ariaDescribedBy" :name="name">
    <slot></slot>
  </select>
</template>

<script setup>
defineProps({
  ariaDescribedBy: {
    type: String,
    default: "",
  },
  id: {
    type: String,
    default: "",
  },
  name: {
    type: String,
    default: "",
  },
});
</script>
