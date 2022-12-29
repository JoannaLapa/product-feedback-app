<template>
  <div>
    <go-back>
      <base-button>Edit Feedback</base-button>
    </go-back>
    <feedback-item></feedback-item>
  </div>
</template>

<script>
import BaseButton from "../../components/ui/BaseButton.vue";
import GoBack from "../../components/ui/GoBack.vue";
import FeedbackItem from "../../components/feedbacks/FeedBackItem.vue";

export default {
  components: {
    BaseButton,
    GoBack,
    FeedbackItem,
  },
};
</script>
