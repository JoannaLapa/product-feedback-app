<template>
  <li>
    <BaseBox>
      <ul>
        Roadmap
        <router-link to="/roadmap">View</router-link>
        <li>
          Planned
          <!-- <span>{{ statusName }}</span> -->
        </li>
        <li>
          In-Progress
          <!-- <span>{{ statusName }}</span> -->
        </li>
        <li>
          Live
          <!-- <span>{{ statusName }}</span> -->
        </li>
      </ul>
    </BaseBox>
  </li>
</template>

<script setup>
import BaseBox from "./BaseBox.vue";
//idea for future solution: check the index of separate status and make a method for calculating the number of them if "planned" i++ etc.

defineProps({
  feedbacks: {
    type: Object,
    default: null,
  },
});

//musimy wyciąnąć wszystkie wartości z kluczy status i następnie posortować - jeśli feedback.status.value === "live" dodaj do tablicy i na koncu zwróć długość tablicy
</script>
