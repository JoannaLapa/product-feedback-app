//future todo: // v-if here, because default is null. (this is Ola's suggestion
how to do it) - I think it was a comment for resolving noFeedback case
<template>
  <BaseWrapper variant="primary">
    <TheHeader />

    <main class="lg:w-4/5 xl:max-w-3xl">
      <BaseBar variant="primary">
        <div class="items-center sm:flex sm:gap-10">
          <ShowSuggestions
            :feedbacks-length="Object.keys(sortedFeedbacksList).length"
          />

          <BaseSelect
            label-title="Sort by:"
            ok
            :options="optionValues"
            :option-name="optionValues[0].name"
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

      <transition-group
        v-if="sortedFeedbacksList.length > 0"
        tag="ul"
        class="flex flex-col gap-4 px-6 pt-8 pb-14 sm:px-0 sm:pt-6 lg:gap-5"
        name="custom-classes"
        appear
        enter-from-class="opacity-0"
        leave-to-class="opacity-0"
        enter-active-class="transition duration-1000"
        leave-active-class="transition duration-1000"
      >
        <li v-for="feedback in sortedFeedbacksList" :key="feedback.id">
          <FeedbackItem
            :feedback="feedback"
            :number="sortedFeedbacksList.indexOf(feedback)"
            variant="primary"
          >
            <template #heading>
              <h2
                class="transition-300 text-xxs font-bold text-neutral-500 transition group-hover:text-primary-100 sm:text-lg"
              >
                {{ feedback.title }}
              </h2>
            </template>
          </FeedbackItem>
        </li>
      </transition-group>

      <NoFeedback v-else />
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

const feedbacksStore = useFeedbacksStore();
const usersStore = useUserStore();

onMounted(feedbacksStore.fetchFeedbacks);

const sortedFeedbacksList = computed(() => feedbacksStore.sortedFeedbacksList);

const optionValues = computed(() => feedbacksStore.options);

const variant = "primary";
provide("variant", variant);

const listBoxOptionsVariant = "narrow";
provide("listBoxOptionsVariant", listBoxOptionsVariant);
</script>
