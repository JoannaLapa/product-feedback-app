<template>
  <div
    class="flex"
    :class="{
      'min-h-[3.5rem] bg-neutral-600': variant === 'primary',
    }"
  >
    <slot></slot>
  </div>
</template>

<script setup>
defineProps({
  variant: {
    type: String,
    required: true,
    validation: (variant) => ["primary", "neutral"].includes(variant),
  },
});
</script>
