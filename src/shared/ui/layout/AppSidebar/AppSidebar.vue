<template>
  <div :class="cs.container">
    <AppLogo />

    <div :class="cs.content">
      <div :class="cs.menuContainer">
        <AppMenuLink
          v-for="link in menu"
          :key="link.path"
          :path="link.path"
          :title="link.title"
          :icon="link.icon"
        >
        </AppMenuLink>
      </div>
      <div :class="cs.footer">
        <SettingsLink />
        <LogoutButton />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { cs } from "./classes";
import { menu } from "@/app/router/menu";
</script>

<script lang="ts">
import AppLogo from "../AppLogo/AppLogo.vue";
import AppMenuLink from "../AppMenuLink/AppMenuLink.vue";

import { LogoutButton } from "@/modules/auth";
import { SettingsLink } from "@/modules/settings";

import { VButton } from "../../buttons";

export default {
  components: {
    AppLogo,
    AppMenuLink,
    VButton,
    LogoutButton,
    SettingsLink,
  },
};
</script>
@/modules/auth
