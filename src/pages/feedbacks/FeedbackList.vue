<template>
  <BaseWrapper>
    <TheHeader />
    <main class="lg:w-4/5 xl:max-w-3xl">
      <BaseBar variant="primary">
        <div class="items-center sm:flex sm:gap-10">
          <ShowSuggestions :feedbacks-length="Object.keys(feedbacks).length" />
          <BaseSelect
            label-title="Sort by:"
            ok
            :options="optionValues"
            :action="usersStore.addSelectedSortingCategory"
          />
        </div>
        <BaseButton
          tag="router-link"
          to="/add"
          text="+ Add Feedback"
          variant="primary-narrow"
          type=""
        />
      </BaseBar>
      <NoFeedback v-if="!sortedFeedbacksList" />
      <ul
        v-else
        class="flex flex-col gap-4 px-6 pt-8 pb-14 sm:px-0 sm:pt-6 lg:gap-5"
      >
        <FeedbackItem
          v-for="feedback in sortedFeedbacksList"
          :key="feedback.id"
          :feedback="feedback"
          :number="sortedFeedbacksList.indexOf(feedback)"
        />
      </ul>
    </main>
  </BaseWrapper>
</template>
<script setup>
import { computed, provide, onMounted } from "vue";
import { useFeedbacksStore } from "../../stores/feedbacks";
import { useUserStore } from "../../stores/user.js";
import TheHeader from "../../components/basicComponents/TheHeader.vue";
import BaseButton from "../../components/basicComponents/BaseButton.vue";
import BaseBar from "../../components/basicComponents/BaseBar.vue";
import BaseSelect from "../../components/basicComponents/BaseSelect.vue";
import ShowSuggestions from "../../components/basicComponents/ShowSuggestions.vue";
import FeedbackItem from "../../components/feedbacks/FeedbackItem.vue";
import NoFeedback from "../../components/feedbacks/NoFeedback.vue";
import BaseWrapper from "../../components/basicComponents/BaseWrapper.vue";

//future todo:
// v-if here, because default is null. (this is Ola's suggestion how to do it) - I think it was a comment for resolving noFeedback case

const feedbacksStore = useFeedbacksStore();
const usersStore = useUserStore();
onMounted(feedbacksStore.fetchFeedbacks);

const feedbacks = computed(() => feedbacksStore.feedbacks);
const sortedFeedbacksList = computed(() => feedbacksStore.sortedFeedbacksList);
const optionValues = computed(() => feedbacksStore.options);
const variant = "primary";
const listBoxOptionsVariant = "narrow";
provide("variant", variant);
provide("listBoxOptionsVariant", listBoxOptionsVariant);
</script>
