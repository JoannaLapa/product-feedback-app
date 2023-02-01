<template>
  <main>
    <BaseWrapper>
      <BaseBar variant="primary">
        <GoBack></GoBack>
        <h2>Roadmap</h2>
        <BaseButton link to="/add" variant="primary" text="+ Add Feedback" />
      </BaseBar>
    </BaseWrapper>
    <BaseWrapper>
      <ul>
        <li>
          <!-- list of items dependly on status name -->
          <h3></h3>
          <!-- status name here, use v-for to attach the list, h3 name and description below dependly on the status name -->
          <p></p>
          <ul>
            <li>
              <FeedbackItem />
            </li>
          </ul>
        </li>
      </ul>
    </BaseWrapper>
  </main>
</template>

<script setup>
import BaseWrapper from "../../components/basicComponents/BaseWrapper.vue";
import BaseBar from "../../components/basicComponents/BaseBar.vue";
import GoBack from "../../components/basicComponents/GoBack.vue";
import BaseButton from "../../components/basicComponents/BaseButton.vue";
import FeedbackItem from "../../components/feedbacks/FeedbackItem.vue";
</script>
