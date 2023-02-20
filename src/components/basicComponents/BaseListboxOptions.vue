<template>
  <ListboxOptions
    class="divide-neutral-700/15 absolute z-10 flex flex-col divide-y rounded-lg border-neutral-700 bg-neutral-100 indent-4 text-xxs shadow-3xl sm:indent-6"
    role="listbox"
    :class="{
      'w-60 translate-y-7 sm:translate-y-10 lg:w-64': variant === 'narrow',
      'w-full translate-y-6': variant === 'wide',
    }"
  >
    <slot />
  </ListboxOptions>
</template>

<script setup>
import { ListboxOptions } from "@headlessui/vue";
defineProps({
  variant: {
    type: String,
    required: true,
    validation: (variant) => ["wide", "narrow"].includes(variant),
  },
});
</script>
