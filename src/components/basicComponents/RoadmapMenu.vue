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
        <li v-for="status in countedStatusMap" :key="status">
          <RoadmapItem
            :status-name="status.name"
            :variant="status.name.toLowerCase()"
          >
            <template #statusNumber>
              <p class="mr-0 self-end font-bold">{{ status.number }}</p>
            </template>
          </RoadmapItem>
        </li>
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
