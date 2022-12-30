<template>
  <form>
    <textarea maxlength="250" name="reply" id="comment"></textarea>
    <base-button>Post Reply</base-button>
  </form>
</template>

<script>
import BaseButton from "../ui/BaseButton.vue";

export default {
  components: {
    BaseButton,
  },
};
</script>
