<script lang="ts" setup>
import CheckIcon from "@Assets/Icons/check.svg";

defineProps<{
  title: string;
  price: string;
  frequency: string;
  features: string[];
  description: string;
}>();
</script>

<template>
  <div class="rounded-xl border border-emerald-500/50 bg-zinc-900/50 shadow-lg shadow-emerald-500/10 p-6">
    <div class="mb-4">

      <h3 class="text-xl font-semibold">{{ title }}</h3>
      <div class="mt-2 flex items-baseline">
        <span class="text-3xl font-bold">${{ price }}</span>
        <span class="ml-1 text-zinc-500">/{{ frequency }}</span>
      </div>
      <p class="my-2 text-sm text-zinc-400">{{ description }}</p>

      <ul class="mb-6 space-y-2">
        <li v-for="feature in features" :key="feature" class="flex gap-1 items-center">
          <img :src="CheckIcon" alt="" height="20" width="20">
          <p>{{ feature }}</p>
        </li>
      </ul>

    </div>
  </div>
</template>
