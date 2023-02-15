<template>
  <form class="-mt-3 p-6 pt-0">
    <fieldset class="flex flex-col gap-6">
      <div>
        <legend class="text-lg font-bold text-neutral-500">{{ title }}</legend>
      </div>
      <div>
        <label for="feedback-title" class="text-xxs font-bold text-neutral-500"
          >Feedback Title</label
        >
        <p id="feedback-title-instruction" class="text-xxs text-neutral-400">
          Add a short, descriptive headline
        </p>
        <input
          id="feedback-title"
          type="text"
          aria-describedby="feedback-title-instruction"
          class="mt-4 h-12 w-full rounded-md bg-neutral-200"
        />
      </div>
      <div>
        <label for="category" class="text-xxs font-bold text-neutral-500"
          >Category</label
        >
        <p id="category-instruction" class="text-xxs text-neutral-400">
          Choose a category for your feedback
        </p>
        <BaseSelect id="category" aria-described-by="category - instruction" />
      </div>
      <div>
        <label for="feedback-detail" class="text-xxs font-bold text-neutral-500"
          >Feedback Detail</label
        >
        <p id="feedback-details-instruction" class="text-xxs text-neutral-400">
          Include any specific comments on what should be improved, added, etc.
        </p>
        <textarea
          id="feedback-detail"
          aria-describedby="feedback-details-instruction"
          name="feedback-detail"
          class="h-30 mt-4 w-full resize-none rounded-md bg-neutral-200"
        />
      </div>
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
