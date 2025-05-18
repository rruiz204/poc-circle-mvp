<script lang="ts" setup>
import RegisterForm from './RegisterForm.vue';
</script>

<template>
  <div class="flex min-h-screen items-center justify-center bg-gradient-to-br from-zinc-950 to-zinc-900 p-4">
    <div class="w-full max-w-md space-y-6 rounded-xl border border-zinc-800 bg-zinc-900/50 p-8 shadow-2xl backdrop-blur-sm">

      <div class="space-y-2 text-center">
        <div class="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-emerald-900/20 p-3">
          <div class="h-8 w-8 rounded-full bg-zinc-600/50"></div>
        </div>

        <h1 class="text-2xl font-bold tracking-tight text-white">Create an account</h1>
        <p class="text-sm text-zinc-400">Sign up to get started with our platform</p>
      </div>

      <RegisterForm />

    </div>
  </div>
</template>