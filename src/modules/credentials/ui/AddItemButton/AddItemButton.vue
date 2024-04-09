<template>
  <VButton text="Add new">
    <template v-slot:iconAfter>
      <PlusIcon class="w-4 h-4" />
    </template>
  </VButton>
</template>

<script setup lang="ts">
import { PlusIcon } from "@heroicons/vue/24/outline";
</script>

<script lang="ts">
import { VButton } from "@/shared/ui";

export default {
  components: {
    VButton,
  },
};
</script>

<style lang="scss" scoped></style>
