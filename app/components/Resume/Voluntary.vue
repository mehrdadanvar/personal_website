<template>
  <ResumeSection title="Voluntary &amp; Extracurricular Activities">
    <UTimeline :items="items" color="neutral" class="px-1">
      <template #wrapper="{ item }">
        <div class="flex flex-col-reverse sm:flex-row items-start justify-between gap-2 sm:gap-8 w-full">
          <div class="min-w-0 flex-1 space-y-1">
            <h3 class="text-lg lg:text-xl font-serif font-bold text-zinc-900 dark:text-zinc-100">
              {{ item.title }}
            </h3>
            <ul v-if="item.bullet_points?.length" class="list-disc space-y-1.5 pl-5 text-xs sm:text-sm text-zinc-600 dark:text-zinc-300 leading-relaxed pt-1 marker:text-teal-700 dark:marker:text-teal-400">
              <li v-for="(line, i) in item.bullet_points" :key="i">{{ line }}</li>
            </ul>
          </div>
          <span class="shrink-0 text-sm lg:text-base font-serif font-semibold text-teal-700 dark:text-teal-300 tabular-nums whitespace-nowrap sm:text-right pt-0.5">
            {{ formatPeriod(item.period) }}
          </span>
        </div>
      </template>
      <template #indicator>
        <span class="block size-2.5 rounded-full bg-teal-700 dark:bg-teal-400 ring-4 ring-teal-700/10 dark:ring-teal-400/15" />
      </template>
    </UTimeline>
  </ResumeSection>
</template>

<script setup lang="ts">
const props = defineProps<{
  items?: Record<string, any>[];
}>();

const items = computed(() =>
  sortTimeline(pickItems(props.items), "period", "desc"),
);
</script>
