<!-- Future todo 
  1) set focus() on BaseButton with textContent "All" when the page is loaded (idea onMounted, nextTick()) -->
<template>
  <li v-for="{ id, name } in categories" :key="id">
    <BaseButton
      tag="button"
      variant="neutral"
      :text="name"
      :value="name"
      type="button"
      :autofocus="activeFilter === name"
      @action="filterData({ id: id, name: name.toLowerCase() })"
    />
  </li>
</template>

<script setup>
import BaseButton from "./BaseButton.vue";
import { computed, ref } from "vue";
import { useFeedbacksStore } from "@/stores/feedbacks.js";
import { useUserStore } from "@/stores/user.js";

const categories = computed(() => feedbacksStore.categories);

const usersStore = useUserStore();
const feedbacksStore = useFeedbacksStore();

const activeFilter = ref("All");

const filterData = (name) => {
  activeFilter.value = name;
  usersStore.addSelectedCategory(activeFilter.value);
  return feedbacksStore.filteredFeedbacksList;
};
</script>
