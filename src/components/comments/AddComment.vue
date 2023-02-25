<template>
  <BaseBox>
    <form>
      <label for="comment">Add comment:</label>
      <textarea
        id="comment"
        name="comment"
        maxlength="250"
        placeholder="Type your comment here"
        aria-describedby="characters-left"
      />
      <p id="characters-left">Dynamic number characters left</p>
      <BaseButton
        tag="button"
        type="button"
        variant="primary"
        text="Post comment"
      />
    </form>
  </BaseBox>
</template>

<!-- future styling textarea:valid/invalid for active states possible on textarea and form -->
<!-- check how to add dynamic number of characters left in the input -->
<script setup>
import BaseButton from "../basicComponents/BaseButton.vue";
import BaseBox from "../basicComponents/BaseBox.vue";
</script>
