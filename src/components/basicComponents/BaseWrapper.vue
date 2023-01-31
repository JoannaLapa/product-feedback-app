<template>
  <!-- to change sm:max-w-[43.0625rem] for tailwind spacing unit in next branches where spacing already exists in tailwind.config-->
  <div
    class="my-0 mx-auto w-screen sm:max-w-[43.0625rem] sm:px-10 md:px-0 lg:my-[5.875rem] lg:flex lg:max-w-[67.5rem] lg:gap-[1.875rem]"
  >
    <slot></slot>
  </div>
</template>
