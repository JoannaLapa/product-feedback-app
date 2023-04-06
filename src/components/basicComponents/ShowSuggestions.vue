<template>
  <div class="hidden gap-4 sm:flex">
    <IconSuggestions />

    <p class="text-lg font-bold text-neutral-100">
      <span>{{ feedbacksLength }}</span>

      {{ feedbacksLength !== 1 ? "Suggestions" : "Suggestion" }}
    </p>
  </div>
</template>

<script setup>
import IconSuggestions from "../icons/IconSuggestions.vue";

defineProps({
  feedbacksLength: {
    type: Number,
    default: 1,
  },
});
</script>
