<template>
  <VForm>
    <template #fields="{ values }">
      <TextField name="domain" v-model="values.domain" label="Domain" />
      <TextField name="domain" v-model="values.email" label="Email" />
      <TextField name="domain" v-model="values.username" label="Username" />
      <PasswordField name="domain" v-model="values.password" label="Password" />

      <div class="flex items-center gap-x-4 w-[30%] mt-4">
        <VButton text="Save" variant="success">
          <template #iconAfter>
            <CheckIcon class="w-4" />
          </template>
        </VButton>
      </div>
    </template>
  </VForm>
</template>

<script setup lang="ts">
import { CheckIcon } from "@heroicons/vue/24/outline";
</script>

<script lang="ts">
import { TextField, PasswordField } from "@/shared/ui/fields";
import { VForm, VButton } from "@/shared/ui";

export default {
  components: {
    VForm,
    VButton,
    TextField,
  },
};
</script>

<style lang="scss" scoped></style>
