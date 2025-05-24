<script lang="ts" setup>
import RegisterForm from "./RegisterForm.vue";
import Circle from "@Common/Atoms/Circle.vue";
</script>

<template>
  <div class="flex min-h-screen items-center justify-center bg-zinc-950 p-4">
    <div class="w-full max-w-md space-y-3 rounded-xl border border-zinc-800 bg-zinc-900/50 p-8 shadow-2xl backdrop-blur-sm">

      <div class="space-y-2 text-center">
        <div class="flex justify-center mb-4">
          <Circle :simple="true" size="medium" />
        </div>

        <h1 class="text-2xl font-bold tracking-tight text-white">Create an account</h1>
        <p class="text-sm text-zinc-400">Sign up to get started with our platform</p>
      </div>

      <RegisterForm />
      
      <p class="text-zinc-400 text-xs text-center block font-semibold">
        Already have an account? <span class="text-emerald-500">Sign in</span>
      </p>

    </div>
  </div>
</template>