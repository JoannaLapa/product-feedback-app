<!-- todo: BaseBox should have :is tag and here BaseBox should be li -->
<template>
  <BaseBox :variant="routeName === 'FeedbackList' ? 'primary' : 'tertiary'">
    <slot name="roadMap" />
    <article
      class="grid cursor-pointer grid-cols-2 grid-rows-feedback-article gap-4"
      :class="{
        'sm:grid-cols-feedback-article-sm sm:grid-rows-1 sm:gap-x-10':
          routeName === 'FeedbackList',
      }"
    >
      <BaseButton
        tag="button"
        variant="small"
        :number="feedback.upvotes"
        type="button"
        class="group relative col-span-1 row-start-2 flex flex-row-reverse place-content-center sm:row-span-full sm:flex-col-reverse"
        @action="addUpvotedFeedback(feedback)"
      >
        <ArrowUp
          class="transition-300 stroke-primary-100 transition group-focus:stroke-neutral-100"
        />
      </BaseButton>

      <router-link
        class="col-span-full row-span-1"
        :class="{
          ' sm:col-span-2 sm:row-span-full': routeName === 'FeedbackList',
          'md:row-start-3 md:row-end-5': routeName === 'StatusFeedbackList',
        }"
        :to="linkTo"
      >
        <div class="flex flex-col gap-2 sm:gap-3">
          <div class="flex min-h-17 flex-col gap-2 sm:gap-1">
            <slot name="heading" />

            <p
              class="text-xxs text-neutral-400"
              :class="{
                ' sm:text-base': routeName === 'FeedbackList',
              }"
            >
              {{ feedback.description }}
            </p>
          </div>

          <p
            class="w-fit rounded-lg bg-neutral-300 py-1.5 px-4 text-xxs font-semibold text-primary-100 sm:mt-1"
          >
            {{ firstLetterToUpper(feedback.category) }}
          </p>
        </div>
      </router-link>

      <div
        class="col-start-2 flex items-center gap-2 justify-self-end text-xxs font-bold sm:self-center"
        :class="{
          ' sm:col-span-3 sm:row-span-full sm:text-base':
            routeName === 'FeedbackList',
          'md:row-start-4': routeName === 'StatusFeedbackList',
        }"
      >
        <IconComments />

        <p
          class="text-neutral-500 opacity-100"
          :class="{ 'opacity-50': !feedback.comments }"
        >
          {{ commentsNumber }}
        </p>
      </div>
    </article>
  </BaseBox>
</template>

<script setup>
import { ref, computed } from "vue";
import { useRoute } from "vue-router";
import { useString } from "../../use/useString";
import ArrowUp from "../icons/ArrowUp.vue";
import IconComments from "../icons/IconComments.vue";
import BaseBox from "../basicComponents/BaseBox.vue";
import BaseButton from "../basicComponents/BaseButton.vue";
import { useUserStore } from "@/stores/user.js";
import { useFeedbacksStore } from "@/stores/feedbacks.js";

const props = defineProps({
  // Ola's suggestion - If null then you should think about hiding this component
  feedback: {
    type: Object,
    required: true,
  },

  to: {
    type: String,
    required: false,
    default: "/:1",
  },

  number: {
    type: Number,
    default: null,
  },
});

const usersStore = useUserStore();
const useFeedbackStore = useFeedbacksStore();

const linkTo = `/${props.number}`;

const { firstLetterToUpper } = useString();

const route = useRoute();
const routeName = route.name;

const upvotedFeeedback = ref({});
const addUpvotedFeedback = (feedback) => {
  upvotedFeeedback.value = feedback;
  usersStore.addUpvotedFeedback(upvotedFeeedback.value);
  useFeedbackStore.increaseUpvotes();
};

const commentsNumber = computed(() =>
  useFeedbackStore.commentsNumber(props.feedback)
);
</script>
