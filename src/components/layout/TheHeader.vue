<template>
  <header>
    <div class="heading">
      <h1>Frontend Mentor</h1>
      <p>Feedback Board</p>
    </div>
    <svg
      class="icon-open"
      width="20"
      height="17"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g fill="#FFF" fill-rule="evenodd">
        <path d="M0 0h20v3H0zM0 7h20v3H0zM0 14h20v3H0z" />
      </g>
    </svg>
    <svg
      class="icon-close hidden"
      width="18"
      height="17"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M15.01.368l2.122 2.122-6.01 6.01 6.01 6.01-2.122 2.122L9 10.622l-6.01 6.01L.868 14.51 6.88 8.5.87 2.49 2.988.368 9 6.38 15.01.37z"
        fill="#FFF"
        fill-rule="evenodd"
      />
    </svg>
  </header>
</template>

<style lang="scss">
.hidden {
  display: none;
}
</style>
