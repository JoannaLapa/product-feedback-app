<template>
  <div
    class="rounded-lg bg-neutral-100"
    :class="{
      'border-neutral-700 pl-6 pb-9 pr-4 sm:min-h-full sm:max-w-[13.9375rem] sm:pb-4':
        variant === 'small',
    }"
  >
    <slot></slot>
  </div>
</template>

<script setup>
defineProps({
  variant: {
    type: String,
    default: " ",
    required: false,
    validation: (variant) => ["small"].includes(variant),
  },
});
</script>
