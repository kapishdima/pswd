<template>
  <RouterLink to="/settings" :class="cs.container">
    <Cog8ToothIcon class="w-6 h-6" />
    <h4 :class="cs.title">Settings</h4>
  </RouterLink>
</template>

<script setup lang="ts">
import { Cog8ToothIcon } from "@heroicons/vue/24/outline";
import { cs } from "./classes";
</script>

<script lang="ts">
export default {};
</script>
