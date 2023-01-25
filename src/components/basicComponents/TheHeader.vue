<template>
  <header>
    <div
      class="top-0 flex flex-col max-sm:fixed max-sm:w-screen sm:mt-14 sm:mb-10 sm:grid sm:max-h-[11.125rem] sm:grid-cols-3 sm:grid-rows-1 sm:gap-2.5 lg:my-0 lg:max-h-[33.0625rem] lg:grid-cols-1 lg:grid-rows-[8.5625rem_23rem] lg:gap-6"
    >
      <div
        class="lg:rows-span-1 flex items-center justify-between bg-header-sm bg-cover px-6 py-4 sm:col-span-1 sm:min-h-full sm:items-end sm:rounded-lg sm:bg-header-md sm:bg-auto sm:py-6 lg:max-h-[6.5206rem] xl:bg-header-xl"
      >
        <div>
          <h1 class="text-sm font-bold text-neutral-100 sm:text-xl">
            Frontend Mentor
          </h1>
          <p class="text-xs text-neutral-100 sm:text-sm">Feedback Board</p>
        </div>
        <button class="cursor-pointer sm:hidden" @click="toggleMenu">
          <IconOpenMenu v-if="isOpened" />
          <IconCloseMenu v-else />
        </button>
      </div>
      <div
        class="relative right-0 flex self-end bg-neutral-200 max-sm:w-3/4 max-sm:before:absolute max-sm:before:-left-2/4 max-sm:before:h-screen max-sm:before:w-[50%] max-sm:before:bg-black max-sm:before:opacity-50 sm:col-start-2 sm:col-end-4 sm:flex sm:max-h-full lg:left-0 lg:col-span-1"
        :class="{ hidden: isOpened }"
      >
        <ul
          class="flex flex-col gap-5 max-sm:h-screen max-sm:p-6 sm:grid sm:grid-cols-2 sm:grid-rows-1 sm:gap-2.5 lg:grid-cols-1 lg:grid-rows-[10.375rem_11.125rem] lg:gap-6"
        >
          <SortByCategory />
          <RoadmapMenu />
        </ul>
      </div>
    </div>
  </header>
</template>

<script setup>
import { ref } from "vue";
import SortByCategory from "./SortByCategory.vue";
import RoadmapMenu from "./RoadmapMenu.vue";
// import BaseWrapper from "./BaseWrapper.vue";
import IconOpenMenu from "../icons/IconOpenMenu.vue";
import IconCloseMenu from "../icons/IconCloseMenu.vue";

let isOpened = ref(true);

const toggleMenu = () => {
  isOpened.value = !isOpened.value;
  document.documentElement.classList.toggle("overflow-hidden");
};
</script>
