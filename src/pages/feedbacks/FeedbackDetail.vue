<template>
  <main class="flex justify-center">
    <BaseWrapper variant="tertiary">
      <BaseBar variant="neutral">
        <GoBack />
        <BaseButton
          tag="router-link"
          to="/edit"
          text="Edit Feedback"
          type=""
          variant="secondary"
        />
      </BaseBar>
      <FeedbackItem
        :feedback="feedback"
        :number="Number(route.params.id.slice(1))"
      />
      <CommentsList
        :number="feedback.comments ? feedback.comments.length : 0"
      />
      <AddComment variant="flex-col" />
    </BaseWrapper>
  </main>
</template>

<script setup>
import { computed, ref, provide } from "vue";
import { useFeedbacksStore } from "../../stores/feedbacks";
import { useRoute } from "vue-router";
import BaseButton from "../../components/basicComponents/BaseButton.vue";
import GoBack from "../../components/basicComponents/GoBack.vue";
import BaseBar from "../../components/basicComponents/BaseBar.vue";
import FeedbackItem from "../../components/feedbacks/FeedbackItem.vue";
import CommentsList from "../../components/comments/CommentsList.vue";
import AddComment from "../../components/comments/AddComment.vue";
import BaseWrapper from "../../components/basicComponents/BaseWrapper.vue";

const feedbacksStore = useFeedbacksStore();
const route = useRoute();
feedbacksStore.fetchFeedbacks();
const feedbacks = computed(() => feedbacksStore.sortedFeedbacksList);
const feedback = ref(feedbacks.value[Number(route.params.id.slice(1))]);
const commentsList = ref([...feedback.value.comments]);
const newCommentId = computed(() => {
  return commentsList.value.length + 1;
});
const baseBoxVariant = ref("primary");
const primaryButtonText = "Post Comment";
const providedCommentsList = commentsList.value;
provide("baseBoxVariant", baseBoxVariant);
provide("primaryButtonText", primaryButtonText);
provide("commentsList", providedCommentsList);
provide("newCommentId", newCommentId);
</script>
