<template>
  <div :class="cs.fieldContainer">
    <label :for="name" :class="cs.label" v-if="label?.length">
      {{ label }}
    </label>
    <div class="relative w-full">
      <input
        v-bind="$attrs"
        v-model="model"
        :type="type"
        :id="name"
        :class="cs.field"
      />
      <div class="absolute top-2.5 right-4">
        <EyeIcon class="w-4 h-4" @click="hidePassword" v-if="!passwordHidden" />
        <EyeSlashIcon
          class="w-4 h-4"
          @click="showPassword"
          v-if="passwordHidden"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { EyeIcon, EyeSlashIcon } from "@heroicons/vue/24/outline";
import { defineComponent } from "vue";
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
export default defineComponent({
  data() {
    return {
      type: "password",
    };
  },

  computed: {
    passwordHidden() {
      return this.type === "password";
    },
  },

  methods: {
    hidePassword() {
      this.type = "password";
    },
    showPassword() {
      this.type = "text";
    },
  },
});
</script>

<style lang="scss" scoped></style>
