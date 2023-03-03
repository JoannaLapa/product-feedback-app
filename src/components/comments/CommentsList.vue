<template>
  <!-- future todo- number should be equal to comments + replies not only the comments -->
  <BaseBox variant="secondary">
    <h2 class="text-lg font-bold text-neutral-500">
      <span>{{ number }}</span>
      {{ number === 1 ? "Comment" : "Comments" }}
    </h2>
    <div>
      <ul class="divide-neutral-700/15 divide-y">
        <CommentItem
          v-for="comment in commentsList"
          :key="comment.id"
          :name="comment.user.name"
          :user-name="comment.user.username"
          :content="comment.content"
          :src="`src/${comment.user.image.slice(2)}`"
          variant="primary"
        >
          <!-- future todo: set before with same tyles like divide from comment up, but on x and from the begginind of comment content to the middle of avatar of the last reply?  -->
          <ul
            v-if="comment.replies"
            class="relative flex flex-col gap-6 divide-neutral-400/10 pl-6 before:absolute before:left-0 before:h-4/6 before:border-l before:border-neutral-400 before:opacity-10 sm:col-span-full"
          >
            <CommentItem
              v-for="reply in comment.replies"
              :key="reply.content"
              :name="reply.user.name"
              :user-name="reply.user.username"
              :content="reply.content"
              :src="`src/${reply.user.image.slice(2)}`"
              reply
              :reply-to="`@${reply.replyingTo} `"
            >
              <!-- <PostReply /> -->
              <!-- add post-replay when the user clicks on reply -->
            </CommentItem>
          </ul>
          <!-- <PostReply /> -->
          <!-- add post-replay when the user clicks on reply -->
        </CommentItem>
      </ul>
    </div>
  </BaseBox>
</template>

<script setup>
import CommentItem from "./CommentItem.vue";
// import PostReply from "./PostReply.vue";
import BaseBox from "../basicComponents/BaseBox.vue";
defineProps({
  number: {
    type: Number,
    required: true,
  },
  commentsList: {
    type: Array,
    required: true,
  },
});
</script>
