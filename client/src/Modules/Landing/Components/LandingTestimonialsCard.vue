<script lang="ts" setup>
import StarIcon from "@Assets/Icons/star.svg";

const props = defineProps<{
  role: string;
  stars: number;
  author: string;
  comment: string;
}>();

const stars = Array.from({ length: props.stars }, (_, i) => i + 1);
</script>

<template>
  <div class="rounded-xl border border-zinc-800 bg-zinc-900/50 p-6">

    <div class="mb-4 flex">
      <img v-for="star in stars" :key="star" :src="StarIcon" alt="" height="20" width="20">
    </div>

    <blockquote class="mb-4 text-zinc-300">"{{ comment }}"</blockquote>

    <div class="flex items-center gap-4">
      <div class="h-10 w-10 rounded-full bg-zinc-800"></div>
      <div>
        <p class="font-medium">{{ author }}</p>
        <p class="text-sm text-zinc-500">{{ role }}</p>
      </div>
    </div>

  </div>
</template>