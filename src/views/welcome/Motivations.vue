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
            text-center text-gray-50
            sm:text-4xl sm:leading-10
            flex flex-row
            justify-center
            items-center
          "
        >
          <img
            src="https://camo.githubusercontent.com/780693f319da202ea20f60e2c0a291391b718bd795a6fac3d25e2dc28ec1ca7a/68747470733a2f2f656d6f6a6970656469612d75732e73332e6475616c737461636b2e75732d776573742d312e616d617a6f6e6177732e636f6d2f7468756d62732f3234302f6170706c652f3233372f666972655f31663532352e706e67"
            class="w-8 m-0"
            alt="new"
            data-canonical-src="https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/240/apple/237/fire_1f525.png"
          />What motivates me
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
          Interesting, exciting, new technologies.
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
              class="full-size-image"
              :src="require(`@/assets/images/lstm.gif`)"
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
              <a href="https://github.com/DannyAndres/seminario"
                >How to improve prediction performance using TimeSeries GAF
                images with a CNN over a LSTM - Machine Learning</a
              >
            </h5>
            <p class="mt-2 text-base leading-6 text-gray-500">
              Creating an image from a TimeSeries hoping that a CNN model will
              show a better prediction than the TimeSeries on a LSTM model.
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
              height="100%"
              src="https://d24wuq6o951i2g.cloudfront.net/img/events/id/457/457878740/assets/c.H.6a.c63502e3dbfa2b27154b030124ba9245.18_Recruiting_LATAM_BRAZIL-UR-00971.jpg"
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
              <a href="https://tmpfb.splashthat.com/"
                >Technical Mentorship Programme Mentee at Facebook</a
              >
            </h5>
            <p class="mt-2 text-base leading-6 text-gray-500">
              Improving Big O notation on interview algorithms, solving problems
              and leetcode questions.
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
              :src="require(`@/assets/images/token.gif`)"
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
              <a href="https://docs.soliditylang.org/en/v0.8.10/"
                >Using solidity to create ERC20 tokens and web3 apps</a
              >
            </h5>
            <p class="mt-2 text-base leading-6 text-gray-500">
              Smart contracts to create tokens, functions, web3 apps and
              leverage the use of the BlockChain to move from normal Databases
              into a chain of blocks that has the code and data.
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
