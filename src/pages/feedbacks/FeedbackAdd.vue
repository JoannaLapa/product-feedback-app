<template>
  <go-back></go-back>
  <base-box>
    <svg width="56" height="56" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <radialGradient
          cx="103.9%"
          cy="-10.387%"
          fx="103.9%"
          fy="-10.387%"
          r="166.816%"
          id="a"
        >
          <stop stop-color="#E84D70" offset="0%" />
          <stop stop-color="#A337F6" offset="53.089%" />
          <stop stop-color="#28A7ED" offset="100%" />
        </radialGradient>
      </defs>
      <g fill="none" fill-rule="evenodd">
        <circle fill="url(#a)" cx="28" cy="28" r="28" />
        <path
          fill="#FFF"
          fill-rule="nonzero"
          d="M30.343 36v-5.834h5.686v-4.302h-5.686V20h-4.597v5.864H20v4.302h5.746V36z"
        />
      </g>
    </svg>
    <feedback-create-form
      title="Create New Feedback"
      submitTitle="Add Feedback"
    ></feedback-create-form>
  </base-box>
</template>

<script>
import BaseBox from "../../components/ui/BaseBox.vue";
import FeedbackCreateForm from "../../components/feedbacks/FeedbackCreateForm.vue";
import GoBack from "../../components/ui/GoBack.vue";

export default {
  components: {
    BaseBox,
    FeedbackCreateForm,
    GoBack,
  },
};
</script>
