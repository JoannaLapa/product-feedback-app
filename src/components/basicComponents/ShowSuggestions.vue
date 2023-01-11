<template>
  <div>
    <IconSuggestions />
    <p v-if="Object.keys(feedbacks).length !== 1">
      <span>{{ Object.keys(feedbacks).length }}</span>
      Suggestions
    </p>
    <p v-else>
      <span>{{ Object.keys(feedbacks).length }}</span> Suggestion
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
});
</script>
