<template>
  <ListboxButton
    v-slot="{ open }"
    class="relative flex cursor-pointer items-center gap-2 text-xxs font-bold text-neutral-300 md:text-xs"
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
</script>
