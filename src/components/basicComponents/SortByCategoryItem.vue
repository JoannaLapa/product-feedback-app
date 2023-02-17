<template>
  <li v-for="{ id, name } in uniqueCategories" :key="id">
    <BaseButton
      :variant="whichVariant(name)"
      :text="name"
      :value="name"
      @action="filterData({ id: id, name: name.toLowerCase() })"
    />
  </li>
</template>

<script setup>
import BaseButton from "./BaseButton.vue";
import { computed, ref } from "vue";
import { useFeedbacksStore } from "@/stores/feedbacks.js";
import { useUserStore } from "@/stores/user.js";

const usersStore = useUserStore();
const feedbacksStore = useFeedbacksStore();
const uniqueCategories = computed(() => feedbacksStore.uniqueCategories);
const activeFilter = ref("All");

const whichVariant = (name) => {
  if (name === activeFilter.value) {
    return "secondary";
  } else {
    return "neutral";
  }
};
const filterData = (name) => {
  activeFilter.value = name;
  usersStore.addSelectedCategory(activeFilter.value);
  return feedbacksStore.filteredFeedbacksList;
};
</script>
