<template>
  <VDrawer :shown="shown" title="google.com" @close="emit('close')">
    <template #header>
      <h2 class="text-xl font-medium">google.com</h2>
    </template>
    <template #content>
      <div class="mt-10">
        <div
          class="pb-2 border-b border-gray-100 flex items-center justify-between"
        >
          <h3 class="text-md font-semibold text-gray-800">Login details</h3>
          <CopyButton />
        </div>
        <div class="mt-4">
          <CredentialForm />
        </div>
        <!-- <div class="px-4 py-2 border border-gray-200 rounded-md">
        </div> -->
      </div>
    </template>
  </VDrawer>
</template>

<script setup lang="ts">
type CredentialsEditModalProps = {
  shown?: boolean;
};

const emit = defineEmits<(e: "close") => void>();
defineProps<CredentialsEditModalProps>();
</script>

<script lang="ts">
import { VModal, VDrawer, CopyButton } from "@/shared/ui";
import CredentialForm from "../CredentialsForm/CredentialsForm.vue";
import { defineComponent } from "vue";

export default defineComponent({
  components: {
    VModal,
    VDrawer,
    CopyButton,
    CredentialForm,
  },
});
</script>

<style lang="scss" scoped></style>
