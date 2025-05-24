<script lang="ts" setup>
defineProps<{
  icon: string;
  title: string;
  description: string;
}>();
</script>

<template>
  <div class="rounded-xl border border-zinc-800 bg-zinc-900/50 p-6">
    <div class="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-emerald-500/20">
      <img :src="icon" alt="" height="24" width="24">
    </div>

    <h3 className="mb-2 text-xl font-semibold">{{ title }}</h3>
    <p class="text-zinc-400">{{ description }}</p>
  </div>
</template>