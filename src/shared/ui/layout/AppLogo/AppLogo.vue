<template>
  <div :class="cs.container">
    <ShieldCheckIcon class="w-10 h-10" />
    <div :class="cs.textContainer">
      <h3 :class="cs.title">PSWD</h3>
      <h3 :class="cs.subtitle">Store your secret safely</h3>
    </div>
  </div>
</template>

<script setup lang="ts">
import { cs } from "./classes";
import { ShieldCheckIcon } from "@heroicons/vue/16/solid";
</script>

<script lang="ts">
export default {};
</script>
