<template>
  <li>
    <BaseBox>
      <ul class="flex flex-wrap gap-2.5 pl-6 pt-6 pb-9 pr-4">
        <SortByCategoryItem />
      </ul>
    </BaseBox>
  </li>
</template>

<script setup>
import BaseBox from "./BaseBox.vue";
import SortByCategoryItem from "./SortByCategoryItem.vue";
</script>
