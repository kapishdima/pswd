<template>
  <RouterLink to="/credentials" :class="cs.container">
    <img :src="icon" alt="" class="w-6 h-6" />
    {{ title }}
  </RouterLink>
</template>

<script setup lang="ts">
import { Route } from "@/app/router/types";
import { cs } from "./classes";

type AppMenuLinkProps = Route;

defineProps<AppMenuLinkProps>();
</script>

<script lang="ts">
export default {};
</script>
