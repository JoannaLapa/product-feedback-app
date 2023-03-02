<template>
  <div
    class="relative my-0 mx-auto md:max-w-3xl lg:flex lg:px-0"
    :class="{
      'mx-6 mt-8 flex flex-col gap-9 sm:w-134 sm:gap-17 lg:my-23':
        variant === 'secondary',
      'sm:px-10 md:px-24 lg:my-24 lg:gap-8 xl:max-w-6xl': variant === 'primary',
      'my-6 mx-6 flex flex-col gap-6': variant === 'tertiary',
    }"
  >
    <slot></slot>
  </div>
</template>

<script setup>
defineProps({
  variant: {
    type: String,
    default: "primary",
    validation: (variant) =>
      ["primary", "secondary", "tertiary"].includes(variant),
  },
});
</script>
