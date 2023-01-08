<template>
  <main>
    <Wrapper>
      <GoBack />
      <BaseBox>
        <IconNewFeedback />
        <FeedbackCreateForm
          title="Create New Feedback"
          submit-title="Add Feedback"
        />
      </BaseBox>
    </Wrapper>
  </main>
</template>

<script setup>
import BaseBox from "../../components/basicComponents/BaseBox.vue";
import FeedbackCreateForm from "../../components/feedbacks/FeedbackCreateForm.vue";
import GoBack from "../../components/basicComponents/GoBack.vue";
import Wrapper from "../../components/basicComponents/Wrapper.vue";
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
