<template>
  <main>
    <BaseWrapper>
      <GoBack />
      <BaseBox>
        <IconEditFeedback />
        <FeedbackCreateForm
          edit
          title="Editing"
          delete="Delete"
          submit-title="Save Changes"
          dynamic-title=""
          variant="edit"
        />
      </BaseBox>
    </BaseWrapper>
  </main>
</template>

<script setup>
import BaseBox from "../../components/basicComponents/BaseBox.vue";
import FeedbackCreateForm from "../../components/feedbacks/FeedbackCreateForm.vue";
import GoBack from "../../components/basicComponents/GoBack.vue";
import BaseWrapper from "../../components/basicComponents/BaseWrapper.vue";
import IconEditFeedback from "../../components/icons/IconEditFeedback.vue";
</script>
