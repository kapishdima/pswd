<template>
  <div :class="classes">
    <ClipboardDocumentIcon
      @click="copy"
      class="w-5 h-5 cursor-pointer"
      v-if="!copied"
    />
    <ClipboardDocumentCheckIcon class="w-5 h-5 cursor-pointer" v-if="copied" />
  </div>
</template>

<script setup lang="ts">
import {
  ClipboardDocumentIcon,
  ClipboardDocumentCheckIcon,
} from "@heroicons/vue/24/outline";
import { defineComponent } from "vue";
import { useCopy } from "@/shared/hooks";

type CopyButtonProps = {
  classes?: string | string[];
  value?: string;
};

const props = withDefaults(defineProps<CopyButtonProps>(), { value: "" });
const { copy, copied } = useCopy(props.value);
</script>

<script lang="ts">
export default defineComponent({});
</script>

<style lang="scss" scoped></style>
