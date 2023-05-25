<template>
  <div
    class="flex items-center gap-4 text-left text-base text-neutral-400 before:h-2 before:w-2 before:rounded-full"
    :class="{
      'before:bg-secondary-100 ': variant === 'planned',
      'before:bg-primary-200': variant === 'in-progress',
      'before:bg-secondary-400': variant === 'live',
      'mb-3 gap-2 ': statusFeedbackList,
    }"
  >
    <div
      class="flex w-full items-center justify-between"
      :class="{ 'text-xxs text-neutral-400': statusFeedbackList }"
    >
      <p>{{ statusName }}</p>
      <slot name="statusNumber" />
    </div>
  </div>
</template>

<script setup>
defineProps({
  statusName: {
    type: String,
    required: true,
  },

  variant: {
    type: String,
    default: "",
    required: false,
    validation: (variant) =>
      ["planned", "in-progress", "live"].includes(variant),
  },

  statusFeedbackList: {
    type: Boolean,
    default: false,
  },
});
</script>
