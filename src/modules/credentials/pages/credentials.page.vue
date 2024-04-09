<template>
  <div class="flex w-full items-center justify-between">
    <div class="flex gap-x-4 items-stretch w-[60%]">
      <CredentialsSearch />
      <AddItemButton />
    </div>
    <!-- <UserAvatar /> -->
  </div>
  <CredentialsList />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { AppTitle } from "@/shared/ui";
import { UserAvatar } from "@/modules/users";

import CredentialsList from "../ui/CredentialsList/CredentialsList.vue";
import AddItemButton from "../ui/AddItemButton/AddItemButton.vue";
import CredentialsSearch from "../ui/CredentialsSearch/CredentialsSearch.vue";

export default defineComponent({
  components: {
    CredentialsList,
    CredentialsSearch,
    AppTitle,
    UserAvatar,
    AddItemButton,
  },
});
</script>
