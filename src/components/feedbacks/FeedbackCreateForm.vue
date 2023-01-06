<template>
  <form>
    <fieldset>
      <legend>{{ title, dynamicTitle }}</legend>
      <label for="feedback-title">Feedback Title</label>
      <p id="feedback-title-instruction">Add a short, descriptive headline</p>
      <input
        type="text"
        id="feedback-title"
        aria-describedby="feedback-title-instruction"
      />
      <label for="category">Category</label>
      <p id="category-instruction">Choose a category for your feedback</p>
      <select id="category" aria-describedby="category-instruction">
        <option value="Feature">Feature</option>
        <option value="UI">UI</option>
        <option value="UX">UX</option>
        <option value="Enhancement">Enhancement</option>
        <option value="Bug">Bug</option>
      </select>
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
    <BaseButton>Cancel</BaseButton>
    <BaseButton>Add Feedback</BaseButton>
  </form>
</template>

<script setup>
import BaseButton from "../ui/BaseButton.vue";
  // props: ["title", "edit", "delete", "submitTitle", "dynamicTitle"],
  //   computed: {
  //     dynamicTitle() {
  //         this.dynamicTitle = 'attachTitleFromJson'
  //     }
  //   }
</script>
