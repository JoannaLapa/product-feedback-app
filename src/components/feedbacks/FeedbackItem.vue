<template>
  <router-link :to="feedbackPageLink">
    <li>
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
            <div>
              <p>{{ feedback.category }}</p>
            </div>
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
    </li>
  </router-link>
</template>

<script setup>
import { computed } from "vue";
import ArrowUp from "../icons/ArrowUp.vue";
import IconComments from "../icons/IconComments.vue";
import BaseBox from "../basicComponents/BaseBox.vue";
// Ola's suggestion - If null then you should think about hiding this component
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
``
