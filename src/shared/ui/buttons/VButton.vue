<template>
  <button
    :class="[
      { 'justify-between': $slots.iconAfter },
      cs.container,
      cs[variant],
      classes,
    ]"
  >
    {{ text }}
    <slot name="iconAfter"></slot>
  </button>
</template>

<script setup lang="ts">
import { cs } from "./classes";

import { Variants } from "./types";

type ButtonProps = {
  classes?: string;
  text: string;
  variant?: Variants;
};

withDefaults(defineProps<ButtonProps>(), {
  variant: "primary",
});
</script>

<script lang="ts">
export default {};
</script>

<style lang="scss" scoped></style>
