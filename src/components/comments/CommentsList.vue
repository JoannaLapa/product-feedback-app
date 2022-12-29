<template>
  <section>
    <base-box>
      <h2>
        <span>{{}}</span>Comments
      </h2>
      <!-- if there is only one comments we should write in singular form -->
      <div>
        <ul>
          <comment-item></comment-item>
          <!-- add inside comment-item v-if if there is a reply -->
        </ul>
      </div>
    </base-box>
  </section>
</template>

<script>
import CommentItem from './CommentItem.vue';

export default {
  components: {
    CommentItem,
  }
}
</script>
