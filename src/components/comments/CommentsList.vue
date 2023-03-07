<template>
  <section>
    <BaseBox>
      <h2>
        <span>{{ number }}</span>
        {{ number === 1 ? "Comment" : "Comments" }}
      </h2>
      <div>
        <ul>
          <CommentItem
            v-for="comment in commentsList"
            :key="comment.id"
            :name="comment.user.name"
            :user-name="comment.user.username"
            :content="comment.content"
          >
            <img
              :src="`src/${comment.user.image.slice(2)}`"
              alt="photo of the user"
            />
            <ul v-if="comment.replies">
              <CommentItem
                v-for="reply in comment.replies"
                :key="reply.content"
                :name="reply.user.name"
                :user-name="reply.user.username"
                :content="reply.content"
              >
                <img
                  :src="`src/${reply.user.image.slice(2)}`"
                  alt="photo of the user"
                />
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
  </section>
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
