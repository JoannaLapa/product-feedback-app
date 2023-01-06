<template>
  <li>
    <BaseBox>
      <ul>
        <SortByCategoryItem />
        <!-- Above component for the buttons of categories -->
        <!-- add v-for="category in categories"-->
        <!-- It doesn't work, I'm going to fix it later - I want to use v-for and attach category dynamically-->
      </ul>
    </BaseBox>
  </li>
</template>

<script setup>
import BaseBox from "../../BaseBox.vue";
import SortByCategoryItem from "./SortByCategoryItem.vue";
</script>
