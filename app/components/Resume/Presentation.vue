<template>
  <section class="flex flex-col gap-6">
    <h2 class="text-2xl font-bold text-teal-800 dark:text-teal-300">Presentations</h2>
    <UTimeline :items="timeline" color="neutral" class="px-2">
      <template #default="{ item }">
        <div class="space-y-1 pb-6">
          <div class="flex items-center justify-between gap-4">
            <h3 class="text-base font-bold text-zinc-900 dark:text-zinc-100">
              {{ item.presentation_title }}
            </h3>
            <span class="text-xs font-mono font-semibold text-teal-700 dark:text-teal-400 shrink-0">
              {{ formatPeriod(item.date) }}
            </span>
          </div>

          <p class="text-sm font-medium text-zinc-600 dark:text-zinc-400">
            {{ item.type }} - {{ item.conference_title }}
          </p>

          <ul v-if="item.bullet_points && item.bullet_points.length"
            class="space-y-1.5 text-sm text-zinc-500 dark:text-zinc-400 list-disc pl-4 pt-1">
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
import presentationsData from "~/assets/files/presentations.json";

const props = defineProps<{
  items?: Record<string, any>[];
}>();

const timeline = computed(() =>
  sortTimeline(pickItems(props.items, presentationsData), "date", "desc").map((x) => ({
    ...x,
    icon: "i-solar-videocamera-record-bold",
  })),
);
</script>
