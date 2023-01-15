<template>
  <BaseBox>
    <article>
      <p v-if="roadmap">{{ feedback.status }}</p>
      <!-- status - activated in the Roadmap, hidden in the FeedbackList -->
      <div class="feedback__votes">
        <ArrowUp />
        <p>{{ feedback.upvotes }}</p>
      </div>
      <div class="feedback__content">
        <h2>{{ feedback.title }}</h2>
        <p>{{ feedback.description }}</p>
<<<<<<< HEAD
        <BaseButton like-a-button :text="feedback.category" />
=======
        <BaseButton :text="feedback.category" />
>>>>>>> aa0de85 (props added to BaseButton)
      </div>
      <div class="feedback__comments">
        <IconComments />
        <p v-if="feedback.comments">
          {{ feedback.comments.length }}
        </p>
        <p v-else>0</p>
        <!-- if there iss no comment  - the number should be in grey color -->
      </div>
    </article>
  </BaseBox>
</template>

<script setup>
import ArrowUp from "../icons/ArrowUp.vue";
import IconComments from "../icons/IconComments.vue";
import BaseBox from "../basicComponents/BaseBox.vue";
import BaseButton from "../basicComponents/BaseButton.vue";

defineProps({
  feedback: {
    type: Object,
    default: null,
  },
});
</script>
