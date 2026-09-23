<template>
  <section class="flex flex-col gap-6">
    <h2 class="text-2xl font-bold text-teal-800 dark:text-teal-300">Exams &amp; Certifications</h2>
    <UTimeline :items="formattedItems" color="neutral" class="px-2">
      <template #default="{ item }">
        <div class="space-y-1 pb-6">
          <div class="flex items-center justify-between gap-4">
            <h3 class="text-base font-bold text-zinc-900 dark:text-zinc-100">
              {{ item.title }}
            </h3>
            <span class="text-xs font-mono font-semibold text-teal-700 dark:text-teal-400 shrink-0">
              {{ item.date }}
            </span>
          </div>

          <div v-if="item.scores && item.scores.length" class="flex flex-wrap gap-2 pt-1">
            <span
              v-for="(s, idx) in item.scores"
              :key="idx"
              class="px-2 py-0.5 rounded text-xs font-mono bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 border border-zinc-200 dark:border-zinc-700"
            >
              {{ s }}
            </span>
          </div>
        </div>
      </template>
    </UTimeline>
  </section>
</template>

<script setup lang="ts">
import fallbackExams from "~/assets/files/exams.json";

const props = defineProps<{
  items?: any[];
}>();

const formattedItems = computed(() => {
  const raw = (props.items && props.items.length > 0) ? props.items : fallbackExams;
  return raw.map((x: any) => ({
    ...x,
    icon: "i-solar-verified-check-bold"
  }));
});
</script>
