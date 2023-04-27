<template>
  <ListboxButton
    v-slot="{ open }"
    class="relative flex cursor-pointer items-center gap-2 text-xxs md:text-xs"
    :class="{
      ' font-bold text-neutral-300': variant === 'primary',

      'mt-4 h-12 w-full rounded-md bg-neutral-200 indent-6 text-neutral-500':
        variant === 'wide',
    }"
  >
    <slot></slot>
    <ArrowUp v-show="open" class="stroke-neutral-100" />
    <ArrowDown v-show="!open" />
  </ListboxButton>
</template>

<script setup>
import { ListboxButton } from "@headlessui/vue";
import ArrowDown from "../icons/ArrowDown.vue";
import ArrowUp from "../icons/ArrowUp.vue";

defineProps({
  variant: {
    type: String,
    required: true,
    validation: (variant) => ["primary", "secondary"].includes(variant),
  },
});
</script>
