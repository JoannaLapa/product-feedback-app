<template>
  <li>
    <BaseBox variant="small">
      <div class="mb-6 flex items-center justify-between pt-5">
        <h2 class="text-lg font-bold text-neutral-500">Roadmap</h2>
        <router-link
          class="text-xxs font-semibold text-primary-100 underline transition duration-300 hover:text-secondary-500"
          to="/roadmap"
        >
          View
        </router-link>
      </div>
      <ul class="flex flex-col gap-2">
        <RoadmapItem
          v-for="[statusName, statusNumber] in countedStatusMap"
          :key="statusName"
          :status-name="statusName"
          :status-number="statusNumber"
          :variant="statusName.toLowerCase()"
        />
      </ul>
    </BaseBox>
  </li>
</template>

<script setup>
import { computed } from "vue";
import { useFeedbacksStore } from "../../stores/feedbacks";
import BaseBox from "./BaseBox.vue";
import RoadmapItem from "./RoadmapItem.vue";

const feedbacksStore = useFeedbacksStore();
const countedStatusMap = computed(() => feedbacksStore.countedStatusMap);
</script>
