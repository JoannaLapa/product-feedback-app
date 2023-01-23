<template>
  <router-link v-if="link" :to="to" :class="mode">
    {{ text }}
  </router-link>
  <button
    v-else
    class="flex h-[1.875rem] place-items-center rounded-lg p-2.5 transition duration-300"
    :class="{
      'bg-primary-100 text-neutral-100': variant === 'primary',
      'bg-neutral-300 text-primary-100 hover:bg-secondary-300 hover:text-primary-100 focus:bg-primary-100 focus:text-neutral-100':
        variant === 'neutral',
    }"
    @click="$emit('filter-data')"
  >
    {{ text }}
  </button>
</template>

<script setup>
defineProps({
  link: {
    type: Boolean,
    default: false,
  },
  mode: {
    type: String,
    default: " ",
  },
  to: {
    type: String,
    default: "/feedbacks",
  },
  text: {
    type: String,
    required: true,
  },
  value: {
    type: String,
    default: " ",
  },
  variant: {
    type: String,
    default: " ",
    required: true,
    validation: (variant) =>
      ["primary", "secondary", "neutral"].includes(variant),
  },
});

defineEmits(["filter-data"]);
</script>
