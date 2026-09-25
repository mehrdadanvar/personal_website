<template>
  <ResumeSection title="Examinations">
    <UTimeline :items="items" color="neutral" class="px-1">
      <template #wrapper="{ item }">
        <div class="flex sm:flex-row items-start sm:items-baseline justify-between gap-1 sm:gap-6 w-full">
          <div class="min-w-0 flex-1 space-y-0.5">
            <h3 class="text-base lg:text-lg font-serif font-bold text-zinc-900 dark:text-zinc-100">
              {{ item.title }}
            </h3>
            <p v-if="item.scores?.length" class="text-sm text-zinc-500 dark:text-zinc-400">
              {{ item.scores.join(' - ') }}
            </p>
          </div>
          <span
            class="shrink-0 text-sm lg:text-base font-serif font-semibold text-teal-700 dark:text-teal-300 tabular-nums whitespace-nowrap sm:text-right">
            {{ item.date }}
          </span>
        </div>
      </template>
      <template #indicator>
        <span
          class="block size-2.5 rounded-full bg-teal-700 dark:bg-teal-400 ring-4 ring-teal-700/10 dark:ring-teal-400/15" />
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
