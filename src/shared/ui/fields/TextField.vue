<template>
  <div :class="cs.fieldContainer">
    <label :for="name" :class="cs.label" v-if="label?.length">
      {{ label }}
    </label>
    <input
      v-bind="$attrs"
      type="text"
      v-model="model"
      :id="name"
      :class="cs.field"
    />
  </div>
</template>

<script setup lang="ts">
import { cs } from "./classes";

type TextFieldProps = {
  label?: string;
  name: string;
};

const props = defineProps<TextFieldProps>();
const model = defineModel<string>();

defineOptions({
  inheritAttrs: false,
});
</script>

<script lang="ts">
export default {};
</script>

<style lang="scss" scoped></style>
