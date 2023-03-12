<template>
  <BaseBox :variant="baseBoxVariant">
    <form
      class="flex w-full flex-col gap-6"
      @submit.prevent="updateCommentsList"
    >
      <label
        v-if="postComment"
        for="comment"
        class="text-lg font-bold text-neutral-500"
        >Add comment:</label
      >
      <div
        class="flex flex-col gap-4"
        :class="{
          'sm:w-full sm:flex-row sm:justify-between': variant === 'flex-row',
        }"
      >
        <textarea
          id="comment"
          v-model.trim="newDescription"
          name="comment"
          maxlength="250"
          placeholder="Type your comment here"
          aria-describedby="characters-left"
          class="cursor-pointer resize-none rounded-md bg-neutral-200 p-4 text-xxs text-neutral-500 placeholder:text-xxs placeholder:text-neutral-1000 sm:text-xs"
          :class="{ 'sm:basis-9/12': variant === 'flex-row' }"
        />
        <div
          class="flex w-full"
          :class="{
            'justify-end sm:basis-3/12': variant === 'flex-row',
            'justify-between': variant === 'flex-col',
          }"
        >
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
            @action="
              updateCommentsList({
                id: newCommentId,
                content: newDescription,
                user: {
                  image: currentUser.image,
                  name: currentUser.name,
                  username: currentUser.username,
                },
              })
            "
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
import { inject, ref, computed } from "vue";
import { useUserStore } from "../../stores/user.js";

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
const userStore = useUserStore();
const newComment = ref({});
const commentsList = inject("commentsList");
const newCommentId = inject("newCommentId");
userStore.fetchCurrentUser();
const currentUser = computed(() => {
  return userStore.currentUser;
});
const updateCommentsList = (data) => {
  newComment.value = data;
  console.log(newComment.value);
  commentsList.push(newComment.value);
  console.log(commentsList.length);
  document.getElementById("comment").value = "";
};
</script>
