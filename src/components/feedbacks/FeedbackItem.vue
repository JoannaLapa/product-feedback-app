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
        <BaseButton like-a-button :text="feedback.category" />
      </div>
      <div class="feedback__comments">
        <IconComments />
        <p>
          {{ feedback.comments ? feedback.comments.length : 0 }}
        </p>
        <!-- if there iss no comment  - the number should be in grey color -->
      </div>
    </article>
  </BaseBox>
</template>

<script setup>
import { computed } from "vue";
import ArrowUp from "../icons/ArrowUp.vue";
import IconComments from "../icons/IconComments.vue";
import BaseBox from "../basicComponents/BaseBox.vue";
import BaseButton from "../basicComponents/BaseButton.vue";

const props = defineProps({
  feedback: {
    type: Object,
    default: null,
  },
  to: {
    type: String,
    required: false,
    default: "/feedbacks",
  },
});

const feedbackPageLink = computed(() => `/${props.feedback.id}`);
</script>
