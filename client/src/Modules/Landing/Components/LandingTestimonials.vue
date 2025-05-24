<script lang="ts" setup>
import LandingTestimonialsCard from './LandingTestimonialsCard.vue';
</script>

<template>
  <section class="border-b border-zinc-800 py-20 flex justify-center">
    <div class="container max-w-7xl px-8">

      <div class="mx-auto max-w-2xl text-center">
        <h2 class="mb-4 text-3xl font-bold tracking-tight sm:text-4xl">Trusted by teams worldwide</h2>
        <p class="text-lg text-zinc-400">See what our customers have to say about Circle</p>
      </div>

      <div class="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        <LandingTestimonialsCard :stars="5" author="Sarah Johnson" role="Product Manager, Acme Inc."
          comment="Circle has transformed how our team collaborates. We've reduced meeting time by 30% and increased productivity across all departments." />

        <LandingTestimonialsCard :stars="4" author="Michael Chen" role="CTO, TechFlow."
          comment="The automation features in Circle have saved us countless hours. What used to take days now happens automatically in the background." />

        <LandingTestimonialsCard :stars="5" author="Elena Rodriguez" role="Team Lead, RemoteWorks."
          comment="As a remote team, Circle has been our central hub for everything. The integrated chat and task management keeps everyone on the same page." />
      </div>

    </div>
  </section>
</template>