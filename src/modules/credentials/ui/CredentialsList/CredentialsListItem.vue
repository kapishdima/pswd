<template>
  <div :class="cs.itemContainer" @click="shown = true">
    <div class="flex flex-col">
      <div :class="cs.itemInfoContainer">
        <GlobeAltIcon class="w-6 h-6" />
        <h4 class="text-sm font-semibold leading-6 text-gray-900">
          {{ credential.domain }}
        </h4>
      </div>
      <p class="text-sm font-semibold text-gray-400">{{ credential.email }}</p>
    </div>
    <div :class="cs.itemActionsContainer">
      <CopyButtonStyled value="test" />
      <DeleteButton />
    </div>
  </div>
  <CredentialsEditModal :shown="shown" @close="shown = false" />
</template>

<script setup lang="ts">
import { cs } from "./classes";
import { GlobeAltIcon } from "@heroicons/vue/24/outline";
import { Credential } from "../../model/credentials";

import { ref } from "vue";

const shown = ref<boolean>(false);

type CredentialListItemProps = {
  credential: Credential;
};

defineProps<CredentialListItemProps>();
</script>

<script lang="ts">
import {
  VButton,
  DeleteButton,
  CopyButton,
  CopyButtonStyled,
} from "@/shared/ui";
import CredentialsEditModal from "../CredentialsEditModal/CredentialsEditModal.vue";

export default {
  components: {
    VButton,
    CredentialsEditModal,
  },
};
</script>

<style lang="scss" scoped></style>
