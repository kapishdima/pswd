<template>
  <form @submit="submit" :class="[cs.container, classes]">
    <slot name="fields" :values="values"></slot>
  </form>
</template>

<script setup lang="ts">
import { cs } from "./classes";
import { defineComponent } from "vue";

type FormProps = {
  classes?: string | string[];
  defaultValues?: any;
};

const emit = defineEmits<(e: "submit", values: any) => void>();
const props = defineProps<FormProps>();
</script>

<script lang="ts">
export default defineComponent({
  data() {
    return {
      values: this.defaultValues || {},
    };
  },

  methods: {
    submit() {
      emit("submit", this.values);
    },
  },
});
</script>
