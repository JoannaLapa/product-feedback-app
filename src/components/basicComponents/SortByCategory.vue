<template>
  <li>
    <BaseBox variant="small">
      <ul class="flex flex-wrap gap-y-3.5 gap-x-2 pt-6">
        <SortByCategoryItem />
      </ul>
    </BaseBox>
  </li>
</template>

<script setup>
import BaseBox from "./BaseBox.vue";
import SortByCategoryItem from "./SortByCategoryItem.vue";
</script>
