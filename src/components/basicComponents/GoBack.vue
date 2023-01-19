<template>
  <div class="go-back__container">
    <ArrowLeft />
    <router-link to="/feedbacks">Go Back</router-link>
  </div>
  <slot></slot>
</template>

<script setup>
import ArrowLeft from "../icons/ArrowLeft.vue";
</script>
