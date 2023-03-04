<template>
  <BaseBox variant="primary">
    <form class="flex flex-col gap-6">
      <label for="comment" class="text-lg font-bold text-neutral-500"
        >Add comment:</label
      >
      <div class="flex flex-col gap-4">
        <textarea
          id="comment"
          name="comment"
          maxlength="250"
          placeholder="Type your comment here"
          aria-describedby="characters-left"
          class="cursor-pointer resize-none rounded-md bg-neutral-200 p-4 text-xxs text-neutral-500 placeholder:text-xxs placeholder:text-neutral-1000 sm:text-xs"
        />
        <div class="flex w-full justify-between">
          <p id="characters-left" class="text-xxs text-neutral-400">
            {{ number }} characters left
          </p>
          <BaseButton
            tag="button"
            type="button"
            variant="primary-narrow"
            text="Post comment"
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

defineProps({
  number: {
    type: Number,
    default: 250,
  },
});
</script>
