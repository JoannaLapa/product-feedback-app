<template>
  <li>
    <BaseBox>
      <ul>
        Roadmap
        <router-link to="/roadmap">View</router-link>
        <li>
          Planned
          <!-- <span>{{ statusName }}</span> -->
        </li>
        <li>
          In-Progress
          <!-- <span>{{ statusName }}</span> -->
        </li>
        <li>
          Live
          <!-- <span>{{ statusName }}</span> -->
        </li>
      </ul>
    </BaseBox>
  </li>
</template>

<script setup>
import BaseBox from "./BaseBox.vue";
//idea for future solution: check the index of separate status and make a method for calculating the number of them if "planned" i++ etc.
</script>
