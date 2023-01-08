<template>
  <main>
    <Wrapper>
      <GoBack />
      <BaseBox>
        <IconEditFeedback />
        <FeedbackCreateForm
          edit
          title="Editing"
          delete="Delete"
          submit-title="Save Changes"
          dynamic-title=""
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
import IconEditFeedback from "../../components/icons/IconEditFeedback.vue";
</script>
