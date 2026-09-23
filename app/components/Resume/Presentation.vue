<template>
  <section class="flex flex-col gap-6">
    <h2 class="text-2xl font-bold text-teal-800 dark:text-teal-300">Presentations</h2>
    <UTimeline :items="formattedItems" color="neutral" class="px-2">
      <template #default="{ item }">
        <div class="space-y-1 pb-6">
          <div class="flex items-center justify-between gap-4">
            <h3 class="text-base font-bold text-zinc-900 dark:text-zinc-100">
              {{ item.presentation_title || item.title }}
            </h3>
            <span class="text-xs font-mono font-semibold text-teal-700 dark:text-teal-400 shrink-0">
              {{ item.date }}
            </span>
          </div>

          <p class="text-xs font-medium text-zinc-600 dark:text-zinc-400">
            {{ item.type }} <span v-if="item.conference_title">— {{ item.conference_title }}</span>
          </p>
        </div>
      </template>
    </UTimeline>
  </section>
</template>

<script setup lang="ts">
import fallbackPresentations from "~/assets/files/presentations.json";

const props = defineProps<{
  items?: any[];
}>();

const formattedItems = computed(() => {
  const raw = (props.items && props.items.length > 0) ? props.items : fallbackPresentations;
  return raw.map((x: any) => ({
    ...x,
    icon: "i-solar-videocamera-record-bold"
  }));
});
</script>
