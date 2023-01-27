<template>
  <Listbox v-model="selectedOption">
    <ListboxButton
      class="relative flex cursor-pointer items-center gap-2 text-xxs font-bold text-neutral-300 md:text-xs"
      >{{ selectedOption.name }}
      <ArrowDown />
    </ListboxButton>
    <ListboxOptions
      class="divide-neutral-700/15 absolute z-10 mt-[250px] flex w-60 flex-col divide-y rounded-lg border-neutral-700 bg-neutral-100 indent-6 text-xxs shadow-3xl lg:mt-[300px] lg:w-63"
    >
      <ListboxOption
        v-for="option in options"
        :key="option.id"
        :value="option"
        :disabled="option.unavailable"
        class="cursor-pointer py-3 text-neutral-400 transition duration-300 hover:text-primary-200 md:text-xs lg:text-base"
      >
      <IconCheck />
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
import IconCheck from "../icons/IconCheck.vue";

const options = [
  { id: 1, name: "Most Upvotes", unavailable: false },
  { id: 2, name: "Least Upvotes", unavailable: false },
  { id: 3, name: "Most Comments", unavailable: false },
  { id: 4, name: "Least Comments", unavailable: false },
];
const selectedOption = ref(options[0]);
</script>
