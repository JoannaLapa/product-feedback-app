<!-- future todo: margin bottom to separate wrapper from bottom edge on mobile 
when clicking on cancel router push to FeedbackList -->
<template>
  <main class="flex justify-center">
    <BaseWrapper variant="secondary" class="sm:mt-14">
      <GoBack />
      <BaseBox>
        <IconNewFeedback />
        <FeedbackCreateForm title="Create New Feedback" variant="add" />
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
