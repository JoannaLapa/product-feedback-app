<template>
  <li>
    <BaseBox variant="small">
      <ul class="flex flex-wrap gap-2.5">
        <SortByCategoryItem />
      </ul>
    </BaseBox>
  </li>
</template>

<script setup>
import BaseBox from "./BaseBox.vue";
import SortByCategoryItem from "./SortByCategoryItem.vue";
</script>
