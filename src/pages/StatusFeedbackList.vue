<template>
  <main>
    <BaseWrapper>
      <BaseBar variant="primary-high">
        <GoBack variant="white">
          <template #arrow>
            <ArrowLeft white />
          </template>

          <h1 class="text-lg font-bold text-neutral-100">Roadmap</h1>
        </GoBack>

        <BaseButton
          tag="router-link"
          to="/add"
          text="+ Add Feedback"
          variant="primary-narrow"
          type=""
        />
      </BaseBar>
    </BaseWrapper>

    <BaseWrapper>
      <TabsWrapper :tab-titles="countedStatusMap">
        <ul v-for="status in countedStatusMap" :key="status">
          <TabComponent :title="status.name">
            <div class="px-6 md:px-0">
              <h2 class="text-lg font-bold text-neutral-500">
                {{ status.name }} ({{ status.number }})
              </h2>

              <p class="text-xxs text-neutral-400">{{ status.description }}</p>
            </div>

            <ul
              class="grid grid-cols-1 gap-4 px-6 pt-7 pb-14 sm:px-0 sm:pt-6 lg:gap-5"
            >
              <li
                v-for="feedback in sortedFeedbacksList.filter(
                  (item) => item.status === status.name.toLowerCase()
                )"
                :key="feedback.status === status.name"
                class="relative before:absolute before:top-0 before:h-1.5 before:w-full before:rounded-t-lg"
                :class="{
                  'before:bg-secondary-100': status.name === 'Planned',
                  'before:bg-primary-200': status.name === 'In-Progress',
                  'before:bg-secondary-400': status.name === 'Live',
                }"
              >
                <FeedbackItem
                  :feedback="feedback"
                  :number="sortedFeedbacksList.indexOf(feedback)"
                >
                  <template #roadMap>
                    <RoadmapItem
                      :status-name="status.name"
                      :variant="status.name.toLowerCase()"
                      status-feedback-list
                    />
                  </template>

                  <template #heading>
                    <h3
                      class="transition-300 text-xxs font-bold text-neutral-500 transition group-hover:text-primary-100"
                    >
                      {{ feedback.title }}
                    </h3>
                  </template>
                </FeedbackItem>
              </li>
            </ul>
          </TabComponent>
        </ul>
      </TabsWrapper>
    </BaseWrapper>
  </main>
</template>

<script setup>
import ArrowLeft from "../components/icons/ArrowLeft.vue";
import BaseWrapper from "../components/basicComponents/BaseWrapper.vue";
import TabsWrapper from "../components/basicComponents/TabsWrapper.vue";
import TabComponent from "../components/basicComponents/TabComponent.vue";
import BaseBar from "../components/basicComponents/BaseBar.vue";
import GoBack from "../components/basicComponents/GoBack.vue";
import RoadmapItem from "../components/basicComponents/RoadmapItem.vue";
import BaseButton from "../components/basicComponents/BaseButton.vue";
import FeedbackItem from "../components/feedbacks/FeedbackItem.vue";
import { useFeedbacksStore } from "../stores/feedbacks";
import { computed } from "vue";

const feedbacksStore = useFeedbacksStore();
feedbacksStore.fetchFeedbacks();

const countedStatusMap = computed(() => feedbacksStore.countedStatusMap);
const sortedFeedbacksList = computed(() => feedbacksStore.sortedFeedbacksList);
console.log(countedStatusMap);
</script>
