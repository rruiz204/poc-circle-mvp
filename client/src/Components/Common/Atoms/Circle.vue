<script lang="ts" setup>
interface Size {
  small: string;
  medium: string;
};

defineProps<{
  simple: boolean;
  size: keyof Size;
}>();

const outer: Size = {
  small: "h-10 w-10",
  medium: "h-16 w-16",
};

const inner: Size = {
  small: "h-6 w-6",
  medium: "h-10 w-10",
};
</script>

<template>
  <div class="flex items-center gap-2">
    <div class="flex items-center justify-center rounded-full bg-emerald-600/20" :class="outer[size]">
      <div class="rounded-full border-2 border-emerald-500" :class="inner[size]" />
    </div>
    <span v-if="!simple" class="text-xl font-bold">Circle</span>
  </div>
</template>