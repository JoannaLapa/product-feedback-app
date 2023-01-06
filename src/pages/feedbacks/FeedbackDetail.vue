<template>
  <main>
    <Wrapper>
      <GoBack>
        <BaseButton link to="">Edit Feedback</BaseButton>
      </GoBack>
      <FeedbackItem />
      <CommentsList />
      <AddComment />
    </Wrapper>
  </main>
</template>

<script setup>
import BaseButton from "../../components/ui/BaseButton.vue";
import GoBack from "../../components/ui/GoBack.vue";
import FeedbackItem from "../../components/feedbacks/FeedBackItem.vue";
import CommentsList from "../../components/comments/CommentsList.vue";
import AddComment from "../../components/comments/AddComment.vue";
import Wrapper from "../../components/ui/Wrapper.vue";
</script>
