<template>
  <!-- to change sm:max-w-[43.0625rem] for tailwind spacing unit in next branches where spacing already exists in tailwind.config-->
  <div
    class="relative my-0 mx-auto md:max-w-3xl lg:my-24 lg:flex lg:gap-8 lg:px-0 xl:max-w-6xl"
    :class="{
      'mx-6 mt-8 flex flex-col gap-9 sm:min-w-3/4 sm:gap-17':
        variant === 'secondary',
      'sm:px-10 md:px-24': variant === 'primary',
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
    validation: (variant) => ["primary", "secondary"].includes(variant),
  },
});
</script>
