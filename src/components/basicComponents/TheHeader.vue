<template>
  <header>
    <div
      class="top-0 flex flex-col sm:mt-14 sm:mb-10 sm:grid sm:max-h-45 sm:grid-cols-3 sm:grid-rows-1 sm:gap-2.5 lg:my-0 lg:max-h-132 lg:grid-cols-sidebar-lg lg:grid-rows-sidebar-lg lg:gap-y-6 xl:grid-cols-sidebar-xl"
    >
      <div
        class="lg:rows-span-1 flex items-center justify-between bg-header-sm bg-cover px-6 py-4 sm:col-span-1 sm:min-h-full sm:items-end sm:rounded-lg sm:bg-header-md sm:bg-auto sm:py-6 lg:max-h-26 xl:bg-header-xl"
      >
        <div>
          <h1 class="text-sm font-bold text-neutral-100 sm:text-xl">
            Frontend Mentor
          </h1>
          <p class="text-xxs text-neutral-100 sm:text-sm">Feedback Board</p>
        </div>
        <button class="cursor-pointer sm:hidden" @click="toggleMenu">
          <IconOpenMenu v-show="isOpened" />
          <IconCloseMenu v-show="!isOpened" />
        </button>
      </div>
      <div
        class="absolute top-18 right-0 z-20 flex h-screen w-3/4 self-end bg-neutral-200 before:absolute before:-left-2/4 before:h-screen before:w-1/2 before:bg-black before:opacity-50 sm:static sm:col-start-2 sm:col-end-4 sm:flex sm:max-h-full sm:w-full sm:before:hidden lg:left-0 lg:col-span-1"
        :class="{ hidden: isOpened }"
      >
        <ul
          class="flex flex-col gap-5 p-6 sm:grid sm:grid-cols-2 sm:grid-rows-1 sm:gap-2.5 sm:p-0 lg:grid-cols-1 lg:grid-rows-sidebar-box-lg lg:gap-6"
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
