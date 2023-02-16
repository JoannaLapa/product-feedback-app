<template>
  <form class="-mt-3 flex flex-col gap-10 p-6 pt-0 sm:-mt-12 sm:p-10.5">
    <fieldset class="flex flex-col gap-6">
      <div>
        <legend class="text-lg font-bold text-neutral-500 sm:text-2xl">
          {{ title }}
        </legend>
      </div>
      <div>
        <BaseLabel
          label-for="feedback-title"
          title="Feedback Title"
          id-title="feedback-title-instruction"
          description="Add a short, descriptive headline"
        />
        <input
          id="feedback-title"
          type="text"
          aria-describedby="feedback-title-instruction"
          class="mt-4 h-12 w-full rounded-md bg-neutral-200"
        />
      </div>
      <div>
        <BaseLabel
          label-for="category"
          title="Category"
          id-title="category-instruction"
          description="Choose a category for your feedback"
        />
        <BaseSelect id="category" aria-described-by="category - instruction" />
      </div>
      <div>
        <BaseLabel
          label-for="feedback-detail"
          title="Feedback Detail"
          id-title="feedback-details-instruction"
          description="Include any specific comments on what should be improved, added, etc."
        />
        <textarea
          id="feedback-detail"
          aria-describedby="feedback-details-instruction"
          name="feedback-detail"
          class="mt-4 h-30 w-full resize-none rounded-md bg-neutral-200"
        />
      </div>
    </fieldset>
    <div
      class="flex flex-col gap-4 sm:flex-row"
      :class="{ 'sm:justify-end': variant === 'add' }"
    >
      <div class="flex flex-col gap-4 sm:flex-row-reverse">
        <BaseButton variant="primary" text="Add Feedback" />
        <BaseButton variant="dark" text="Cancel" />
      </div>
      <BaseButton v-if="edit">Delete</BaseButton>
    </div>
  </form>
</template>

<script setup>
import BaseButton from "../basicComponents/BaseButton.vue";
import BaseLabel from "../basicComponents/BaseLabel.vue";
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
  variant: {
    type: String,
    default: "",
    validation: (variant) => ["edit", "add"].includes(variant),
  },
});
</script>
