<template>
  <li>
    <article
      class="flex flex-col gap-4 sm:grid sm:grid-cols-comment-article-sm"
      :class="{
        'py-6 md:py-8': variant === 'primary',
      }"
    >
      <div class="flex justify-between sm:col-span-full">
        <div class="flex gap-4 sm:gap-8">
          <img
            :src="src"
            :alt="`photo of the ${name}`"
            class="h-10 w-10 rounded-full"
          />
          <div>
            <h3 class="text-xxs font-bold text-neutral-500 sm:text-xs">
              {{ name }}
            </h3>
            <p class="text-xxs text-neutral-400 sm:text-xs">{{ userName }}</p>
          </div>
        </div>
        <BaseButton
          tag="button"
          type="button"
          variant="pure"
          text="Reply"
          @action="showReplyWindow"
        />
      </div>
      <p class="text-xxs text-neutral-400 sm:col-start-2 sm:text-sm">
        <span v-if="reply" class="font-bold text-primary-200 sm:text-sm">{{
          replyTo
        }}</span
        >{{ content }}
      </p>
      <AddComment v-if="isShown" variant="flex-row" />
      <slot></slot>
    </article>
  </li>
</template>

<script setup>
import { provide, ref, computed, inject } from "vue";
import BaseButton from "../basicComponents/BaseButton.vue";
import AddComment from "./AddComment.vue";
import { useUserStore } from "../../stores/user.js";

const userStore = useUserStore();
userStore.fetchCurrentUser();
const currentUser = computed(() => {
  return userStore.currentUser;
});

const props = defineProps({
  userName: {
    type: String,
    default: "",
  },
  name: {
    type: String,
    default: "",
  },
  content: {
    type: String,
    default: "",
  },
  src: {
    type: String,
    default: "",
  },
  replyTo: {
    type: String,
    default: "",
  },
  reply: {
    type: Boolean,
    default: false,
  },
  variant: {
    type: String,
    required: true,
    validation: (variant) => ["primary", "secondary"].includes(variant),
  },
  index: {
    type: Number,
    default: null,
  },
});

const baseBoxVariant = "pure";
const primaryButtonText = "Post Reply";
const isShown = ref(false);
const showReplyWindow = () => {
  isShown.value = !isShown.value;
};
provide("baseBoxVariant", baseBoxVariant);
provide("primaryButtonText", primaryButtonText);
const commentsList = inject("commentsList");
const updateCommentsList = (content) => {
  const newReply = {
    content: content,
    replyingTo: props.userName,
    user: {
      image: currentUser.value.image,
      name: currentUser.value.name,
      username: currentUser.value.username,
    },
  };
  console.log(currentUser.value);
  document.getElementById("comment").value = "";
  showReplyWindow();
  // if (commentsList[props.index] === undefined) {
  //   const number = commentsList.findIndex(
  //     (item) => item.replies.content === props.content
  //   );
  //   console.log(`Numer indeksu ${number}`);
  //   if (Array.isArray(commentsList[number].replies[props.index])) {
  //     return commentsList[number].replies[props.index].push(newReply);
  //   } else {
  //     return (commentsList[number].replies = newReply);
  //   }
  // } else if (commentsList[props.index].replies) {
  //   return commentsList[props.index].replies.push(newReply);
  // } else {
  //   return (commentsList[props.index].replies = [newReply]);
  // }
  console.log(`NewReply ${newReply}`);
  console.log("Index");
  console.log(
    commentsList.findIndex((comment) => comment.content === props.content)
  );
};
provide("updateCommentsList", updateCommentsList);
</script>
