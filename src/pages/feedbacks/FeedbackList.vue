<template>
  <BaseWrapper>
    <TheHeader />
    <main class="lg:w-4/5 xl:max-w-3xl">
      <BaseBar variant="primary">
        <div class="items-center sm:flex sm:gap-10">
          <ShowSuggestions :feedbacks-length="Object.keys(feedbacks).length" />
          <BaseSelect label-title="Sort by:" ok />
        </div>
        <BaseButton link to="/add" text="+ Add Feedback" variant="primary" />
      </BaseBar>
      <NoFeedback v-if="noFeedback" />
      <ul class="flex flex-col gap-4 px-6 pt-8 pb-14 sm:px-0 sm:pt-6 lg:gap-5">
        <FeedbackItem
          v-for="feedback in SORTED_FEEDBACKS"
          :key="feedback.id"
          :feedback="feedback"
        />
      </ul>
    </main>
  </BaseWrapper>
</template>
<script setup>
import { onMounted, computed } from "vue";
import { useFeedbacksStore } from "../../stores/feedbacks";
import TheHeader from "../../components/basicComponents/TheHeader.vue";
import BaseButton from "../../components/basicComponents/BaseButton.vue";
import BaseBar from "../../components/basicComponents/BaseBar.vue";
import BaseSelect from "../../components/basicComponents/BaseSelect.vue";
import ShowSuggestions from "../../components/basicComponents/ShowSuggestions.vue";
import FeedbackItem from "../../components/feedbacks/FeedbackItem.vue";
import NoFeedback from "../../components/feedbacks/NoFeedback.vue";
import BaseWrapper from "../../components/basicComponents/BaseWrapper.vue";
// v-if here, because default is null. (this is Ola's suggestion how to do it) - I think it was a comment for resolving noFeedback case
// set the v-if - if there is no feedback add NoFeedback component v-else if there are feedbacks set FeedbackItem component with v-for
// <!-- attach NoFeedback and make like in the BaseButton props with Boolean and if true attach feedback item if false - v-else - attach NoFeedback component
defineProps({
  noFeedback: {
    type: Boolean,
    default: false,
  },
});

const feedbacksStore = useFeedbacksStore();
const feedbacks = computed(() => feedbacksStore.feedbacks);
onMounted(feedbacksStore.FETCH_FEEDBACKS);
const SORTED_FEEDBACKS = computed(() => feedbacksStore.SORTED_FEEDBACKS);
</script>
