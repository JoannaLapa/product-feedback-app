<template>
  <BaseBox :variant="baseBoxVariant">
    <form class="flex w-full flex-col gap-6">
      <label
        v-if="postComment"
        for="comment"
        class="text-lg font-bold text-neutral-500"
        >Add comment:</label
      >
      <div
        class="flex flex-col gap-4"
        :class="{
          'justify-between sm:w-full sm:flex-row': variant === 'flex-row',
        }"
      >
        <textarea
          id="comment"
          name="comment"
          maxlength="250"
          placeholder="Type your comment here"
          aria-describedby="characters-left"
          class="w-full cursor-pointer resize-none rounded-md bg-neutral-200 p-4 text-xxs text-neutral-500 placeholder:text-xxs placeholder:text-neutral-1000 sm:text-xs"
        />
        <div class="flex w-full justify-between">
          <p
            v-if="postComment"
            id="characters-left"
            class="text-xxs text-neutral-400"
          >
            {{ number }} characters left
          </p>
          <BaseButton
            tag="button"
            type="button"
            variant="primary-narrow"
            :text="primaryButtonText"
          />
        </div>
      </div>
    </form>
  </BaseBox>
</template>

<!-- future styling textarea:valid/invalid for active states possible on textarea and form -->
<!-- check how to add dynamic number of characters left in the input -->
<script setup>
import BaseButton from "../basicComponents/BaseButton.vue";
import BaseBox from "../basicComponents/BaseBox.vue";
import { inject } from "vue";

defineProps({
  number: {
    type: Number,
    default: 250,
  },
  postComment: {
    type: Boolean,
    default: false,
  },
  variant: {
    type: String,
    default: "",
    validation: (variant) => ["flex-row", "flex-col"].includes(variant),
  },
});
const baseBoxVariant = inject("baseBoxVariant");
const primaryButtonText = inject("primaryButtonText");
</script>
