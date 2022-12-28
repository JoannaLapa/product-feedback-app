<template>
  <the-header></the-header>
  <blue-bar>
    <suggestions></suggestions>
    <dropdown-menu></dropdown-menu>
  </blue-bar>
</template>
<script>
import TheHeader from "../../components/layout/TheHeader.vue";
import BlueBar from "../../components/ui/BlueBar.vue";
import Suggestions from "../../components/ui/Suggestions.vue";
import DropdownMenu from "../../components/ui/DropdownMenu.vue";

export default {
  components: {
    TheHeader,
    BlueBar,
    Suggestions,
    DropdownMenu,
  },
};
</script>
