<template>
  <header>
    <BaseWrapper>
      <div class="fixed flex w-screen flex-col">
        <div
          class="flex items-center justify-between bg-header-sm bg-cover px-6 py-4 md:bg-header-md xl:bg-header-xl"
        >
          <div>
            <h1 class="text-sm font-bold text-neutral-100">Frontend Mentor</h1>
            <p class="text-xs text-neutral-100">Feedback Board</p>
          </div>
          <button class="cursor-pointer" @click="toggleMenu">
            <IconOpenMenu v-if="isOpened" />
            <IconCloseMenu v-else />
          </button>
        </div>
        <div
          class="relative right-0 flex w-3/4 self-end bg-neutral-200 before:absolute before:-left-2/4 before:h-screen before:w-[50%] before:bg-black before:opacity-50"
          :class="{ hidden: isOpened }"
        >
          <ul class="flex h-screen flex-col gap-5 p-6">
            <SortByCategory />
            <RoadmapMenu />
          </ul>
        </div>
      </div>
    </BaseWrapper>
  </header>
</template>

<script setup>
import { ref } from "vue";
import SortByCategory from "./SortByCategory.vue";
import RoadmapMenu from "./RoadmapMenu.vue";
import BaseWrapper from "./BaseWrapper.vue";
import IconOpenMenu from "../icons/IconOpenMenu.vue";
import IconCloseMenu from "../icons/IconCloseMenu.vue";

let isOpened = ref(true);

const toggleMenu = () => {
  isOpened.value = !isOpened.value;
  document.documentElement.classList.toggle("overflow-hidden");
};
</script>
