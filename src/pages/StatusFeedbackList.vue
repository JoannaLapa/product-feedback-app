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
            <h2>{{ status.name }} ({{ status.number }})</h2>

            <p>{{ status.description }}</p>
            <ul
              class="flex flex-col gap-4 px-6 pt-8 pb-14 sm:px-0 sm:pt-6 lg:gap-5"
            >
              <li
                v-for="feedback in feedbacks.filter(
                  (item) => item.status === status.name.toLowerCase()
                )"
                :key="feedback.status === status.name"
              >
                <FeedbackItem
                  :feedback="feedback"
                  :number="feedbacks.indexOf(feedback)"
                >
                  <template #roadMap>
                    <RoadmapItem
                      :status-name="status.name"
                      :variant="status.name.toLowerCase()"
                    />
                  </template>

                  <template #heading>
                    <h3
                      class="transition-300 text-xxs font-bold text-neutral-500 transition group-hover:text-primary-100 sm:text-lg"
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
const feedbacks = computed(() => feedbacksStore.feedbacks);
console.log(countedStatusMap);
</script>
