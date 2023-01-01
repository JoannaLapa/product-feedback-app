<template>
    <slot></slot>
  <wrapper>
    <slot></slot>
  </wrapper>
</template>

<script>
import Wrapper from "../ui/Wrapper.vue";

export default {
  components: {
    Wrapper,
  },
};
</script>

<style lang="scss"></style>
