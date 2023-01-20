<template>
  <TheHeader />
  <main>
    <BaseWrapper>
      <BaseBar color="blue">
        <!-- ShowSuggestions should be hidden in mobile - v-if here, because
        default is null. (this is Ola's suggestion how to do it) -->
        <ShowSuggestions
          :feedbacks="feedbacks"
          :feedbacks-length="Object.keys(feedbacks).length"
        />
        <label>Sort by:</label>
        <BaseSelect name="choice">
          <BaseOption
            v-for="optionDetail in optionDetails"
            :key="optionDetail"
            :value="optionDetail"
            :text="optionDetail"
          />
        </BaseSelect>
        <BaseButton link to="/add" text="+ Add Feedback" />
      </BaseBar>
      <NoFeedback v-if="noFeedback" />
      <FeedbackItem
        v-for="feedback in FILTERED_FEEDBACKS"
        :key="feedback.id"
        :feedback="feedback"
      />
    </BaseWrapper>
  </main>
</template>
<script setup>
import { onMounted, computed } from "vue";
import { useFeedbacksStore } from "../../stores/feedbacks";
import TheHeader from "../../components/basicComponents/TheHeader.vue";
import BaseButton from "../../components/basicComponents/BaseButton.vue";
import BaseBar from "../../components/basicComponents/BaseBar.vue";
import BaseOption from "../../components/basicComponents/BaseOption.vue";
import BaseSelect from "../../components/basicComponents/BaseSelect.vue";
import ShowSuggestions from "../../components/basicComponents/ShowSuggestions.vue";
import FeedbackItem from "../../components/feedbacks/FeedbackItem.vue";
import NoFeedback from "../../components/feedbacks/NoFeedback.vue";
import BaseWrapper from "../../components/basicComponents/BaseWrapper.vue";
// set the v-if - if there is no feedback add NoFeedback component v-else if there are feedbacks set FeedbackItem component with v-for
// <!-- attach NoFeedback and make like in the BaseButton props with Boolean and if true attach feedback item if false - v-else - attach NoFeedback component
defineProps({
  noFeedback: {
    type: Boolean,
    defaullt: false,
  },
});
// Ola' s suggestion for below - You will need here pair of value / name
const optionDetails = [
  "Most Upvotes",
  "Least Upvotes",
  "Most Comments",
  "Least Comments",
];

const feedbacksStore = useFeedbacksStore();
const feedbacks = computed(() => feedbacksStore.feedbacks);
onMounted(feedbacksStore.FETCH_FEEDBACKS);
const FILTERED_FEEDBACKS = computed(() => feedbacksStore.FILTERED_FEEDBACKS);
</script>
