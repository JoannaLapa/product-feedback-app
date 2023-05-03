<template>
  <div class="flex flex-col">
    <div
      class="flex items-center gap-3 text-xxs font-bold sm:text-xs"
      :class="{
        'text-neutral-400': variant === 'primary',
        'text-neutral-100': variant === 'white',
      }"
    >
      <slot name="arrow" />

      <router-link
        to="/"
        class="underline-offset-2 transition delay-1000 duration-1000 hover:underline hover:decoration-neutral-400"
        >Go Back</router-link
      >
    </div>
    <slot></slot>
  </div>
</template>

<script setup>
defineProps({
  variant: {
    type: String,
    required: true,
    validation: (variant) => ["primary", "white"].includes(variant),
  },
});
</script>
