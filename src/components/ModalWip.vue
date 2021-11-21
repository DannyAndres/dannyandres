<template>
  <TransitionRoot appear :show="open" as="template">
    <Dialog as="div" @close="closeModal">
      <div class="fixed inset-0 z-10 overflow-y-auto">
        <div class="min-h-screen px-4 text-center">
          <TransitionChild
            as="template"
            enter="duration-300 ease-out"
            enter-from="opacity-0"
            enter-to="opacity-100"
            leave="duration-200 ease-in"
            leave-from="opacity-100"
            leave-to="opacity-0"
          >
            <DialogOverlay
              class="
                fixed
                inset-0
                bg-opacity-90 bg-navbar
                backdrop-filter backdrop-blur
                firefox:bg-opacity-90
              "
            />
          </TransitionChild>

          <span class="inline-block h-screen align-middle" aria-hidden="true">
            &#8203;
          </span>

          <TransitionChild
            as="template"
            enter="duration-300 ease-out"
            enter-from="opacity-0 scale-95"
            enter-to="opacity-100 scale-100"
            leave="duration-200 ease-in"
            leave-from="opacity-100 scale-100"
            leave-to="opacity-0 scale-95"
          >
            <div
              class="
                inline-block
                w-full
                max-w-md
                p-6
                my-8
                overflow-hidden
                text-left
                align-middle
                transition-all
                transform
                bg-main
                shadow-xl
                rounded-2xl
              "
            >
              <DialogTitle
                as="h3"
                class="no-margin text-lg font-medium leading-6 text-gray-50"
              >
                Work In Progress
              </DialogTitle>
              <div class="mt-2">
                <p class="text-sm text-gray-500">
                  More features and information will be added in the future.
                </p>
              </div>

              <div class="mt-4">
                <button
                  type="button"
                  class="
                    inline-flex
                    justify-center
                    px-4
                    py-2
                    text-sm
                    font-medium
                    text-blue-900
                    bg-blue-100
                    border border-transparent
                    rounded-md
                    hover:bg-blue-200
                    focus:outline-none
                    focus-visible:ring-2
                    focus-visible:ring-offset-2
                    focus-visible:ring-blue-500
                  "
                  @click="closeModal"
                >
                  Got it, thanks!
                </button>
              </div>
            </div>
          </TransitionChild>
        </div>
      </div>
    </Dialog>
  </TransitionRoot>
</template>

<script lang="ts">
import { defineComponent } from '@vue/runtime-core';
import {
  TransitionRoot,
  TransitionChild,
  Dialog,
  DialogOverlay,
  DialogTitle,
} from '@headlessui/vue';

export default defineComponent({
  name: 'HelloWorld',
  props: {
    open: {
      type: Boolean,
      required: true,
    },
  },
  components: {
    TransitionRoot,
    TransitionChild,
    Dialog,
    DialogOverlay,
    DialogTitle,
  },
  emits: ['openModal', 'closeModal'],
  setup(props, { emit }) {
    return {
      closeModal() {
        // must be true, is open before it gets close
        emit('closeModal', props.open);
      },
      openModal() {
        // must be false, is open before it gets open
        emit('openModal', props.open);
      },
    };
  },
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
