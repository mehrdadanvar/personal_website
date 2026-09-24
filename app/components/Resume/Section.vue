<template>
  <section class="flex flex-col gap-6">
    <div class="space-y-2">
      <h2 class="text-2xl lg:text-3xl font-serif font-bold text-zinc-900 dark:text-zinc-100">
        {{ title }}
      </h2>
      <div class="h-0.5 w-10 bg-teal-700 dark:bg-teal-400 rounded-full" />
    </div>
    <slot />
  </section>
</template>

<script setup lang="ts">
defineProps<{
  title: string;
}>();
</script>
