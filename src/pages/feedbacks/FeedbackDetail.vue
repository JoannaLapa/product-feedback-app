<template>
  <main>
    <BaseWrapper>
      <GoBack>
        <BaseButton
          tag="router-link"
          to="/edit"
          text="Edit Feedback"
          type=""
          variant="secondary"
        />
      </GoBack>
      <FeedbackItem
        :feedback="feedback"
        :number="Number(route.params.id.slice(1))"
      />
      <CommentsList
        :number="feedback.comments ? feedback.comments.length : 0"
        :comments-list="commentsList"
      />
      <!--  <AddComment /> -->
    </BaseWrapper>
  </main>
</template>

<script setup>
import { computed, ref } from "vue";
import { useFeedbacksStore } from "../../stores/feedbacks";
import { useRoute } from "vue-router";
import BaseButton from "../../components/basicComponents/BaseButton.vue";
import GoBack from "../../components/basicComponents/GoBack.vue";
import FeedbackItem from "../../components/feedbacks/FeedbackItem.vue";
import CommentsList from "../../components/comments/CommentsList.vue";
// import AddComment from "../../components/comments/AddComment.vue";
import BaseWrapper from "../../components/basicComponents/BaseWrapper.vue";

const feedbacksStore = useFeedbacksStore();
const route = useRoute();
feedbacksStore.fetchFeedbacks();
const feedbacks = computed(() => feedbacksStore.sortedFeedbacksList);
const feedback = ref(feedbacks.value[Number(route.params.id.slice(1))]);
const commentsList = ref([...feedback.value.comments]);
</script>
