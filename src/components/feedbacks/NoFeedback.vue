<template>
  <BaseBox>
    <div class="no-feedback__container">
      <IconNoFeedback />

      <h2>There is no feedback yet.</h2>

      <p>
        Got a suggestion? Found a bug that needs to be squashed? We love hearing
        about new ideas to improve our app.
      </p>
    </div>

    <BaseButton
      tag="router-link"
      to="/add"
      text="+ Add Feedback"
      variant="primary-narrow"
      type=""
    />
  </BaseBox>
</template>

<script setup>
import BaseBox from "../basicComponents/BaseBox.vue";
import BaseButton from "../basicComponents/BaseButton.vue";
import IconNoFeedback from "../icons/IconNoFeedback.vue";
</script>
