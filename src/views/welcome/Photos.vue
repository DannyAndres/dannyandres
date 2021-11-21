<template>
  <div class="py-12">
    <div class="max-w-xl px-4 mx-auto sm:px-6 lg:max-w-screen-xl lg:px-8">
      <div>
        <h3
          class="
            text-3xl
            font-extrabold
            leading-8
            tracking-tight
            text-left text-gray-50
            sm:text-4xl sm:leading-10
            flex flex-row
            justify-left
            items-center
          "
        >
          New York, remote work
          <img
            src="https://camo.githubusercontent.com/0aaf6b4ded0d9ac22cb3871bbc5f8c5580360283846670d27d81ba53d4641e27/68747470733a2f2f63646e2d69636f6e732d706e672e666c617469636f6e2e636f6d2f3531322f3139372f3139373438342e706e67"
            class="w-8 m-0 mx-2"
            alt="new"
            data-canonical-src="https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/240/apple/237/fire_1f525.png"
          />USA
        </h3>
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
              rounded-md
              border-image
              bg-green-leaves
            "
          >
            <img
              width="100%"
              class="full-size-image"
              :src="require(`@/assets/images/instagram1.jpeg`)"
              alt="Danny"
            />
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
              rounded-md
              border-image
              bg-green-leaves
            "
          >
            <img
              width="100%"
              class="full-size-image"
              :src="require(`@/assets/images/instagram2.jpeg`)"
              alt="Danny"
            />
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
              rounded-md
              border-image
              bg-green-leaves
            "
          >
            <img
              width="100%"
              class="full-size-image"
              :src="require(`@/assets/images/instagram3.jpeg`)"
              alt="Danny"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@vue/runtime-core';

export default defineComponent({
  name: 'Motivations',
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
