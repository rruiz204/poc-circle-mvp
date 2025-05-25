<script lang="ts" setup>
defineProps<{
  step: string;
  title: string;
  description: string;
}>();
</script>

<template>
  <div class="rounded-xl border border-zinc-800 p-6">
    <div class="mb-4 flex h-14 w-14 items-center justify-center rounded-full border border-zinc-800 bg-zinc-900 text-xl font-bold">
      <p>{{ step }}</p>
    </div>
    <h3 class="mb-4 text-xl font-semibold underline underline-offset-8 decoration-emerald-500">{{ title }}</h3>
    <p class="text-zinc-400">{{ description }}</p>
  </div>
</template>