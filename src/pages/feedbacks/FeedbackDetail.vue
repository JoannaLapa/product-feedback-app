<template>
  <main>
    <BaseWrapper>
      <GoBack>
        <BaseButton link to="">Edit Feedback</BaseButton>
      </GoBack>
      <FeedbackItem />
      <CommentsList />
      <AddComment />
    </BaseWrapper>
  </main>
</template>

<script setup>
import BaseButton from "../../components/basicComponents/BaseButton.vue";
import GoBack from "../../components/basicComponents/GoBack.vue";
import FeedbackItem from "../../components/feedbacks/FeedBackItem.vue";
import CommentsList from "../../components/comments/CommentsList.vue";
import AddComment from "../../components/comments/AddComment.vue";
import BaseWrapper from "../../components/basicComponents/BaseWrapper.vue";
</script>
