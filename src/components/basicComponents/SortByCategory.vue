<template>
  <li>
    <BaseBox>
      <ul>
        <SortByCategoryItem
          v-for="category in categories"
          :key="category"
          :text="category"
        />
      </ul>
    </BaseBox>
  </li>
</template>

<script setup>
import BaseBox from "./BaseBox.vue";
import SortByCategoryItem from "./SortByCategoryItem.vue";

const categories = ["All", "Feature", "UI", "UX", "Enhancement", "Bug"];
</script>
