<template>
  <div class="blue-bar__card">
    <slot></slot>
  </div>
</template>

<style lang="scss">
.blue-bar__card {
background-color: #373F68;
// bug to fix - there should be a global variable, I need to check the configuration of scss, if vite accept a new way of files organisation in scss (@forward and @use) - for this moment my configuration doesn't work so I am going to finish the sceleton and I'll check this problem later.
}
</style>
