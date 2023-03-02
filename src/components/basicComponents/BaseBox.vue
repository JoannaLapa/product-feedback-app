<template>
  <div
    class="rounded-lg bg-neutral-100"
    :class="{
      'border-neutral-700 pl-6 pb-9 pr-4 sm:min-h-full sm:pb-4':
        variant === 'small',
      'p-6 sm:px-8 sm:py-8 xl:py-7': variant === 'primary',
    }"
  >
    <slot></slot>
  </div>
</template>

<script setup>
defineProps({
  variant: {
    type: String,
    default: "",
    validation: (variant) => ["small", "primary"].includes(variant),
  },
});
</script>
