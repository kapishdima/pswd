<template>
  <VIconButton :variant="variant">
    <ClipboardDocumentIcon
      @click="copy"
      class="w-5 h-5 cursor-pointer"
      v-if="!copied"
    />
    <ClipboardDocumentCheckIcon class="w-5 h-5 cursor-pointer" v-if="copied" />
  </VIconButton>
</template>

<script setup lang="ts">
import {
  ClipboardDocumentIcon,
  ClipboardDocumentCheckIcon,
} from "@heroicons/vue/24/outline";
import { defineComponent } from "vue";
import { useCopy } from "@/shared/hooks";
import { Variants } from "./types";
import VIconButton from "./VIconButton.vue";

type CopyButtonProps = {
  variant?: Variants;
  value?: string;
};

const props = withDefaults(defineProps<CopyButtonProps>(), {
  value: "",
  variant: "primary",
});
const { copy, copied } = useCopy(props.value);
</script>

<script lang="ts">
export default defineComponent({});
</script>

<style lang="scss" scoped></style>
