<template>
  <div class="">
    <VForm classes="space-y-1">
      <template #fields="{ values }">
        <TextField v-model="values.email" name="email" label="Email" />
        <TextField v-model="values.username" name="email" label="Username" />
        <PasswordField
          v-model="values.password"
          name="password"
          label="Password"
        />
        <PasswordField
          v-model="values.password"
          name="password"
          label="Confirm password"
        />

        <VButton text="Create" type="submit" classes="w-full max-w-full" />
      </template>
    </VForm>
  </div>
</template>

<script setup lang="ts">
import { VForm, VButton } from "@/shared/ui";
import { TextField, PasswordField } from "@/shared/ui/fields";
</script>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  components: {
    PasswordField,
    TextField,
    // VButton,
    // VForm,
  },
});
</script>
