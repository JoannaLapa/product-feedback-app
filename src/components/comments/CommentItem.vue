<template>
  <li>
    <article>
      <div>
        <slot></slot>
        <h3>{{ name }}</h3>
        <p>{{ userName }}</p>
        <BaseButton tag="button" type="button" variant="pure" text="Reply" />
      </div>
      <p>{{ content }}</p>
    </article>
  </li>
</template>

<script setup>
import BaseButton from "../basicComponents/BaseButton.vue";
defineProps({
  userName: {
    type: String,
    default: "",
  },
  name: {
    type: String,
    default: "",
  },
  content: {
    type: String,
    default: "",
  },
});
</script>
