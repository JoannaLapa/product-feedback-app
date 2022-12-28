<template>
  <li>
    <base-button>
      <slot></slot>
    </base-button>
  </li>
</template>

<script>
import BaseButton from "./BaseButton.vue";

export default {
  components: {
    BaseButton,
  },
  props: {
    categories: ["All", "UI", "UX", "Enhancement", "Feature", "Bug"],
  },
};
</script>
