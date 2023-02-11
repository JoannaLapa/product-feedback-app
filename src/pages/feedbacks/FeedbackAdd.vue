<template>
  <main>
    <BaseWrapper variant="secondary">
      <GoBack />
      <BaseBox>
        <IconNewFeedback />
        <FeedbackCreateForm title="Create New Feedback" />
      </BaseBox>
    </BaseWrapper>
  </main>
</template>

<script setup>
import BaseBox from "../../components/basicComponents/BaseBox.vue";
import FeedbackCreateForm from "../../components/feedbacks/FeedbackCreateForm.vue";
import GoBack from "../../components/basicComponents/GoBack.vue";
import BaseWrapper from "../../components/basicComponents/BaseWrapper.vue";
import IconNewFeedback from "../../components/icons/IconNewFeedback.vue";
</script>
