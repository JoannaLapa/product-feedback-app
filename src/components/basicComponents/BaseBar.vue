<template>
  <div
    class="flex items-center justify-between sm:rounded-lg"
    :class="{
      'min-h-14 bg-neutral-600 py-2 px-3 xs:px-6 sm:py-3.5 sm:pr-3 sm:pl-6 lg:pr-4':
        variant === 'primary',
      'min-h-25 bg-neutral-600 py-2 px-3 xs:px-6 sm:py-3.5 sm:pr-3 sm:pl-6 lg:pr-4':
        variant === 'primary-high',
      'px-0 py-0': variant === 'neutral',
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
