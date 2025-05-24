<script lang="ts" setup>
import LandingHero from './Components/LandingHero.vue';
import LandingHeader from './Components/LandingHeader.vue';
import LandingFeatures from './Components/LandingFeatures.vue';
import LandingCircleFlow from './Components/LandingCircleFlow.vue';
import LandingTestimonials from './Components/LandingTestimonials.vue';
</script>

<template>
  <div class="flex min-h-screen flex-col bg-zinc-950 text-zinc-100">
    <LandingHeader />
    <LandingHero />
    <LandingFeatures />
    <LandingCircleFlow />
    <LandingTestimonials />
  </div>
</template>