<template>
  <div>
    <IconSuggestions />
    <p>
      <span>{{ feedbacksLength }}</span>
      {{ feedbacksLength !== 1 ? "Suggestions" : "Suggestion" }}
    </p>
  </div>
</template>

<script setup>
import IconSuggestions from "../icons/IconSuggestions.vue";

defineProps({
  feedbacks: {
    type: Object,
    default: null,
  },
  feedbacksLength: {
    type: Number,
    default: 1,
  },
});
</script>
