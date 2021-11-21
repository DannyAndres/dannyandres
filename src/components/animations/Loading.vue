<template>
  <div class="loading-component">
    <img class="logo-image" alt="Logo" src="@/assets/logo.png" />
    <div class="loader">
      <svg class="circular-loader" viewBox="25 25 50 50">
        <circle
          class="loader-path"
          cx="50"
          cy="50"
          r="20"
          fill="none"
          stroke="#0F766E"
          stroke-width="4"
        />
      </svg>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@vue/runtime-core';

export default defineComponent({
  name: 'loading',
  setup() {
    return {};
  },
});
</script>

<style scoped lang="scss">
.loading-component {
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
.logo-image {
  max-height: 80px;
  margin-bottom: 1em;
}
.loader {
  position: relative;
  margin: 0px auto;
  width: 30px;
  height: 30px;
}
.loader:before {
  content: '';
  display: block;
  padding-top: 100%;
}

.circular-loader {
  -webkit-animation: rotate 2s linear infinite;
  animation: rotate 2s linear infinite;
  height: 100%;
  -webkit-transform-origin: center center;
  -ms-transform-origin: center center;
  transform-origin: center center;
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  margin: auto;
}

.loader-path {
  stroke-dasharray: 150, 200;
  stroke-dashoffset: -10;
  -webkit-animation: dash 1.5s ease-in-out infinite,
    color 6s ease-in-out infinite;
  animation: dash 1.5s ease-in-out infinite, color 6s ease-in-out infinite;
  stroke-linecap: round;
}

@-webkit-keyframes rotate {
  100% {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}

@keyframes rotate {
  100% {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}
@-webkit-keyframes dash {
  0% {
    stroke-dasharray: 1, 200;
    stroke-dashoffset: 0;
  }
  50% {
    stroke-dasharray: 89, 200;
    stroke-dashoffset: -35;
  }
  100% {
    stroke-dasharray: 89, 200;
    stroke-dashoffset: -124;
  }
}
@keyframes dash {
  0% {
    stroke-dasharray: 1, 200;
    stroke-dashoffset: 0;
  }
  50% {
    stroke-dasharray: 89, 200;
    stroke-dashoffset: -35;
  }
  100% {
    stroke-dasharray: 89, 200;
    stroke-dashoffset: -124;
  }
}
@-webkit-keyframes color {
  0% {
    stroke: #0f766e;
  }
  40% {
    stroke: #0f766e;
  }
  66% {
    stroke: #0f766e;
  }
  80%,
  90% {
    stroke: #0f766e;
  }
}
@keyframes color {
  0% {
    stroke: #0f766e;
  }
  40% {
    stroke: #0f766e;
  }
  66% {
    stroke: #0f766e;
  }
  80%,
  90% {
    stroke: #0f766e;
  }
}
</style>
