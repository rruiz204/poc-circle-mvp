<script lang="ts" setup>
import LandingPricingCard from './LandingPricingCard.vue';

const free = ["Up to 5 team members", "3 projects", "Basic task management", "Simple reporting"];
const professional = ["Unlimited team members", "Unlimited projects", "Advanced task management", "Custom dashboards"];
const enterprise = ["Advanced security", "Custom integrations", "99.9% uptime SLA"];
</script>

<template>
  <section id="pricing" class="border-b border-zinc-800 py-20 flex justify-center">
    <div class="container max-w-7xl px-8">

      <div class="mx-auto max-w-2xl text-center">
        <h2 class="mb-4 text-3xl font-bold tracking-tight sm:text-4xl">Simple, transparent pricing</h2>
        <p class="text-lg text-zinc-400">Choose the plan that's right for your team</p>
      </div>

      <div class="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        <LandingPricingCard title="Free" price="0" frequency="month" :features="free"
          description="For individuals and small projects" />

        <LandingPricingCard title="Pro" price="12" frequency="month" :features="professional"
          description="For growing teams and businesses" />

        <LandingPricingCard title="Enterprise" price="20" frequency="month" :features="enterprise"
          description="For large organizations with complex needs" />
      </div>

    </div>
  </section>
</template>