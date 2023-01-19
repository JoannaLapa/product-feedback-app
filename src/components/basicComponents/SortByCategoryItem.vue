<template>
  <li v-for="category in UNIQUE_CATEGORIES" :key="category">
    <BaseButton
      :text="category"
      :value="category"
      @filter-data="filterData(category)"
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
const UNIQUE_CATEGORIES = computed(() => feedbacksStore.UNIQUE_CATEGORIES);
const activeFilter = ref([]);
const filterData = (name) => {
  activeFilter.value = name;
  usersStore.ADD_SELECTED_CATEGORY(activeFilter.value);
};
</script>
