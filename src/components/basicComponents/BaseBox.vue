<template>
  <div
    class="rounded-lg bg-neutral-100"
    :class="{
      'border-neutral-700 pl-6 pb-9 pr-4 sm:min-h-full sm:pb-4':
        variant === 'small',

      'p-6 transition duration-300 sm:px-7 sm:py-8 xl:py-7':
        variant === 'primary',

      'px-6 pt-6 sm:px-8 sm:pt-8 xl:pt-7': variant === 'secondary',

      'py-6 pl-6 pr-7 md:min-h-[251px] md:pl-4 md:pr-4 xl:pt-7':
        variant === 'tertiary',
      'w-full sm:col-start-2': variant === 'pure',
      'transition duration-300 hover:scale-105': routeName === 'FeedbackList',
    }"
  >
    <slot></slot>
  </div>
</template>

<script setup>
import { useRoute } from "vue-router";
defineProps({
  variant: {
    type: String,
    default: "",
    validation: (variant) =>
      ["small", "primary", "secondary", "tertiary", "pure"].includes(variant),
  },
});

const route = useRoute();
const routeName = route.name;
</script>
