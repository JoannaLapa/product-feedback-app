<template>
  <div
    class="rounded-lg bg-neutral-100"
    :class="{
      'pl-6 pt-6 pb-9 pr-4': variant === 'small',
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
    validation: (variant) => ["small"].includes(variant),
  },
});
</script>
