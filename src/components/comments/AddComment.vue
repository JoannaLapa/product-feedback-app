<template>
  <base-box>
    <form>
      <label for="comment">Add comment:</label>
      <textarea
        id="comment"
        name="comment"
        maxlength="250"
        placeholder="Type your comment here"
        aria-describedby="characters-left"
      >
      </textarea>
      <p id="characters-left">Dynamic number characters left</p>
      <base-button>Post comment</base-button>
    </form>
  </base-box>
</template>

<!-- future styling textarea:valid/invalid for active states possible on textarea and form -->
<!-- check how to add dynamic number of characters left in the input -->
<script setup>
import BaseButton from "../ui/BaseButton.vue";
import BaseBox from "../ui/BaseBox.vue";
</script>
