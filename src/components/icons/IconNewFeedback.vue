<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    :width="width"
    :height="height"
    class="-translate-y-2/4 translate-x-5 sm:translate-x-10"
  >
    <defs>
      <radialGradient
        id="a"
        cx="103.9%"
        cy="-10.387%"
        fx="103.9%"
        fy="-10.387%"
        r="166.816%"
      >
        <stop stop-color="#E84D70" offset="0%" />
        <stop stop-color="#A337F6" offset="53.089%" />
        <stop stop-color="#28A7ED" offset="100%" />
      </radialGradient>
    </defs>
    <g fill="none" fill-rule="evenodd">
      <circle
        fill="url(#a)"
        cx="28"
        cy="28"
        r="28"
        class="origin-center scale-75 sm:scale-100"
      />
      <path
        fill="#FFF"
        fill-rule="nonzero"
        d="M30.343 36v-5.834h5.686v-4.302h-5.686V20h-4.597v5.864H20v4.302h5.746V36z"
        class="origin-center scale-90 sm:scale-100"
      />
    </g>
  </svg>
</template>

<script setup>
defineProps({
  width: {
    type: [Number, String],
    default: 56,
  },
  height: {
    type: [Number, String],
    default: 56,
  },
});
</script>

<style>
circle {
  transform-origin: center center;
  transform: scale(66%);
}
</style>
