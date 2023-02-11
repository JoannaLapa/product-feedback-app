<template>
  <form>
    <fieldset>
      <legend>{{ title }}</legend>
      <label for="feedback-title">Feedback Title</label>
      <p id="feedback-title-instruction">Add a short, descriptive headline</p>
      <input
        id="feedback-title"
        type="text"
        aria-describedby="feedback-title-instruction"
      />
      <label for="category">Category</label>
      <p id="category-instruction">Choose a category for your feedback</p>
      <BaseSelect id="category" aria-described-by="category - instruction" />
      <label for="feedback-detail">Feedback Detail</label>
      <p id="feedback-details-instruction">
        Include any specific comments on what should be improved, added, etc.
      </p>
      <textarea
        id="feedback-detail"
        aria-describedby="feedback-details-instruction"
        name="feedback-detail"
      />
    </fieldset>
    <BaseButton v-if="edit">Delete</BaseButton>
    <BaseButton variant="dark" text="Cancel" />
    <BaseButton variant="primary" text="Add Feedback" />
  </form>
</template>

<script setup>
import BaseButton from "../basicComponents/BaseButton.vue";
import BaseSelect from "../basicComponents/BaseSelect.vue";

defineProps({
  title: {
    type: String,
    required: true,
  },
  edit: {
    type: Boolean,
    default: false,
  },
});
</script>
