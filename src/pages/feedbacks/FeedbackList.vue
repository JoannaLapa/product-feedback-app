<template>
  <TheHeader />
  <main>
    <Wrapper>
      <BaseBar color="blue">
        <ShowSuggestions />
        <label>Sort by:</label>
        <BaseSelect name="choice">
          <BaseOption
            v-for="optionDetail in optionDetails"
            :key="optionDetail"
            :value="optionDetail"
            :text="optionDetail"
          />
        </BaseSelect>
        <BaseButton link to="/add">+ Add Feedback</BaseButton>
      </BaseBar>
      <NoFeedback v-if="noFeedback" />
      <FeedbackItem v-if="!noFeedback" />
    </Wrapper>
  </main>
</template>
<script setup>
import TheHeader from "../../components/basicComponents/TheHeader.vue";
import BaseButton from "../../components/basicComponents/BaseButton.vue";
import BaseBar from "../../components/basicComponents/BaseBar.vue";
import BaseOption from "../../components/basicComponents/BaseOption.vue";
import BaseSelect from "../../components/basicComponents/BaseSelect.vue";
import ShowSuggestions from "../../components/basicComponents/ShowSuggestions.vue";
import FeedbackItem from "../../components/feedbacks/FeedbackItem.vue";
import NoFeedback from "../../components/feedbacks/NoFeedback.vue";
import Wrapper from "../../components/basicComponents/Wrapper.vue";
// set the v-if - if there is no feedback add NoFeedback component v-else if there are feedbacks set FeedbackItem component with v-for
const optionDetails = [
  "Most Upvotes",
  "Least Upvotes",
  "Most Comments",
  "Least Comments",
];
</script>
