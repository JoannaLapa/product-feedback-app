<template>
  <div class="max-sm:hidden">
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
  feedbacksLength: {
    type: Number,
    default: 1,
  },
});
</script>
