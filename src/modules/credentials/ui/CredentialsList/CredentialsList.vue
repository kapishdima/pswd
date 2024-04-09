<template>
  <div :class="cs.listContainer">
    <CredentialsListItem
      v-for="credential in credentials"
      :credential="credential"
    />
  </div>
</template>

<script setup lang="ts">
import { cs } from "./classes";
</script>

<script lang="ts">
import { Credential } from "../../model/credentials";
import { getCredentials } from "../../api/credentials.api";

import CredentialsListItem from "./CredentialsListItem.vue";

export default {
  components: {
    CredentialsListItem,
  },

  data(): { credentials: Credential[] } {
    return { credentials: [] };
  },

  mounted() {
    const credentials = getCredentials();
    this.credentials = credentials;
  },
};
</script>
