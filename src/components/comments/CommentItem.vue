<template>
  <li>
    <article
      class="flex flex-col gap-4"
      :class="{
        'py-6': variant === 'primary',
      }"
    >
      <div class="flex justify-between">
        <div class="flex gap-4">
          <img
            :src="src"
            alt="photo of the user"
            class="h-10 w-10 rounded-full"
          />
          <div>
            <h3 class="text-xxs font-bold text-neutral-500">{{ name }}</h3>
            <p class="text-xxs text-neutral-400">{{ userName }}</p>
          </div>
        </div>
        <BaseButton tag="button" type="button" variant="pure" text="Reply" />
      </div>
      <p class="text-xxs text-neutral-400">
        <span v-if="reply" class="font-bold text-primary-200">{{
          replyTo
        }}</span
        >{{ content }}
      </p>
      <slot></slot>
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
  src: {
    type: String,
    default: "",
  },
  replyTo: {
    type: String,
    default: "",
  },
  reply: {
    type: Boolean,
    default: false,
  },
  variant: {
    type: String,
    required: true,
    validation: (variant) => ["primary", "secondary"].includes(variant),
  },
});
</script>
