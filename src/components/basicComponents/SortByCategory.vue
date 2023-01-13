<template>
  <li>
    <BaseBox>
      <ul>
        <SortByCategoryItem
          v-for="category in UNIQUE_CATEGORIES"
          :key="category"
          :text="category"
        />
      </ul>
    </BaseBox>
  </li>
</template>

<script setup>
import { computed } from "vue";
import BaseBox from "./BaseBox.vue";
import SortByCategoryItem from "./SortByCategoryItem.vue";
import { useFeedbacksStore } from "@/stores/feedbacks.js";

const feedbacksStore = useFeedbacksStore();
const UNIQUE_CATEGORIES = computed(() => feedbacksStore.UNIQUE_CATEGORIES);
</script>
<!-- const jobsStore = useJobsStore();
const UNIQUE_ORGANIZATIONS = computed(() => jobsStore.UNIQUE_ORGANIZATIONS); -->
