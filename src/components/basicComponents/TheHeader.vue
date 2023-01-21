<template>
  <header>
    <BaseWrapper>
      <div class="fixed w-screen">
        <div
          class="flex items-center justify-between bg-header-sm bg-cover px-6 py-4 md:bg-header-md xl:bg-header-xl"
        >
          <div class="">
            <h1 class="text-sm font-bold text-neutral-100">Frontend Mentor</h1>
            <p class="text-xs text-neutral-100">Feedback Board</p>
          </div>
          <div>
            <IconOpenMenu />
            <IconCloseMenu />
          </div>
        </div>
        <div class="flex justify-end bg-neutral-200">
          <ul class="flex h-screen max-w-3/4 flex-col gap-11 p-6">
            <SortByCategory />
            <RoadmapMenu />
          </ul>
        </div>
      </div>
    </BaseWrapper>
  </header>
</template>

<script setup>
import SortByCategory from "./SortByCategory.vue";
import RoadmapMenu from "./RoadmapMenu.vue";
import BaseWrapper from "./BaseWrapper.vue";
import IconOpenMenu from "../icons/IconOpenMenu.vue";
import IconCloseMenu from "../icons/IconCloseMenu.vue";
</script>

<style scoped>
.hidden {
  display: none;
}
</style>
