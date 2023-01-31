<template>
  <li v-for="{ id, name } in uniqueCategories" :key="id">
    <BaseButton
      variant="neutral"
      :text="name"
      :value="name"
      @filter-data="filterData({ id: id, name: name.toLowerCase() })"
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
const filterData = (name) => {
  activeFilter.value = name;
  usersStore.ADD_SELECTED_CATEGORY(activeFilter.value);
};
</script>
