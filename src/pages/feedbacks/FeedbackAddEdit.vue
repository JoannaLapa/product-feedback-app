<!-- future todo: margin bottom to separate wrapper from bottom edge on mobile 
when clicking on cancel router push to FeedbackList -->
<template>
  <main class="flex justify-center">
    <BaseWrapper variant="secondary" class="sm:mt-14">
      <GoBack variant="primary">
        <template #arrow>
          <ArrowLeft />
        </template>
      </GoBack>
      <BaseBox>
        <IconNewFeedback v-if="routeName === 'add'" />
        <IconEditFeedback v-if="routeName === 'edit'" />
        <FeedbackCreateForm />
      </BaseBox>
    </BaseWrapper>
  </main>
</template>

<script setup>
import ArrowLeft from "../../components/icons/ArrowLeft.vue";
import BaseBox from "../../components/basicComponents/BaseBox.vue";
import FeedbackCreateForm from "../../components/feedbacks/FeedbackCreateForm.vue";
import GoBack from "../../components/basicComponents/GoBack.vue";
import BaseWrapper from "../../components/basicComponents/BaseWrapper.vue";
import IconNewFeedback from "../../components/icons/IconNewFeedback.vue";
import IconEditFeedback from "../../components/icons/IconEditFeedback.vue";
import { useRoute } from "vue-router";

const route = useRoute();
const routeName = route.name;
</script>
