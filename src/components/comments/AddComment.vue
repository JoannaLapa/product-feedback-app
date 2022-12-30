<template>
  <form>
    <fieldset>
      <legend>Add comment:</legend>
      <textarea
        id="comment"
        name="comment"
        maxlength="250"
        placeholder="Type your comment here"
      >
      </textarea>
      <label for="comment">Dynamic number characters left</label>
    </fieldset>
  </form>
</template>
<base-button>Post comment</base-button>
<!-- future styling textarea:valid/invalid for active states possible on textarea and form -->
<!-- check how to add dynamic number of characters left in the input -->
<script>
import BaseButton from "../ui/BaseButton.vue";

export default {
  components: {
    BaseButton,
  },
};
</script>
