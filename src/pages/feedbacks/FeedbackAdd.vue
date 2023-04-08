<!-- future todo: margin bottom to separate wrapper from bottom edge on mobile 
when clicking on cancel router push to FeedbackList -->
<template>
  <main class="flex justify-center">
    <BaseWrapper variant="secondary" class="sm:mt-14">
      <GoBack />

      <BaseBox>
        <IconNewFeedback />

        <FeedbackCreateForm
          v-model:description="description"
          v-model:newFeedbackTitle="newFeedbackTitle"
          title="Create New Feedback"
          variant="add"
        >
          <template #AddEditButton>
            <BaseButton
              tag="button"
              variant="primary"
              text="Add Feedback"
              type="button"
              @action="
                updateFeedbackList({
                  id: feedbacksStore.feedbacks.length + 1,
                  title: newFeedbackTitle,
                  category: usersStore.assignedCategory.name,
                  upvotes: 0,
                  status: usersStore.assignedStatus.name,
                  description: description,
                })
              "
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
import IconNewFeedback from "../../components/icons/IconNewFeedback.vue";
import { useFeedbacksStore } from "../../stores/feedbacks";
import { useUserStore } from "../../stores/user";
import { ref, provide } from "vue";
import { useRouter } from "vue-router";

const description = ref("");
const newFeedbackTitle = ref("");

const router = useRouter();
const feedbacksStore = useFeedbacksStore();
const usersStore = useUserStore();

const newFeedback = ref("");
const updateFeedbackList = (data) => {
  if (description.value === "" || newFeedbackTitle.value === "") {
    if (description.value === "") {
      document
        .querySelector("#feedback-detail")
        .classList.add("border-2", "border-primary-300");
    }
    if (newFeedbackTitle.value === "") {
      document
        .querySelector("#feedback-title")
        .classList.add("border-2", "border-primary-300");
    }
    return;
  }

  newFeedback.value = data;
  usersStore.addNewFeedback(newFeedback.value);
  feedbacksStore.updateFeedbackList();
  localStorage.setItem("feedbacks", JSON.stringify(feedbacksStore.feedbacks));
  router.push("/");
};

const categoryName = feedbacksStore.categoryFeature.name;
provide("categoryName", categoryName);
</script>
