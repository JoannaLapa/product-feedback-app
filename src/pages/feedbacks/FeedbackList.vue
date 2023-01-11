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
      <FeedbackItem
        v-for="feedback in feedbacks"
        :key="feedback.id"
        :feedback="feedback"
      />
    </Wrapper>
  </main>
</template>
<script setup>
import axios from "axios";
import { onMounted, ref } from "vue";
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
// <!-- attach NoFeedback and make like in the BaseButton props with Boolean and if true attach feedback item if false - v-else - attach NoFeedback component
defineProps({
  noFeedback: {
    type: Boolean,
    defaullt: false,
  },
});
const optionDetails = [
  "Most Upvotes",
  "Least Upvotes",
  "Most Comments",
  "Least Comments",
];

const feedbacks = ref({});

onMounted(async () => {
  const response = await axios.get("http://localhost:3000/productRequests");
  feedbacks.value = response.data;
  console.log(feedbacks);
});
</script>
