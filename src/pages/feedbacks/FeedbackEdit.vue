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
          submitTitle="Save Changes"
          dynamicTitle=""
        />
      </BaseBox>
    </Wrapper>
  </main>
</template>

<script setup>
import BaseBox from "../../components/ui/BaseBox.vue";
import FeedbackCreateForm from "../../components/feedbacks/FeedbackCreateForm.vue";
import GoBack from "../../components/ui/GoBack.vue";
import Wrapper from "../../components/ui/Wrapper.vue";
import IconEditFeedback from "../../components/icons/IconEditFeedback.vue";
</script>
