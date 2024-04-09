<template>
  <div class="flex h-screen flex-1 flex-col justify-center px-6 py-12 lg:px-8">
    <div class="sm:mx-auto sm:w-full sm:max-w-sm">
      <div class="flex justify-center">
        <ShieldCheckIcon class="w-10 h-10" />
      </div>

      <h2
        class="mt-4 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900"
      >
        Sign in to your account
      </h2>
    </div>

    <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
      <LoginForm />

      <p class="mt-10 text-center text-sm text-gray-500">
        Not a member?
        {{ " " }}
        <RouterLink
          :to="Routes.SIGNUP"
          class="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
          >Create an account</RouterLink
        >
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Routes } from "@/app/router/routes";
import { ShieldCheckIcon } from "@heroicons/vue/24/outline";
</script>

<script lang="ts">
import { defineComponent } from "vue";
import LoginForm from "../ui/LoginForm/LoginForm.vue";

export default defineComponent({
  components: {
    LoginForm,
  },
});
</script>

<style lang="scss" scoped></style>
