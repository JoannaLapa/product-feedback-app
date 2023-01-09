<template>
  <BaseBox>
    <article>
      <p>{{}}</p>
      <!-- status - activated in the Roadmap, hidden in the FeedbackList -->
      <div class="feedback__votes">
        <ArrowUp />
        <p>{{}}</p>
        <!-- upvotes -->
      </div>
      <div class="feedback__content">
        <h2>{{}}</h2>
        <!-- title -->
        <p>{{}}</p>
        <!-- content -->
        <BaseButton>{{}}</BaseButton>
        <!-- category -->
      </div>
      <div class="feedback__comments">
        <IconComments />
        <p>{{}}</p>
        <!-- comments.length move to script and create a correct prop or another feature - to check
    possible usage - v-if - if there iss no comment the number should be in grey color -->
        <!-- attach NoFeedback and make like in the BaseButton props with Boolean and if true attach feedback item if false - v-else - attach NoFeedback component
    To consider - where hould be attached NoFeedback and v-if - in FeedBackItem or in FeedbackList -->
      </div>
    </article>
  </BaseBox>
</template>

<script setup>
import ArrowUp from "../icons/ArrowUp.vue";
import IconComments from "../icons/IconComments.vue";
import BaseBox from "../basicComponents/BaseBox.vue";
import BaseButton from "../basicComponents/BaseButton.vue";
</script>
