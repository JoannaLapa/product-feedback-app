<template>
  <Listbox v-model="selectedOption">
    <ListboxButton>{{ selectedOption.name }}</ListboxButton>
    <ListboxOptions>
      <ListboxOption
        v-for="option in options"
        :key="option.id"
        :value="option"
        :disabled="option.unavailable"
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

const options = [
  { id: 1, name: "Most Upvotes", unavailable: false },
  { id: 2, name: "Least Upvotes", unavailable: false },
  { id: 3, name: "Most Comments", unavailable: false },
  { id: 4, name: "Least Comments", unavailable: false },
];
const selectedOption = ref(options[0]);
</script>
