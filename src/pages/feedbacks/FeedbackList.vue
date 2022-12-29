<template>
  <the-header></the-header>
  <the-main>
  <blue-bar>
    <suggestions></suggestions>
    <dropdown-menu></dropdown-menu>
    <base-button>+ Add Feedback</base-button>
  </blue-bar>
</the-main>
</template>
<script>
import TheHeader from "../../components/layout/TheHeader.vue";
import TheMain from "../../components/layout/TheMain.vue";
import BaseButton from "../../components/ui/BaseButton.vue";
import BlueBar from "../../components/ui/BlueBar.vue";
import Suggestions from "../../components/ui/Suggestions.vue";
import DropdownMenu from "../../components/ui/DropdownMenu.vue";
// set the v-if - if there is no feedback add NoFeedback component v-else if there are feedbacks set FeedbackItem component with v-for 

export default {
  components: {
    TheHeader,
    TheMain,
    BaseButton,
    BlueBar,
    Suggestions,
    DropdownMenu,
  },
};
</script>
