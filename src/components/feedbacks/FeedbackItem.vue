<template>
  <li>
    <BaseBox>
      <article
        class="group grid cursor-pointer grid-cols-2 grid-rows-feedback-article gap-4 p-6 sm:grid-cols-feedback-article-sm sm:grid-rows-1 sm:gap-x-10 sm:px-8 sm:py-8 xl:py-7"
      >
        <!-- the commented paragraph should be added when the component is used in StatusFeedbackList page -->
        <!-- <p v-if="roadmap">{{ feedback.status }}</p> -->
        <!-- status - activated in the Roadmap, hidden in the FeedbackList -->
        <BaseButton
          variant="voted"
          :number="feedback.upvotes"
          class="group relative col-span-1 row-start-2 flex w-fit flex-row-reverse place-content-center sm:row-span-full sm:flex-col"
        >
          <ArrowUp
            class="transition-300 stroke-primary-100 transition group-focus:stroke-neutral-100"
          />
        </BaseButton>
        <router-link
          class="col-span-full row-span-1 sm:col-span-2 sm:row-span-full"
          :to="feedbackPageLink"
        >
          <div class="flex flex-col gap-2">
            <h2
              class="transition-300 text-xxs font-bold text-neutral-500 transition group-hover:text-primary-100 sm:text-lg"
            >
              {{ feedback.title }}
            </h2>
            <p class="text-xxs text-neutral-400 sm:text-base">
              {{ feedback.description }}
            </p>
            <div class="w-fit rounded-lg bg-neutral-300 sm:mt-1">
              <p class="py-1.5 px-4 text-xxs font-semibold text-primary-100">
                {{ firstLetterToUpper(feedback.category) }}
              </p>
            </div>
          </div>
        </router-link>
        <div
          class="col-start-2 flex items-center gap-2 justify-self-end text-xxs font-bold sm:col-span-3 sm:row-span-full sm:self-center sm:text-base"
        >
          <IconComments />
          <!-- if there iss no comment  - the number should be in grey color -->
          <!-- :class="{ 'opacity-50': the condition?? }" -->
          <p class="text-neutral-500 opacity-100">
            {{ feedback.comments ? feedback.comments.length : 0 }}
          </p>
        </div>
      </article>
    </BaseBox>
  </li>
</template>

<script setup>
import { computed } from "vue";
import ArrowUp from "../icons/ArrowUp.vue";
import IconComments from "../icons/IconComments.vue";
import BaseBox from "../basicComponents/BaseBox.vue";
import BaseButton from "../basicComponents/BaseButton.vue";

const props = defineProps({
  // Ola's suggestion - If null then you should think about hiding this component
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
const firstLetterToUpper = (name) =>
  name.charAt(0).toUpperCase() + name.slice(1);
</script>
``
