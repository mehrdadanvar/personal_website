<template>
  <ResumeSection title="Licensure">
    <UTimeline :items="items" color="neutral" class="px-1">
      <template #wrapper="{ item }">
        <div class="flex sm:flex-row items-start sm:items-baseline justify-between gap-1 sm:gap-6 w-full">
          <h3 class="min-w-0 flex-1 text-base lg:text-lg font-bold text-zinc-900 dark:text-zinc-100">
            {{ item.title }}, <span class="font-medium text-zinc-600 dark:text-zinc-300">{{ item.detail }}</span>
          </h3>
          <span class="shrink-0 text-sm lg:text-base font-semibold text-teal-700 dark:text-teal-300 tabular-nums whitespace-nowrap sm:text-right">
            {{ item.date }}
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
  sortTimeline(pickItems(props.items), "date", "desc"),
);
</script>
