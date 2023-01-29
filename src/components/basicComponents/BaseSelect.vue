<template>
  <Listbox v-model="selectedOption" as="div">
    <div class="relative">
      <div class="flex items-center gap-0.5">
        <ListboxLabel class="text-xxs text-neutral-300 md:text-xs">
          Sort by:
        </ListboxLabel>
        <ListboxButton
          v-slot="{ open }"
          class="relative flex cursor-pointer items-center gap-2 text-xxs font-bold text-neutral-300 md:text-xs"
        >
          {{ selectedOption.name }}
          <ArrowUp v-show="open" class="stroke-neutral-100" />
          <ArrowDown v-show="!open" />
        </ListboxButton>
      </div>
      <transition
        leave-active-class="transition ease-in duration-100"
        leave-from-class="opacity-100"
        leave-to-class="opacity-0"
      >
        <ListboxOptions
          class="divide-neutral-700/15 lg:w-63 absolute top-12 z-10 flex w-60 flex-col divide-y rounded-lg border-neutral-700 bg-neutral-100 indent-6 text-xxs shadow-3xl sm:top-14"
          role="listbox"
        >
          <ListboxOption
            v-for="option in options"
            :key="option.id"
            v-slot="{ active, selected }"
            :value="option"
            :disabled="option.unavailable"
          >
            <li
              class="relative cursor-pointer select-none py-3 text-neutral-400 transition duration-300 hover:text-primary-200 md:text-xs lg:text-base"
            >
              <span> {{ option.name }}</span>
              <span
                v-if="selected"
                :class="[
                  active ? 'text-white' : 'text-primary-200',
                  'absolute inset-y-0 right-0 flex items-center pr-4',
                ]"
              >
                <IconCheck class="h-5 w-5" aria-hidden="true" />
              </span>
            </li>
          </ListboxOption>
        </ListboxOptions>
      </transition>
    </div>
  </Listbox>
</template>

<script setup>
import { ref } from "vue";
import {
  Listbox,
  ListboxButton,
  ListboxOptions,
  ListboxOption,
  ListboxLabel,
} from "@headlessui/vue";
import ArrowDown from "../icons/ArrowDown.vue";
import ArrowUp from "../icons/ArrowUp.vue";
import IconCheck from "../icons/IconCheck.vue";

const options = [
  { id: 1, name: "Most Upvotes", unavailable: false },
  { id: 2, name: "Least Upvotes", unavailable: false },
  { id: 3, name: "Most Comments", unavailable: false },
  { id: 4, name: "Least Comments", unavailable: false },
];
const selectedOption = ref(options[0]);
</script>
