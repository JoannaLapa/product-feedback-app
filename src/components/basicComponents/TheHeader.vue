<template>
  <header>
    <BaseWrapper>
      <div class="fixed flex w-screen flex-col">
        <div
          class="z-20 flex items-center justify-between bg-header-sm bg-cover px-6 py-4 md:bg-header-md xl:bg-header-xl"
        >
          <div>
            <h1 class="text-sm font-bold text-neutral-100">Frontend Mentor</h1>
            <p class="text-xs text-neutral-100">Feedback Board</p>
          </div>
          <div class="cursor-pointer">
            <IconOpenMenu />
            <IconCloseMenu />
          </div>
        </div>
        <div class="relative right-0 z-20 flex w-3/4 self-end bg-neutral-200">
          <ul class="flex h-screen flex-col gap-11 p-6">
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
