<template>
  <TransitionRoot as="template" :show="shown">
    <Dialog as="div" class="relative z-10" @close="onClose">
      <TransitionChild
        as="template"
        enter="ease-out duration-300"
        enter-from="opacity-0"
        enter-to="opacity-100"
        leave="ease-in duration-200"
        leave-from="opacity-100"
        leave-to="opacity-0"
      >
        <div
          class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"
        />
      </TransitionChild>

      <div class="fixed inset-0 z-10 w-screen overflow-y-hidden">
        <TransitionChild
          as="div"
          enter="ease-out duration-300"
          enter-from="opacity-0 translate-x-[-100%]"
          enter-to="opacity-100 translate-x-0"
          leave="ease-in duration-200"
          leave-from="opacity-100 translate-x-0"
          leave-to="opacity-0 translate-x-[-100%]"
        >
          <div
            class="w-[35%] min-h-screen bg-white rounded-r-xl transform origin-right overflow-hidden"
          >
            <div class="bg-slate-100 px-6 py-6" v-if="$slots.header">
              <slot name="header" />
            </div>

            <div class="px-6">
              <slot name="content" />
            </div>

            <div class="">
              <slot />
            </div>
          </div>
        </TransitionChild>
      </div>
    </Dialog>
  </TransitionRoot>
</template>

<script setup lang="ts">
import { Dialog, TransitionChild, TransitionRoot } from "@headlessui/vue";
import { defineComponent } from "vue";

type DrawerProps = {
  shown?: boolean;
};

const emit = defineEmits<(e: "close") => void>();
withDefaults(defineProps<DrawerProps>(), { shown: false });
</script>

<script lang="ts">
export default defineComponent({
  methods: {
    onClose() {
      emit("close");
    },
  },
});
</script>
