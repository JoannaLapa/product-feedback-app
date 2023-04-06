<template>
  <li
    class="flex items-center gap-4 text-left text-base text-neutral-400 before:h-2 before:w-2 before:rounded-full"
    :class="{
      'before:bg-secondary-100 ': variant === 'planned',
      'before:bg-primary-200': variant === 'in-progress',
      'before:bg-secondary-400': variant === 'live',
    }"
  >
    <div class="flex w-full justify-between">
      <p>{{ statusName }}</p>

      <p class="mr-0 self-end font-bold">{{ statusNumber }}</p>
    </div>
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

  variant: {
    type: String,
    default: "",
    required: false,
    validation: (variant) =>
      ["planned", "in-progress", "live"].includes(variant),
  },
});
</script>
