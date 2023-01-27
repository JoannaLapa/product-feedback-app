<template>
  <Listbox v-model="selectedOption">
    <ListboxButton
      class="flex items-center gap-2 text-xxs font-bold text-neutral-300 md:text-xs"
      >{{ selectedOption.name }}
      <ArrowDown />
    </ListboxButton>
    <ListboxOptions class="bg-neutral-100">
      <ListboxOption
        v-for="option in options"
        :key="option.id"
        :value="option"
        :disabled="option.unavailable"
        class="text-neutral-400 md:text-xs"
      >
        {{ option.name }}
      </ListboxOption>
    </ListboxOptions>
  </Listbox>
</template>

<script setup>
import { ref } from "vue";
import {
  Listbox,
  ListboxButton,
  ListboxOptions,
  ListboxOption,
} from "@headlessui/vue";
import ArrowDown from "../icons/ArrowDown.vue";

const options = [
  { id: 1, name: "Most Upvotes", unavailable: false },
  { id: 2, name: "Least Upvotes", unavailable: false },
  { id: 3, name: "Most Comments", unavailable: false },
  { id: 4, name: "Least Comments", unavailable: false },
];
const selectedOption = ref(options[0]);
</script>
