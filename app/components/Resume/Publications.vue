<template>
  <section class="flex flex-col gap-6">
    <h2 class="text-2xl font-bold text-teal-800 dark:text-teal-300">Peer-Reviewed Publications</h2>
    <UTimeline :items="formattedItems" color="neutral" class="px-2">
      <template #default="{ item }">
        <div class="space-y-1.5 pb-6">
          <div class="flex items-center justify-between gap-4">
            <span class="text-xs font-mono font-bold text-teal-700 dark:text-teal-400 uppercase tracking-wider">
              {{ item.journal }} &mdash; {{ item.year }}
            </span>
            <a v-if="item.link || item.pdf" :href="item.link || item.pdf" target="_blank" rel="noopener noreferrer" class="text-xs text-teal-700 dark:text-teal-400 hover:underline flex items-center gap-1">
              <span>Full Text</span>
              <UIcon name="i-solar-export-bold" class="size-3" />
            </a>
          </div>

          <h3 class="text-sm font-bold text-zinc-900 dark:text-zinc-100 leading-snug">
            {{ item.title }}
          </h3>

          <p class="text-xs text-zinc-500 leading-relaxed">
            <span v-if="Array.isArray(item.authors)">{{ item.authors.join(', ') }}</span>
            <span v-else>{{ item.authors }}</span>
          </p>
        </div>
      </template>
    </UTimeline>
  </section>
</template>

<script setup lang="ts">
import fallbackPubs from "~/assets/files/pubs.json";

const props = defineProps<{
  items?: any[];
}>();

const formattedItems = computed(() => {
  const raw = (props.items && props.items.length > 0) ? props.items : fallbackPubs;
  const sorted = [...raw].sort((a: any, b: any) => (b.year || 0) - (a.year || 0));
  return sorted.map((x: any) => ({
    ...x,
    icon: "i-solar-document-text-bold"
  }));
});
</script>
