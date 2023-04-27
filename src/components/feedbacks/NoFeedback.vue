<template>
  <div class="px-6 pt-8">
    <BaseBox>
      <div class="flex flex-col items-center justify-center gap-6 py-19">
        <IconNoFeedback />
        <div class="px-3">
          <h2 class="py-3 text-center text-lg font-bold">
            There is no feedback yet.
          </h2>

          <p class="text-center text-xxs font-normal text-neutral-400">
            Got a suggestion? Found a bug that needs to be squashed? We love
            hearing about new ideas to improve our app.
          </p>
        </div>
        <BaseButton
          tag="router-link"
          to="/add"
          text="+ Add Feedback"
          variant="primary-narrow"
          type=""
        />
      </div>
    </BaseBox>
  </div>
</template>

<script setup>
import BaseBox from "../basicComponents/BaseBox.vue";
import BaseButton from "../basicComponents/BaseButton.vue";
import IconNoFeedback from "../icons/IconNoFeedback.vue";
</script>
