<template>
  <main>
    <BaseWrapper>
      <GoBack>
        <BaseButton link to="" text="Edit Feedback" />
      </GoBack>
      <!-- <FeedbackItem :feedback="feedbacks[$route.params.id - 1]" />
      <CommentsList />
      <AddComment /> -->
    </BaseWrapper>
  </main>
</template>

<script setup>
import { onMounted } from "vue";
import { useFeedbacksStore } from "../../stores/feedbacks";
import BaseButton from "../../components/basicComponents/BaseButton.vue";
import GoBack from "../../components/basicComponents/GoBack.vue";
// import FeedbackItem from "../../components/feedbacks/FeedBackItem.vue";
// import CommentsList from "../../components/comments/CommentsList.vue";
// import AddComment from "../../components/comments/AddComment.vue";
import BaseWrapper from "../../components/basicComponents/BaseWrapper.vue";

const feedbacksStore = useFeedbacksStore();
// const feedbacks = computed(() => feedbacksStore.feedbacks);
onMounted(feedbacksStore.FETCH_FEEDBACKS);
</script>
