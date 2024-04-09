<template>
  <main class="main">
    <app-sidebar />
    <div :class="cs.content">
      <RouterView />
    </div>
  </main>
</template>

<script setup lang="ts">
import { cs } from "./classes";
</script>

<script lang="ts">
import { RouterView } from "vue-router";
import AppSidebar from "../AppSidebar/AppSidebar.vue";

export default {
  components: {
    AppSidebar,
  },
};
</script>

<style lang="scss">
.main {
  min-height: 100vh;

  display: grid;
  grid-template-columns: minmax(100px, 20%) 1fr;
}
</style>
