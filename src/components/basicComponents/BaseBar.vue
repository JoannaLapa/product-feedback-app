<template>
  <div
    class="flex items-center justify-between py-2 px-6 sm:rounded-lg sm:py-3.5 sm:pr-3 sm:pl-6 lg:pr-4"
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
