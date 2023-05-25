<template>
  <div
    class="relative my-0 mx-auto"
    :class="{
      'sm:max-w-2xl sm:px-2 md:max-w-3xl md:px-10 lg:my-24 lg:flex lg:max-w-6xl lg:gap-8 lg:px-5':
        variant === 'primary',
      'mx-6 mt-8 flex flex-col gap-9 sm:w-134 sm:gap-17 lg:my-23':
        variant === 'secondary',
      'my-6 mx-6 flex flex-col gap-6 md:my-14 md:max-w-2xl xl:my-20 2xl:max-w-1/2':
        variant === 'tertiary',
      'sm:max-w-2xl sm:px-2 md:max-w-3xl md:px-10 lg:max-w-6xl lg:gap-8 lg:px-5':
        variant === 'fourth',
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
      ["primary", "secondary", "tertiary", "fourth"].includes(variant),
  },
});
</script>
