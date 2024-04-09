<template>
  <h3 :class="cs.title">
    <slot />
  </h3>
</template>

<script setup lang="ts">
import { cs } from "./classes";
</script>

<script lang="ts">
export default {};
</script>

<style lang="scss" scoped></style>
