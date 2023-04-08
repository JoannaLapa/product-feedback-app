<template>
  <component
    :is="tag"
    :to="to"
    :type="type"
    class="flex h-7.5 place-items-center justify-center rounded-lg p-2.5 text-xxs font-bold transition duration-300 sm:h-11 sm:px-6 sm:text-xs"
    :class="{
      'bg-neutral-300 text-primary-100 hover:bg-secondary-300 hover:text-primary-100 focus:bg-primary-100 focus:text-neutral-100':
        variant === 'neutral',

      'h-8 w-17 gap-2.5 bg-neutral-300 text-neutral-500 hover:bg-secondary-300 focus:bg-primary-100 focus:text-neutral-100 sm:h-14 sm:w-10 sm:flex-col sm:gap-2 sm:text-xxs':
        variant === 'small',

      'w-fit bg-primary-100 px-4 text-neutral-100 hover:bg-secondary-700':
        variant === 'secondary',

      'w-full bg-primary-200 text-neutral-300 hover:bg-secondary-600  sm:min-w-fit':
        variant === 'primary',

      'w-fit bg-primary-200 px-2 text-neutral-300 hover:bg-secondary-600 xs:px-4':
        variant === 'primary-narrow',

      'w-full bg-neutral-500 text-neutral-300 hover:bg-neutral-900 sm:min-w-fit':
        variant === 'dark',
      'text-primary-100': variant === 'pure',
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
        "primary-narrow",
        "pure",
        "secondary",
        "neutral",
        "dark",
        "small",
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
