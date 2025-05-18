<script lang="ts" setup>
import Message from "primevue/message";

defineProps<{
  form?: any;
  name: string;
  label: string;
}>();
</script>

<template>
  <div class="flex flex-col gap-1">
    <label :for="name" class="text-zinc-400">{{ label }}</label>
    <slot></slot>
    <Message v-if="form?.invalid" severity="error" size="small" variant="simple">
      {{ form.error?.message }}
    </Message>
  </div>
</template>