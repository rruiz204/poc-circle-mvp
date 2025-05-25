<script lang="ts" setup>
import ScrollIcon from "@Assets/Icons/scroll.svg";
</script>

<template>
  <section class="relative overflow-hidden border-b border-zinc-800 py-32 md:py-40">
    <div class="container relative z-10 mx-auto px-4 text-center">

      <div class="mx-auto max-w-3xl">
        <h1 class="mb-6 text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
          Project management that <span className="text-emerald-500">closes the loop</span>
        </h1>
        <p className="mb-10 text-xl text-zinc-400">
          Circle brings your tasks, teams, and tools together in one place, making
          <br> collaboration seamless and projects successful.
        </p>

        <img :src="ScrollIcon" alt="" height="40" width="40" class="mx-auto">
      </div>

    </div>
  </section>
</template>