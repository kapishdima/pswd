<template>
  <RouterLink to="/login" :class="cs.container">
    <ArrowRightEndOnRectangleIcon class="w-6 h-6" />
    <div :class="cs.title">Logout</div>
  </RouterLink>
</template>

<script setup lang="ts">
import { ArrowRightEndOnRectangleIcon } from "@heroicons/vue/24/outline";
import { cs } from "./classes";
</script>

<script lang="ts">
export default {};
</script>
