<script lang="ts" setup>
import LandingCircleFlowCard from './LandingCircleFlowCard.vue';
</script>

<template>
  <section id="solutions" class="border-b border-zinc-800 py-20 flex justify-center">
    <div class="container max-w-7xl px-8">

      <div class="mx-auto max-w-2xl text-center">
        <h2 class="mb-4 text-3xl font-bold tracking-tight sm:text-4xl">
          How Circle works
        </h2>
        <p class="text-lg text-zinc-400">
          A simple yet powerful workflow that adapts to your team's needs
        </p>
      </div>

      <div class="mt-16 grid gap-12 lg:grid-cols-3">
        <LandingCircleFlowCard step="1" title="Plan your work"
          description="Create projects, set goals, and break down work into manageable tasks with custom fields and priorities." />

        <LandingCircleFlowCard step="2" title="Collaborate seamlessly"
          description="Assign tasks, share files, and communicate in real-time with your team to keep projects moving forward." />

        <LandingCircleFlowCard step="3" title="Track and improve"
          description="Monitor progress with visual dashboards, generate reports, and continuously improve your processes." />
      </div>

    </div>
  </section>
</template>