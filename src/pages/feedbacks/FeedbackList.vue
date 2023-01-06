<template>
  <the-header />
  <main>
    <wrapper>
      <blue-bar>
        <suggestions />
        <dropdown-menu />
        <base-button link to="add">+ Add Feedback</base-button>
      </blue-bar>
      <no-feedback v-if="noFeedback"></no-feedback>
      <feedback-item v-if="!noFeedback"></feedback-item>
    </wrapper>
  </main>
</template>
<script setup>
import TheHeader from "../../components/layout/TheHeader.vue";
import BaseButton from "../../components/ui/BaseButton.vue";
import BlueBar from "../../components/ui/BlueBar.vue";
import Suggestions from "../../components/ui/Suggestions.vue";
import DropdownMenu from "../../components/ui/DropdownMenu.vue";
import FeedbackItem from "../../components/feedbacks/FeedbackItem.vue";
import NoFeedback from "../../components/feedbacks/NoFeedback.vue";
import Wrapper from "../../components/ui/Wrapper.vue";
// set the v-if - if there is no feedback add NoFeedback component v-else if there are feedbacks set FeedbackItem component with v-for
  // props: ["noFeedback"],
</script>
