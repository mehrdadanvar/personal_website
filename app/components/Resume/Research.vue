<template>
  <section class="flex flex-col gap-6">
    <h2 class="text-2xl font-bold text-teal-800 dark:text-teal-300">Research Experience</h2>
    <UTimeline :items="formattedItems" color="neutral" class="px-2">
      <template #default="{ item }">
        <div class="space-y-1.5 pb-6">
          <div class="flex items-center justify-between gap-4">
            <h3 class="text-base font-bold text-zinc-900 dark:text-zinc-100">
              {{ item.title }}
            </h3>
            <span class="text-xs font-mono font-semibold text-teal-700 dark:text-teal-400 shrink-0">
              {{ item.dates }}
            </span>
          </div>

          <p v-if="item.place" class="text-xs font-medium text-zinc-600 dark:text-zinc-400">
            {{ item.place }}
          </p>
          <p v-if="item.explanation" class="text-xs text-zinc-500 dark:text-zinc-400 leading-relaxed">
            {{ item.explanation }}
          </p>

          <ul v-if="item.bullet_points && item.bullet_points.length" class="space-y-1 text-xs text-zinc-600 dark:text-zinc-400 list-disc pl-4 pt-1">
            <li v-for="(bullet, idx) in item.bullet_points" :key="idx" class="leading-relaxed">
              {{ bullet }}
            </li>
          </ul>
        </div>
      </template>
    </UTimeline>
  </section>
</template>

<script setup lang="ts">
import fallbackResearch from "~/assets/files/research.json";

const props = defineProps<{
  items?: any[];
}>();

const formattedItems = computed(() => {
  const raw = (props.items && props.items.length > 0) ? props.items : fallbackResearch;
  return raw.map((x: any) => ({
    ...x,
    icon: "i-solar-test-tube-bold"
  }));
});
</script>
