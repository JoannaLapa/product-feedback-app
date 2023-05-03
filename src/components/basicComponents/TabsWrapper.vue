<template>
  <div>
    <ul>
      <li
        v-for="title in tabTitles"
        :key="title"
        @click="selectedTitle = title.name"
      >
        {{ title.name }} ({{ title.number }})
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
