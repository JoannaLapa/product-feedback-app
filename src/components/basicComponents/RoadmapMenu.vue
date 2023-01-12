<template>
  <li>
    <BaseBox>
      <ul>
        Roadmap
        <router-link to="/roadmap">View</router-link>
        <RoadmapLi
          v-for="[statusName, statusNumber] in COUNTED_STATUS_MAP"
          :key="statusName"
          :status-name="statusName"
          :status-number="statusNumber"
        />
      </ul>
    </BaseBox>
  </li>
</template>

<script setup>
import { computed } from "vue";
import { useFeedbacksStore } from "../../stores/feedbacks";
import BaseBox from "./BaseBox.vue";
import RoadmapLi from "./RoadmapLi.vue";

const feedbacksStore = useFeedbacksStore();
const COUNTED_STATUS_MAP = computed(() => feedbacksStore.COUNTED_STATUS_MAP);
</script>
