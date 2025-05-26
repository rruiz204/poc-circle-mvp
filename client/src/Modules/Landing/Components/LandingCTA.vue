<script lang="ts" setup>
import Button from "primevue/button";
import Circle from "@Common/Atoms/Circle.vue";
</script>

<template>
  <section class="py-20 flex justify-center">
    <div class="container px-8">

      <div class="mx-auto max-w-4xl rounded-2xl border border-zinc-800 bg-zinc-900/50 p-8 text-center sm:p-12">
        <div class="flex justify-center mb-6">
          <Circle :simple="true" size="medium" />
        </div>

        <h2 class="mb-4 text-xl md:text-3xl font-bold tracking-tight sm:text-4xl">Ready to close the loop?</h2>
        <p class="mx-auto mb-8 max-w-2xl md:text-lg text-zinc-400">
          Join thousands of teams already using Circle to streamline their projects and boost productivity.
        </p>

        <div class="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button type="button" size="large">
            <p class="font-semibold text-base">Start your free trial</p>
          </Button>
          <Button type="button" size="large" severity="secondary">
            <p class="font-semibold text-base">Schedule a demo</p>
          </Button>
        </div>

        <p class="mt-6 text-sm text-zinc-500">No credit card required • 14-day free trial • Cancel anytime</p>
      </div>

    </div>
  </section>
</template>