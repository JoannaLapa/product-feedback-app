<template>
  <the-main>
  <div>
    <go-back>
      <base-button>Edit Feedback</base-button>
    </go-back>
    <feedback-item></feedback-item>
    <comments-list></comments-list>
    <add-comment></add-comment>
  </div>
 </the-main>
</template>

<script>
import BaseButton from "../../components/ui/BaseButton.vue";
import GoBack from "../../components/ui/GoBack.vue";
import FeedbackItem from "../../components/feedbacks/FeedBackItem.vue";
import CommentsList from "../../components/comments/CommentsList.vue";
import AddComment from "../../components/comments/AddComment.vue";
import TheMain from "../../components/layout/TheMain.vue"

export default {
  components: {
    BaseButton,
    GoBack,
    FeedbackItem,
    CommentsList,
    AddComment,
    TheMain,
  },
};
</script>
