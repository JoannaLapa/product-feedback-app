<template>
  <button
    type="button"
    class="group flex h-8 min-h-7.5 w-17 flex-row-reverse place-content-center place-items-center justify-center gap-2.5 rounded-lg bg-neutral-300 p-2.5 text-xxs font-bold text-neutral-500 transition duration-300 hover:bg-secondary-300 focus:bg-primary-100 focus:text-neutral-100 sm:text-xs sm:text-xxs"
    :class="{
      'sm:h-14 sm:w-10 sm:flex-col sm:gap-2 sm:px-6 ':
        routeName != 'StatusFeedbackList',
    }"
    @click="$emit('action')"
  >
    <ArrowUp />
    {{ number }}
  </button>
</template>

<script setup>
import ArrowUp from "../icons/ArrowUp.vue";
import { useRoute } from "vue-router";
defineProps({
  number: {
    type: Number,
    required: true,
  },
});

defineEmits(["action"]);

const route = useRoute();
const routeName = route.name;
</script>
