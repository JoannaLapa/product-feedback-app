<template>
  <BaseBox>
    <li>
      <article>
        <p v-if="roadmap">{{ feedback.status }}</p>
        <!-- status - activated in the Roadmap, hidden in the FeedbackList -->
        <div class="feedback__votes">
          <ArrowUp />
          <p @click="count">
            {{ feedback.upvotes + countedNumber }}
          </p>
        </div>
        <router-link :to="feedbackPageLink">
          <div class="feedback__content">
            <h2>{{ feedback.title }}</h2>
            <p>{{ feedback.description }}</p>
            <BaseButton :text="feedback.category" />
          </div>
          <div class="feedback__comments">
            <IconComments />
            <p v-if="feedback.comments">
              {{ feedback.comments.length }}
            </p>
            <p v-else>0</p>
            <!-- if there iss no comment  - the number should be in grey color -->
          </div>
        </router-link>
      </article>
    </li>
  </BaseBox>
</template>

<script setup>
import { computed, ref } from "vue";
import ArrowUp from "../icons/ArrowUp.vue";
import IconComments from "../icons/IconComments.vue";
import BaseBox from "../basicComponents/BaseBox.vue";
import BaseButton from "../basicComponents/BaseButton.vue";
import { useUserStore } from "@/stores/user.js";

const usersStore = useUserStore();
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
const countedNumber = ref(0);
const count = () => {
  countedNumber.value++;
  usersStore.COUNT_UPVOTES(countedNumber.value);
  return countedNumber.value;
};
const feedbackPageLink = computed(() => `/${props.feedback.id}`);
</script>

<!-- //muszę przekazać COUNT_UPVOTES DO KONKRENTEGO FEEDBACKA -->
<!--  -->
