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
import { useRoute, useRouter } from "vue-router";
import { ref } from "vue";

const feedbacksStore = useFeedbacksStore();
feedbacksStore.fetchFeedbacks();
const route = useRoute();
const router = useRouter();
const description = ref("");
const feedbackTitle = ref("");

description.value = feedbacksStore.getFeedbackDescription(
  Number(route.params.id)
);
const updateFeedbackList = () => {
  feedbacksStore.updateFeedbackValue(
    Number(route.params.id),
    feedbackTitle.value,
    description.value
  );
  localStorage.setItem("feedbacks", JSON.stringify(feedbacksStore.feedbacks));
  router.push("/");
};
</script>
<!-- 
  feedbacksStore.feedbacks[Number(route.params.id)].description -->
