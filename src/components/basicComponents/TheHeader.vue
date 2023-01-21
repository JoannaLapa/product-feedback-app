<template>
  <header>
    <BaseWrapper>
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
      <div class="bg-neutral-200">
        <ul class="flex flex-col gap-11">
          <SortByCategory />
          <RoadmapMenu />
        </ul>
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
