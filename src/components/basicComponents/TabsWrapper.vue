<template>
  <div class="sm:grid sm:grid-cols-3">
    <ul class="grid grid-cols-3 justify-items-center md:hidden">
      <li
        v-for="title in tabTitles"
        :key="title"
        class="w-full"
        @click="selectedTitle = title.name"
      >
        <div
          class="flex min-h-15 text-xxs font-bold text-neutral-500"
          :class="
            title.name === selectedTitle
              ? 'justify-end border-b-4 border-primary-200'
              : 'justify-center border-b-2 border-neutral-1000 pt-5 pb-4 opacity-40'
          "
        >
          <p>{{ title.name }} ({{ title.number }})</p>
        </div>
      </li>
    </ul>
    <slot />
  </div>
</template>

<script setup>
import { ref, provide } from "vue";

const props = defineProps({
  tabTitles: {
    type: Array,
    required: true,
  },
});

const selectedTitle = ref(props.tabTitles[0].name);
provide("selectedTitle", selectedTitle);
</script>
