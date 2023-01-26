<template>
  <router-link
    v-if="link"
    :to="to"
    class="flex h-[2.5rem] place-items-center rounded-lg p-4 text-xs font-bold transition duration-300"
    :class="{ 'bg-primary-200 text-neutral-300': variant === 'primary' }"
  >
    {{ text }}
  </router-link>
  <button
    v-else
    class="flex h-[1.875rem] place-items-center rounded-lg p-2.5 transition duration-300"
    :class="{
      'bg-neutral-300 text-primary-100 hover:bg-secondary-300 hover:text-primary-100 focus:bg-primary-100 focus:text-neutral-100':
        variant === 'neutral',
      'bg-primary-100 text-neutral-100': variant === 'focused',
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
    default: "",
  },
  variant: {
    type: String,
    required: true,
    validation: (variant) =>
      ["primary", "secondary", "neutral", "focused"].includes(variant),
  },
});

defineEmits(["filter-data"]);
</script>
