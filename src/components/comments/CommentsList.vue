<template>
  <section>
    <BaseBox>
      <h2>
        <span>{{ number }}</span>
        {{ number === 1 ? "Comment" : "Comments" }}
      </h2>
      <!-- if there is only one comments we should write in singular form -->
      <!-- <div>
        <ul>
          <CommentItem>
            <PostReply />
          </CommentItem>
         add inside comment-item v-if if there is a reply -->
      <!-- add post-replay when the user clicks on reply -->
      <!--  </ul>
      </div> -->
    </BaseBox>
  </section>
</template>

<script setup>
// import CommentItem from "./CommentItem.vue";
// import PostReply from "./PostReply.vue";
import BaseBox from "../basicComponents/BaseBox.vue";

defineProps({
  number: {
    type: Number,
    required: true,
  },
});
</script>
