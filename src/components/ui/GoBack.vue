<template>
  <div class="go-back__container">
    <svg width="7" height="10" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M6 9L2 5l4-4"
        stroke="#4661E6"
        stroke-width="2"
        fill="none"
        fill-rule="evenodd"
      />
    </svg>
    <router-link to>Go Back</router-link>
  </div>
  <slot></slot>
</template>

<script>
export default {
  props: {
    to: {
      type: String,
      reqired: false,
      default: "/feedbacks",
    },
  },
};
</script>
