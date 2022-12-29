<template>
  <li>
    <base-button>Test</base-button>
  </li>
</template>

<script>
import BaseButton from "../../BaseButton.vue";

export default {
  components: {
    BaseButton,
  },
  props: {
    categories: ["All", "UI", "UX", "Enhancement", "Feature", "Bug"],
  },
};
</script>
