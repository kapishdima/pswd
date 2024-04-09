<template>
  <button :class="[cs.iconButtonContainer, cs[variant]]">
    <slot />
  </button>
</template>

<script setup lang="ts">
import { cs } from "./classes";
import { Variants } from "./types";

type IconButtonProps = {
  variant?: Variants;
};

withDefaults(defineProps<IconButtonProps>(), { variant: "primary" });
</script>

<script lang="ts">
export default {};
</script>
