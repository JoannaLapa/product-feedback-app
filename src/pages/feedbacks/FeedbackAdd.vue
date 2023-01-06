<template>
  <main>
    <wrapper>
      <go-back />
      <base-box>
       <IconNewFeedback />
        <feedback-create-form
          title="Create New Feedback"
          submitTitle="Add Feedback"
        ></feedback-create-form>
      </base-box>
    </wrapper>
  </main>
</template>

<script setup>
import BaseBox from "../../components/ui/BaseBox.vue";
import FeedbackCreateForm from "../../components/feedbacks/FeedbackCreateForm.vue";
import GoBack from "../../components/ui/GoBack.vue";
import Wrapper from "../../components/ui/Wrapper.vue";
import IconNewFeedback from "../../components/icons/IconNewFeedback.vue";
// export default {
//   components: {
//     BaseBox,
//     FeedbackCreateForm,
//     GoBack,
//     Wrapper,
//   },
// };
</script>
