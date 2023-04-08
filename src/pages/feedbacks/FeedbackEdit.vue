<template>
  <main class="flex justify-center">
    <BaseWrapper variant="secondary" class="sm:mt-14">
      <GoBack />

      <BaseBox>
        <IconEditFeedback />

        <FeedbackCreateForm
          ref="addEditRef"
          v-model:description="description"
          v-model:newFeedbackTitle="feedbackTitle"
          edit
          title="Editing"
          variant="edit"
        >
          <template #AddEditButton>
            <BaseButton
              tag="button"
              variant="primary"
              text="Save Changes"
              type="button"
              @action="updateFeedbackList"
            />
          </template>

          <template #DeleteButton>
            <BaseButton
              text="Delete"
              type="button"
              variant="danger"
              @action="deleteFeedback"
            />
          </template>
        </FeedbackCreateForm>
      </BaseBox>
    </BaseWrapper>
  </main>
</template>

<script setup>
import BaseBox from "../../components/basicComponents/BaseBox.vue";
import BaseButton from "../../components/basicComponents/BaseButton.vue";
import FeedbackCreateForm from "../../components/feedbacks/FeedbackCreateForm.vue";
import GoBack from "../../components/basicComponents/GoBack.vue";
import BaseWrapper from "../../components/basicComponents/BaseWrapper.vue";
import IconEditFeedback from "../../components/icons/IconEditFeedback.vue";
import { useFeedbacksStore } from "../../stores/feedbacks";
import { useString } from "../../use/useString";
import { useRoute, useRouter } from "vue-router";
import { ref, computed, provide } from "vue";

const route = useRoute();
const router = useRouter();

const feedbacksStore = useFeedbacksStore();
feedbacksStore.fetchFeedbacks();
const { firstLetterToUpper } = useString();

const sortedFeedbacks = computed(() => feedbacksStore.sortedFeedbacksList);

const index = Number(route.params.id);

const description = ref("");
description.value = sortedFeedbacks.value[index].description;

const feedbackTitle = ref("");
feedbackTitle.value = sortedFeedbacks.value[index].title;

const feedbackID = sortedFeedbacks.value[index].id;
console.log(feedbackID);

const updateFeedbackList = () => {
  feedbacksStore.updateFeedbackValue(
    feedbackID,
    feedbackTitle.value,
    description.value
  );
  router.push("/");
};

const deleteFeedback = () => {
  feedbacksStore.deleteFeedback(feedbackID);
  router.push("/");
};

const statusName = ref();
statusName.value = sortedFeedbacks.value[index].status;

const categoryName = ref();
categoryName.value = sortedFeedbacks.value[index].category;

provide("statusName", firstLetterToUpper(statusName.value));
provide("categoryName", firstLetterToUpper(categoryName.value));
</script>
