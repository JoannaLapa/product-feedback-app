<template>
  <router-link
    v-if="link"
    :to="to"
    class="flex max-h-10 w-fit place-items-center rounded-lg p-2 text-xs font-bold transition duration-300 xs:p-4 md:max-h-11"
    :class="{
      'bg-primary-200 text-neutral-300 hover:bg-secondary-600 md:text-sm':
        variant === 'primary',
    }"
  >
    {{ text }}
  </router-link>
  <button
    v-else
    class="flex place-items-center rounded-lg p-2.5 transition duration-300"
    :class="{
      'h-7.5 bg-neutral-300 text-primary-100 hover:bg-secondary-300 hover:text-primary-100 focus:bg-primary-100 focus:text-neutral-100':
        variant === 'neutral',
      'h-8 w-17 gap-2.5 bg-neutral-300  text-xxs font-bold text-neutral-500 hover:bg-secondary-300 focus:bg-primary-100 focus:text-neutral-100 sm:h-14 sm:w-10 sm:flex-col sm:gap-2':
        variant === 'small',
      'h-7.5 bg-primary-100 text-neutral-100': variant === 'secondary',
    }"
    @click="$emit('action')"
  >
    {{ text || number }}
    <slot></slot>
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
    required: false,
    default: "",
  },
  number: {
    type: Number,
    required: false,
    default: null,
  },
  value: {
    type: String,
    default: "",
  },
  variant: {
    type: String,
    required: true,
    validation: (variant) =>
      ["primary", "secondary", "neutral", "small"].includes(variant),
  },
});

defineEmits(["action"]);
</script>
