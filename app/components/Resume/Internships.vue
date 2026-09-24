<template>
  <ResumeSection title="Internships">
    <UTimeline :items="items" color="neutral" class="px-1">
      <template #wrapper="{ item }">
        <div class="flex flex-col-reverse sm:flex-row items-start justify-between gap-1 sm:gap-6 w-full">
          <div class="min-w-0 flex-1 space-y-0.5">
            <h3 class="text-base lg:text-lg font-serif font-bold text-zinc-900 dark:text-zinc-100">
              {{ item.title }}
              <span class="text-xs sm:text-sm text-zinc-500">({{ item.duration }} weeks)</span>
            </h3>
            <p class="text-sm text-zinc-500 dark:text-zinc-400">
              {{ item.description }}
            </p>
          </div>
          <span class="shrink-0 text-xs sm:text-sm font-serif font-medium text-teal-700 dark:text-teal-300 tabular-nums whitespace-nowrap sm:text-right pt-0.5">
            {{ usDateRange(item.dates?.start, item.dates?.end) }}
          </span>
        </div>
      </template>
      <template #indicator>
        <span class="block size-2 rounded-full bg-teal-700/80 dark:bg-teal-400/80 ring-3 ring-teal-700/10 dark:ring-teal-400/15" />
      </template>
    </UTimeline>
  </ResumeSection>
</template>

<script setup lang="ts">
const props = defineProps<{
  items?: Record<string, any>[];
}>();

const items = computed(() =>
  sortTimeline(
    pickItems(props.items).map((item) => ({
      ...item,
      start_date: item.dates?.start ?? "",
    })),
    "start_date",
    "asc",
  ),
);
</script>
