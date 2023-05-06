<!-- todo: BaseBox should have :is tag and here BaseBox should be li -->
<template>
  <BaseBox variant="primary">
    <slot name="roadMap" />
    <article
      class="group grid cursor-pointer grid-cols-2 grid-rows-feedback-article gap-4 sm:grid-cols-feedback-article-sm sm:grid-rows-1 sm:gap-x-10"
    >
      <BaseButton
        tag="button"
        variant="small"
        :number="feedback.upvotes"
        type="button"
        class="group relative col-span-1 row-start-2 flex w-fit flex-row-reverse place-content-center sm:row-span-full sm:flex-col-reverse"
        @action="addUpvotedFeedback(feedback)"
      >
        <ArrowUp
          class="transition-300 stroke-primary-100 transition group-focus:stroke-neutral-100"
        />
      </BaseButton>

      <router-link
        class="col-span-full row-span-1 sm:col-span-2 sm:row-span-full"
        :to="linkTo"
      >
        <div class="flex flex-col gap-2 sm:gap-3">
          <div class="flex flex-col gap-2 sm:gap-1">
            <slot name="heading" />

            <p class="text-xxs text-neutral-400 sm:text-base">
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
        class="col-start-2 flex items-center gap-2 justify-self-end text-xxs font-bold sm:col-span-3 sm:row-span-full sm:self-center sm:text-base"
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
import { ref, computed, inject } from "vue";
import { useString } from "../../use/useString";
import ArrowUp from "../icons/ArrowUp.vue";
import IconComments from "../icons/IconComments.vue";
import BaseBox from "../basicComponents/BaseBox.vue";
import BaseButton from "../basicComponents/BaseButton.vue";
import { useUserStore } from "@/stores/user.js";
import { useFeedbacksStore } from "@/stores/feedbacks.js";

const props = defineProps({
  // Ola's suggestion - If null then you should think about hiding this component
  //   feedback: {
  //     type: Object,
  //     required: true,
  //   },

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

const upvotedFeeedback = ref({});
const addUpvotedFeedback = (feedback) => {
  upvotedFeeedback.value = feedback;
  usersStore.addUpvotedFeedback(upvotedFeeedback.value);
  useFeedbackStore.increaseUpvotes();
};

const commentsNumber = computed(() =>
  useFeedbackStore.commentsNumber(feedback)
);

const feedback = inject("feedback");
</script>
