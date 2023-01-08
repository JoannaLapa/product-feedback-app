<template>
  <div :class="color">
    <slot></slot>
  </div>
</template>

<script setup>
defineProps({
  color: {
    type: String,
    default: "blue",
  },
});
</script>

<style scoped lang="scss">
.blue {
  background-color: #373f68;
  // bug to fix - there should be a global variable, I need to check the configuration of scss, if vite accept a new way of files organisation in scss (@forward and @use) - for this moment my configuration doesn't work so I am going to finish the sceleton and I'll check this problem later.
}
.white {
  background-color: #ffffff;
}
</style>
