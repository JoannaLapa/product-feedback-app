<template>
  <Listbox v-model="selectedOption">
    <div class="relative">
      <div class="flex items-center gap-0.5">
        <ListboxLabel v-if="ok" class="text-xxs text-neutral-300 md:text-xs">
          {{ labelTitle }}
        </ListboxLabel>
        <BaseListboxButton :variant="variant">
          {{ selectedOption ? selectedOption.name : options[0].name }}
        </BaseListboxButton>
      </div>
      <transition
        leave-active-class="transition ease-in duration-100"
        leave-from-class="opacity-100"
        leave-to-class="opacity-0"
      >
        <BaseListboxOptions :variant="listBoxOptionsVariant">
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
              <button
                class="w-full text-left"
                type="button"
                @click="
                  selectData({
                    id: option.id,
                    name: option.name,
                    unavailable: option.unavailable,
                  })
                "
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
              </button>
            </li>
          </ListboxOption>
        </BaseListboxOptions>
      </transition>
    </div>
  </Listbox>
</template>

<script setup>
import { ref, inject } from "vue";
import { Listbox, ListboxOption, ListboxLabel } from "@headlessui/vue";
import BaseListboxButton from "./BaseListboxButton.vue";
import BaseListboxOptions from "./BaseListboxOptions.vue";
import IconCheck from "../icons/IconCheck.vue";

const selectedOption = ref();
const props = defineProps({
  labelTitle: {
    type: String,
    default: "",
  },
  ok: {
    type: Boolean,
    default: false,
  },
  options: {
    type: Object,
    default: null,
  },
  action: {
    type: Function,
    required: true,
  },
});
const selectData = (name) => {
  selectedOption.value = name;
  console.log(selectedOption.value);
  props.action(selectedOption.value);
};
const variant = inject("variant");
const listBoxOptionsVariant = inject("listBoxOptionsVariant");
</script>
