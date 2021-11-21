<template>
  <nav class="fixed w-full navbar-main-component">
    <div class="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
      <div class="relative flex items-center justify-between h-16">
        <div class="absolute inset-y-0 left-0 flex items-center sm:hidden">
          <!-- Mobile menu button-->
          <button
            @click="
              () => {
                nav_dropdown = !nav_dropdown;
              }
            "
            type="button"
            class="
              inline-flex
              items-center
              bg-green-500
              justify-center
              p-2
              rounded-md
              bg-main bg-main-hover
              text-gray-50
              focus:outline-none
            "
            aria-controls="mobile-menu"
            aria-expanded="false"
          >
            <svg
              class="block h-6 w-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
            <svg
              class="hidden h-6 w-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
        <div
          class="
            flex-1 flex
            items-center
            justify-center
            sm:items-stretch sm:justify-start
          "
        >
          <div
            @click="goRoot()"
            class="cursor-pointer flex-shrink-0 flex items-center"
          >
            <img
              class="block h-10 w-auto"
              src="@/assets/logo.png"
              alt="Logo app"
            />
          </div>
        </div>
        <div
          class="
            absolute
            inset-y-0
            right-0
            flex
            items-center
            pr-2
            sm:static sm:inset-auto sm:ml-6 sm:pr-0
          "
        >
          <div
            class="hidden sm:block"
            :class="isauthenticated ? 'sm:mr-6' : ''"
          >
            <div v-if="isauthenticated" class="flex space-x-4">
              <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" -->
              <a
                href="#"
                class="
                  text-gray-900
                  hover:bg-gray-200 hover:text-green-900
                  px-3
                  py-2
                  rounded-md
                  text-sm
                  font-medium
                "
                >Reservas</a
              >
              <a
                href="#"
                class="
                  text-gray-900
                  hover:bg-green-200 hover:text-green-900
                  px-3
                  py-2
                  rounded-md
                  text-sm
                  font-medium
                "
                >Calendario</a
              >
              <router-link
                tag="a"
                to="/home"
                class="
                  bg-green-500
                  text-gray-50
                  px-3
                  py-2
                  rounded-md
                  text-sm
                  font-medium
                "
                aria-current="page"
                >Inicio</router-link
              >
            </div>
            <div v-else class="flex space-x-4">
              <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" -->
              <a
                href="#"
                class="
                  text-gray-50
                  hover:text-gray-400
                  px-3
                  py-2
                  rounded-md
                  text-sm
                  font-bold
                "
                >Posts</a
              >
              <a
                href="#"
                class="
                  text-gray-50
                  hover:text-gray-400
                  px-3
                  py-2
                  rounded-md
                  text-sm
                  font-bold
                "
                >Memes</a
              >
              <a
                href="#"
                class="
                  text-gray-50
                  hover:text-gray-400
                  px-3
                  py-2
                  rounded-md
                  text-sm
                  font-bold
                "
                >Setups</a
              >
              <router-link
                tag="a"
                to="/login"
                class="
                  bg-main bg-main-hover
                  text-gray-50
                  px-3
                  py-2
                  rounded-md
                  text-sm
                  font-medium
                "
                aria-current="page"
                >Log in</router-link
              >
            </div>
          </div>

          <!-- Profile dropdown -->
          <div v-if="isauthenticated" class="ml-3 relative">
            <div>
              <button
                type="button"
                @click="
                  () => {
                    profile_dropdown = !profile_dropdown;
                  }
                "
                class="
                  flex
                  items-center
                  text-sm
                  rounded-full
                  focus:outline-none
                "
                id="user-menu-button"
                aria-expanded="false"
                aria-haspopup="true"
              >
                <img
                  class="h-8 w-8 rounded"
                  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                  alt=""
                />
                <svg
                  v-if="profile_dropdown"
                  xmlns="http://www.w3.org/2000/svg"
                  class="mr-2 ml-1 h-5 w-5 text-green-900"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fill-rule="evenodd"
                    d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z"
                    clip-rule="evenodd"
                  />
                </svg>
                <svg
                  v-else
                  xmlns="http://www.w3.org/2000/svg"
                  class="mr-2 ml-1 h-5 w-5 text-green-900"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fill-rule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clip-rule="evenodd"
                  />
                </svg>
              </button>
            </div>

            <transition name="fade" mode="out-in">
              <div
                v-if="profile_dropdown"
                class="
                  origin-top-right
                  absolute
                  right-0
                  mt-2
                  w-48
                  rounded-md
                  shadow-lg
                  bg-gray-50
                  focus:outline-none
                "
                role="menu"
                aria-orientation="vertical"
                aria-labelledby="user-menu-button"
                tabindex="-1"
              >
                <!-- Active: "bg-gray-100", Not Active: "" -->
                <router-link
                  tag="a"
                  to="/profile"
                  class="
                    block
                    px-4
                    py-2
                    text-sm text-gray-700
                    hover:bg-gray-100
                  "
                  role="menuitem"
                  tabindex="-1"
                  id="user-menu-item-0"
                  >Mi Perfil</router-link
                >
                <a
                  href="#"
                  class="
                    block
                    px-4
                    py-2
                    text-sm text-gray-700
                    hover:bg-gray-100
                  "
                  role="menuitem"
                  tabindex="-1"
                  id="user-menu-item-1"
                  >Ajustes</a
                >
                <a
                  href="#"
                  @click.prevent="logout_redirect()"
                  class="
                    block
                    px-4
                    py-2
                    text-sm text-gray-700
                    hover:bg-gray-100
                  "
                  role="menuitem"
                  tabindex="-1"
                  id="user-menu-item-2"
                  >Salir</a
                >
              </div>
            </transition>
          </div>
        </div>
      </div>
    </div>

    <transition name="fadeHeight" mode="out-in">
      <div v-if="nav_dropdown" class="sm:hidden" id="mobile-menu">
        <div v-if="isauthenticated" class="px-2 pt-2 pb-3 space-y-1">
          <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" -->
          <a
            href="#"
            class="
              bg-green-500
              text-gray-50
              block
              px-3
              py-2
              rounded-md
              text-base
              font-medium
            "
            aria-current="page"
            >Inicio</a
          >
          <a
            href="#"
            class="
              text-gray-900
              hover:bg-green-200 hover:text-green-900
              block
              px-3
              py-2
              rounded-md
              text-base
              font-medium
            "
            >Reservas</a
          >
          <a
            href="#"
            class="
              text-gray-900
              hover:bg-green-200 hover:text-green-900
              block
              px-3
              py-2
              rounded-md
              text-base
              font-medium
            "
            >Calendario</a
          >
        </div>
        <div v-else class="px-2 pt-2 pb-3 space-y-1">
          <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" -->
          <router-link
            tag="a"
            to="/login"
            href="#"
            class="
              bg-green-600
              hover:bg-green-700
              text-gray-50
              block
              px-3
              py-2
              rounded-md
              text-base
              font-medium
            "
            aria-current="page"
            >Log in</router-link
          >
          <a
            href="#"
            class="
              text-gray-50
              hover:text-gray-400
              block
              px-3
              py-2
              rounded-md
              text-base
              font-medium
            "
            >Posts</a
          >
          <a
            href="#"
            class="
              text-gray-50
              hover:text-gray-400
              block
              px-3
              py-2
              rounded-md
              text-base
              font-medium
            "
            >Memes</a
          >
          <a
            href="#"
            class="
              text-gray-50
              hover:text-gray-400
              block
              px-3
              py-2
              rounded-md
              text-base
              font-medium
            "
            >Setups</a
          >
        </div>
      </div>
    </transition>
  </nav>
  <nav class="h-16 navbar-main-component"></nav>
</template>

<script lang="ts">
import router from '@/router';
import { defineComponent } from '@vue/runtime-core';
import { computed, reactive, toRefs } from '@vue/reactivity';
import { useStore } from 'vuex';

export default defineComponent({
  name: 'Navbar',
  setup() {
    const store = useStore();

    const isauthenticated = computed(
      () => store.getters['authentication/isauthenticated']
    );

    const data = reactive({
      profile_dropdown: false,
      nav_dropdown: false,
    });

    const goRoot = () => {
      router.replace({ path: '/' });
    };

    const logout_redirect = () => {
      store
        .dispatch('authentication/logout')
        .then(() => {
          // logout actions in this view
        })
        .catch(() => {
          // logout error actions in this view
        })
        .finally(() => {
          router.replace({ path: '/' });
        });
    };

    return {
      ...toRefs(data),
      isauthenticated,
      goRoot,
      logout_redirect,
    };
  },
});
</script>

<style scoped lang="scss">
.navbar-main-component {
  background: #161b22;
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
.font-title-logo {
  font-family: 'Nunito', sans-serif;
}
.fadeHeight-enter-active,
.fadeHeight-leave-active {
  transition: all 0.2s;
  max-height: 230px;
}
.fadeHeight-enter,
.fadeHeight-leave-to {
  opacity: 0;
  max-height: 0px;
}
</style>
