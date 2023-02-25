<template>
  <form>
    <textarea id="comment" maxlength="250" name="reply" />
    <BaseButton
      tag="button"
      type="button"
      variant="primary"
      text="Post Reply"
    />
  </form>
</template>

<script setup>
import BaseButton from "../basicComponents/BaseButton.vue";
</script>
