<template>
  <section>
    <base-box>
      <h2><span>{{}}</span>Comments</h2>
      <!-- if there is only one comments we should write in singular form -->
      <div>
        <ul>
          <comment-item>
            <post-reply></post-reply>
          </comment-item>
          <!-- add inside comment-item v-if if there is a reply -->
          <!-- add post-replay when the user clicks on reply -->
        </ul>
      </div>
    </base-box>
  </section>
</template>

<script>
import CommentItem from "./CommentItem.vue";
import PostReply from "./PostReply.vue";

export default {
  components: {
    CommentItem,
    PostReply,
  },
};
</script>
