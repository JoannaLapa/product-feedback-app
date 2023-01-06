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
import SortByCategory from "../ui/TheHeaderMenu/sortByCategory/SortByCategory.vue";
import RoadmapMenu from "../ui/TheHeaderMenu/roadmapMenu/RoadmapMenu.vue";
import Wrapper from "../ui/Wrapper.vue";
import IconOpenMenu from "../icons/IconOpenMenu.vue";
import IconCloseMenu from "../icons/IconCloseMenu.vue";

//task to solve - add special class for wrapper: to make max width 100% only in TheHeader mobile screen, for desktop max-width like in a desktop project
</script>

<style scoped lang="scss">
.hidden {
  display: none;
}
</style>
