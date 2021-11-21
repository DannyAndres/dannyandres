<template>
  <div class="py-6 px-2 md:px-0 md:py-20 full-screen">
    <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
      <div class="col-span-1 md:col-span-2 sm:text-center lg:text-left">
        <h1 class="tracking-tight font-extrabold">
          <span
            class="
              text-2xl
              sm:text-4xl
              md:text-6xl
              text-gray-50
              block
              xl:inline
              w-full
            "
            >Hey! Nice to see you.</span
          >
          <span
            class="text-xl sm:text-3xl md:text-5xl block text-green-700 w-full"
          >
            I'm Danny, Fullstack developer
          </span>
        </h1>
        <p
          class="
            mt-3
            text-base text-gray-500
            sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto
            md:mt-5 md:text-xl
            lg:mx-0
            inline-flex
            items-center
          "
        >
          Currently remote coding from <b class="ml-1">Santiago, Chile</b>.
        </p>
        <div class="mt-5 sm:mt-8 sm:flex sm:justify-center md:justify-start">
          <div class="rounded-md shadow">
            <a
              href="#"
              class="
                w-full
                flex
                items-center
                justify-center
                px-8
                py-3
                border border-transparent
                text-base
                font-medium
                rounded-md
                text-gray-50
                bg-green-600
                hover:bg-green-700
                md:py-4 md:text-lg md:px-10
              "
            >
              Get started
            </a>
          </div>
          <div class="mt-3 sm:mt-0 sm:ml-3">
            <a
              href="#"
              class="
                w-full
                flex
                items-center
                justify-center
                px-8
                py-3
                border border-transparent
                text-base
                font-medium
                rounded-md
                text-green-700
                bg-green-100
                hover:bg-green-200
                md:py-4 md:text-lg md:px-10
              "
            >
              Live demo
            </a>
          </div>
        </div>
        <div class="flex mt-5 sm:mt-8 justify-center lg:justify-start">
          <a
            href="https://github.com/dannyandres"
            class="border-image rounded-md md:ml-0 mx-2 overflow-hidden"
            ><img
              alt="Github"
              src="https://camo.githubusercontent.com/297212f5cfd71f14f1a774a22bfd24b24bfa996aa72f4d941f790c8606ca8f0d/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f4769744875622d2532333132313030452e7376673f267374796c653d666f722d7468652d6261646765266c6f676f3d476974687562266c6f676f436f6c6f723d7768697465"
              data-canonical-src="https://img.shields.io/badge/GitHub-%2312100E.svg?&amp;style=for-the-badge&amp;logo=Github&amp;logoColor=white"
              style="max-width: 100%"
          /></a>
          <a
            href="https://www.linkedin.com/in/danny-andres/"
            class="border-image rounded-md md:mr-0 mx-2 overflow-hidden"
            rel="nofollow"
            ><img
              alt="LinkedIn"
              src="https://camo.githubusercontent.com/a493f6833f99fb3c85788d6d9305e6b7a42b838e5ee5d138fd9a8214a7e77472/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f6c696e6b6564696e2d2532333030373742352e7376673f267374796c653d666f722d7468652d6261646765266c6f676f3d6c696e6b6564696e266c6f676f436f6c6f723d7768697465"
              data-canonical-src="https://img.shields.io/badge/linkedin-%230077B5.svg?&amp;style=for-the-badge&amp;logo=linkedin&amp;logoColor=white"
              style="max-width: 100%"
          /></a>
        </div>
      </div>
      <div
        class="
          order-first
          flex flex-row
          justify-center
          py-4
          md:py-0 md:justify-end
          sm:text-center
          lg:text-left
        "
      >
        <div
          class="
            overflow-hidden
            flex
            justify-center
            items-center
            w-1/2
            md:w-full
            rounded-full
            md:rounded-md
            border-image
            bg-green-leaves
          "
        >
          <img
            width="100%"
            height="100%"
            src="https://avatars.githubusercontent.com/u/19177489?v=4"
            alt="Danny"
          />
        </div>
      </div>
    </div>
    <projects />
    <motivations />
    <tech />
    <photos />
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@vue/runtime-core';
import Projects from '@/views/welcome/Projects.vue';
import Motivations from '@/views/welcome/Motivations.vue';
import Code from '@/views/welcome/Code.vue';
import Photos from '@/views/welcome/Photos.vue';

export default defineComponent({
  name: 'Welcome',
  components: {
    projects: Projects,
    motivations: Motivations,
    tech: Code,
    photos: Photos,
  },
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
</style>
