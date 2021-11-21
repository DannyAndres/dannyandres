<template>
  <div class="main-component">
    <transition name="fade" mode="out-in">
      <loading-component v-if="loading || loadingStore" />
    </transition>
    <router-view v-slot="{ Component }">
      <transition name="fade" mode="out-in">
        <div v-if="!loading && !loadingStore && !auth" class="full-page">
          <navbar />
          <div
            class="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8 full-page-container"
          >
            <component :is="Component" />
          </div>
        </div>
      </transition>
    </router-view>
    <router-view v-slot="{ Component }">
      <transition name="fade" mode="out-in">
        <div v-if="!loading && !loadingStore && auth" class="full-page">
          <navbar />
          <div
            class="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8 full-page-container"
          >
            <component :is="Component" />
          </div>
        </div>
      </transition>
    </router-view>
  </div>
</template>

<script lang="ts">
import { computed, reactive, toRefs } from '@vue/reactivity';
import { defineComponent, watchEffect } from '@vue/runtime-core';
import { useStore } from 'vuex';
import Loading from '@/components/animations/Loading.vue';
import Navbar from '@/components/app/Navbar.vue';

export default defineComponent({
  name: 'App',
  components: {
    'loading-component': Loading,
    navbar: Navbar,
  },
  setup() {
    const store = useStore();

    const data = reactive({
      loading: true,
      auth: false,
    });

    const token = computed(() => store.getters['authentication/token']);
    const loadingStore = computed(() => store.getters['loading/isloading']);

    watchEffect(() => {
      data.loading = true;
      store
        .dispatch('authentication/validate', token.value)
        .then(() => (data.auth = true))
        .catch(() => (data.auth = false))
        .finally(() => {
          setTimeout(() => {
            data.loading = false;
          }, 500);
        });
    });

    return {
      ...toRefs(data),
      loadingStore,
    };
  },
});
</script>

<style scoped lang="scss">
body,
html {
  margin: 0px;
  background-color: #0d1117 !important;
  min-height: 100vh;
}
.main-component {
  display: flex;
  justify-content: center;
  background: #0d1117;
  align-items: center;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  min-height: 100vh;
}
.full-page {
  min-height: 100vh;
  width: 100%;
}
.full-page-container {
  min-height: 70vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
