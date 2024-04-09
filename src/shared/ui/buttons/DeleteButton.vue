<template>
  <VButtonIcon variant="error">
    <TrashIcon class="w-4 h-4" />
  </VButtonIcon>
</template>

<script setup lang="ts">
import { TrashIcon } from "@heroicons/vue/24/outline";
</script>

<script lang="ts">
import VButtonIcon from "./VIconButton.vue";

export default {
  components: {
    VButtonIcon,
  },
};
</script>
