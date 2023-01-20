<template>
  <header>
    <Wrapper>
      <div class="heading">
        <h1>Frontend Mentor</h1>
        <p>Feedback Board</p>
      </div>
      <div>
        <IconOpenMenu />
        <IconCloseMenu />
      </div>
      <ul>
        <SortByCategory />
        <RoadmapMenu />
      </ul>
    </Wrapper>
  </header>
</template>

<script setup>
import SortByCategory from "./SortByCategory.vue";
import RoadmapMenu from "./RoadmapMenu.vue";
import Wrapper from "./BaseWrapper.vue";
import IconOpenMenu from "../icons/IconOpenMenu.vue";
import IconCloseMenu from "../icons/IconCloseMenu.vue";
</script>

<style scoped>
.hidden {
  display: none;
}
</style>
