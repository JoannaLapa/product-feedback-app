<template>
  <base-box>
    <div class="no-feedback__container">
      <IconNoFeedback></IconNoFeedback>
      <h2>There is no feedback yet.</h2>
      <p>
        Got a suggestion? Found a bug that needs to be squashed? We love hearing
        about new ideas to improve our app.
      </p>
    </div>
    <base-button>+ Add Feedback</base-button>
  </base-box>
</template>

<script setup>
import BaseBox from "../ui/BaseBox.vue";
import BaseButton from "../ui/BaseButton.vue";
import IconNoFeedback from "../icons/IconNoFeedback.vue";
</script>
