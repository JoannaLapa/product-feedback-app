<template>
  <component
    :is="tag"
    :to="to"
    :type="type"
    class="flex place-items-center justify-center rounded-lg p-2.5 transition duration-300"
    :class="{
      'h-7.5 bg-neutral-300 text-primary-100 hover:bg-secondary-300 hover:text-primary-100 focus:bg-primary-100 focus:text-neutral-100':
        variant === 'neutral',
      'h-8 w-17 gap-2.5 bg-neutral-300  text-xxs font-bold text-neutral-500 hover:bg-secondary-300 focus:bg-primary-100 focus:text-neutral-100 sm:h-14 sm:w-10 sm:flex-col sm:gap-2':
        variant === 'small',
      'h-7.5 bg-primary-100 text-neutral-100': variant === 'secondary',
      'h-10 w-full bg-primary-200 text-neutral-300 hover:bg-secondary-600 sm:h-11 sm:min-w-fit sm:px-6 md:text-sm':
        variant === 'primary',
      'max-h-10 w-fit bg-primary-200 p-2 text-xs font-bold text-neutral-300 hover:bg-secondary-600 xs:p-4 md:max-h-11 md:text-sm':
        variant === 'primary-link',
      'h-10 w-full bg-neutral-500 text-neutral-300 hover:bg-neutral-900 sm:h-11 sm:min-w-fit sm:px-6 md:text-sm':
        variant === 'dark',
    }"
    @click="$emit('action')"
  >
    {{ text || number }}
    <slot></slot>
  </component>
</template>

<script setup>
defineProps({
  to: {
    type: String,
    default: "",
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
      [
        "primary",
        "secondary",
        "neutral",
        "dark",
        "small",
        "primary-link",
      ].includes(variant),
  },
  tag: {
    type: String,
    default: "button",
    validation: (tag) => ["button", "router-link"].includes(tag),
  },
  type: {
    type: String,
    required: true,
  },
});

defineEmits(["action"]);
</script>
