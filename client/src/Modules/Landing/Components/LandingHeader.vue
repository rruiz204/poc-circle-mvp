<script lang="ts" setup>
import Button from "primevue/button";
import Circle from "@Common/Atoms/Circle.vue";
</script>

<template>
  <header class="sticky top-0 z-40 border-b border-zinc-800 bg-zinc-950/80 backdrop-blur-sm">
    <div class="flex h-18 items-center justify-between px-6 md:px-18">

      <Circle :simple="false" size="small" />

      <nav class="hidden md:flex items-center gap-6">
        <RouterLink to="/" class="text-sm text-zinc-400 hover:text-zinc-100 duration-200">Features</RouterLink>
        <RouterLink to="/" class="text-sm text-zinc-400 hover:text-zinc-100 duration-200">Solutions</RouterLink>
        <RouterLink to="/" class="text-sm text-zinc-400 hover:text-zinc-100 duration-200">Pricing</RouterLink>
        <RouterLink to="/" class="text-sm text-zinc-400 hover:text-zinc-100 duration-200">Testimonials</RouterLink>
      </nav>

      <div class="flex items-center gap-3">
        <Button type="button" size="small" severity="secondary">
          <RouterLink to="/login" class="font-semibold">Login</RouterLink>
        </Button>
        <Button type="button" size="small">
          <p class="font-semibold">Get Started</p>
        </Button>
      </div>

    </div>
  </header>
</template>