<template>
  <VForm>
    <template #fields="{ values }">
      <TextField
        name="search"
        type="text"
        v-model="values.name"
        placeholder="Search"
      />
    </template>
  </VForm>
</template>

<script lang="ts">
import { defineComponent } from "vue";

import { VForm } from "@/shared/ui";
import { TextField } from "@/shared/ui/fields";

export default defineComponent({
  components: {
    VForm,
    TextField,
  },
});
</script>
