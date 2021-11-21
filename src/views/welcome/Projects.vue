<template>
  <div class="py-16">
    <div class="max-w-xl px-4 mx-auto sm:px-6 lg:max-w-screen-xl lg:px-8">
      <div>
        <h3
          class="
            text-3xl
            font-extrabold
            leading-8
            tracking-tight
            text-center text-gray-50
            sm:text-4xl sm:leading-10
          "
        >
          Open source projects
        </h3>
        <p
          class="
            max-w-3xl
            mx-auto
            mt-4
            text-xl
            leading-7
            text-center text-gray-500
          "
        >
          Public projects that anybody can clone and use.
        </p>
      </div>

      <div class="mt-12 lg:grid lg:grid-cols-3 lg:gap-8">
        <div>
          <div
            class="
              overflow-hidden
              flex
              justify-center
              items-center
              w-full
              h-40
              rounded-md
              border-image
              bg-green-leaves
            "
          >
            <img
              width="100%"
              src="https://raw.githubusercontent.com/DannyAndres/future-vue-components/master/images/video.gif"
              alt="Danny"
            />
          </div>
          <div class="mt-5">
            <h5
              class="
                text-lg
                font-bold
                leading-6
                text-green-700
                hover:text-green-600
              "
            >
              <a href="https://github.com/DannyAndres/future-vue-components"
                >Future Vue Components</a
              >
            </h5>
            <p class="mt-2 text-base leading-6 text-gray-500">
              An installable node vue package that offers different
              easy-to-access components to save coding time.
            </p>
          </div>
        </div>
        <div class="mt-10 lg:mt-0">
          <div
            class="
              overflow-hidden
              flex
              justify-center
              items-center
              w-full
              h-40
              rounded-md
              border-image
              bg-green-leaves
            "
          >
            <img
              width="100%"
              class="full-size-image"
              :src="require(`@/assets/images/autentication.gif`)"
              alt="Danny"
            />
          </div>
          <div class="mt-5">
            <h5
              class="
                text-lg
                font-bold
                leading-6
                text-green-700
                hover:text-green-600
              "
            >
              <a href="https://github.com/DannyAndres/Vue-Authentication"
                >Vue Authentication</a
              >
            </h5>
            <p class="mt-2 text-base leading-6 text-gray-500">
              Template vue2 & vue3 project that uses all basic tools (Vuex,
              Store, Router, Api Services Axios) to Log in & out a user with a
              JWT token stored in cache.
            </p>
          </div>
        </div>
        <div class="mt-10 lg:mt-0">
          <div
            class="
              overflow-hidden
              flex
              justify-center
              items-center
              w-full
              h-40
              rounded-md
              border-image
              bg-green-leaves
            "
          >
            <img
              width="100%"
              class="full-size-image"
              :src="require(`@/assets/images/kucoin.gif`)"
              alt="Danny"
            />
          </div>
          <div class="mt-5">
            <h5
              class="
                text-lg
                font-bold
                leading-6
                text-green-700
                hover:text-green-600
              "
            >
              <a
                href="https://github.com/DannyAndres/kucoin-app-lending-tracker"
                >Kucoin Lending Tracker App</a
              >
            </h5>
            <p class="mt-2 text-base leading-6 text-gray-500">
              Electron desktop app (Windows, Linux & Mac os) that connects your
              Crypto Lending Kucoin Account with a user interface to show
              analytics and tracking for usdt token.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@vue/runtime-core';

export default defineComponent({
  name: 'Projects',
  setup() {
    return {};
  },
});
</script>

<style scoped lang="scss">
.full-screen {
  width: 100%;
  min-height: 70vh;
}
.border-image {
  border: 2px solid #30363d;
}
.bg-green-leaves {
  background: #030504;
}
.full-size-image {
  width: 100% !important;
  height: 100% !important;
}
</style>
