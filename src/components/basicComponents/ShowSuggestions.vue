<template>
  <div>
    <IconSuggestions />
    <p>
      <span>{{ feedbacksLength }}</span>
      <span> Suggestion</span>
      <span v-if="feedbacksLength !== 1"> Suggestions</span>
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
