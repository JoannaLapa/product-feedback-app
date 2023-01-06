<template>
  <main>
    <wrapper>
      <blue-bar>
        <go-back></go-back>
        <h2>Roadmap</h2>
        <base-button link to="/add">+ Add Feedback</base-button>
      </blue-bar>
    </wrapper>
    <wrapper>
      <ul>
        <li>
          <!-- list of items dependly on status name -->
          <h3></h3>
          <!-- status name here, use v-for to attach the list, h3 name and description below dependly on the status name -->
          <p>{{ description }}</p>
          <ul>
            <li>
              <feedback-item></feedback-item>
            </li>
          </ul>
        </li>
      </ul>
    </wrapper>
  </main>
</template>

<script setup>
import Wrapper from "../../components/ui/Wrapper.vue";
import BlueBar from "../../components/ui/BlueBar.vue";
import GoBack from "../../components/ui/GoBack.vue";
import BaseButton from "../../components/ui/BaseButton.vue";
import FeedbackItem from "../../components/feedbacks/FeedbackItem.vue";
</script>
