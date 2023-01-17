<template>
  <li>
    {{ statusName }}
    <span>{{ statusNumber }}</span>
  </li>
</template>

<script setup>
defineProps({
  statusName: {
    type: String,
    required: true,
  },
  statusNumber: {
    type: Number,
    required: true,
  },
});
</script>
