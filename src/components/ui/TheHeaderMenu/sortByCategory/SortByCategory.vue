<template>
<li>
    <ul>
      <sort-by-category-item></sort-by-category-item>
      <!-- Above component for the buttons of categories -->
      <!-- add v-for="category in categories"-->
      <!-- It doesn't work, I'm going to fix it later - I want to use v-for and attach category dynamically-->
    </ul>
  </li>
</template>

<script>
import SortByCategoryItem from "./SortByCategoryItem.vue";

export default {
    components: {
        SortByCategoryItem,
    }
}
</script>