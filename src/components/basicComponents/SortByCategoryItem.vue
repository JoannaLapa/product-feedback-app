<template>
  <li>
    <BaseButton>{{ text }}</BaseButton>
  </li>
</template>

<script setup>
import BaseButton from "./BaseButton.vue";

defineProps({
  text: { type: String, required: true },
});
</script>
