<template>
  <ResumeSection title="Education">
    <UTimeline :items="items" color="neutral" class="px-1">
      <template #wrapper="{ item }">
        <div class="flex flex-col-reverse sm:flex-row items-start justify-between gap-2 sm:gap-8 w-full">
          <div class="min-w-0 flex-1 space-y-1">
            <h3 class="text-lg lg:text-xl font-bold text-zinc-900 dark:text-zinc-100">
              {{ item.degree }}
            </h3>
            <p class="text-sm lg:text-base font-medium text-zinc-600 dark:text-zinc-300">
              {{ item.school }}
            </p>
            <p class="text-sm text-zinc-500 dark:text-zinc-400">
              {{ item.location }}
            </p>
            <p v-if="item.remarks" class="text-xs sm:text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed pt-1">
              <sup class="text-teal-700 dark:text-teal-300">1</sup> {{ item.remarks }}
            </p>
          </div>
          <span class="shrink-0 text-sm lg:text-base font-semibold text-teal-700 dark:text-teal-300 tabular-nums whitespace-nowrap sm:text-right pt-0.5">
            {{ item.dates }}
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
  sortTimeline(pickItems(props.items, fallbackEducation), "dates", "asc"),
);

const fallbackEducation = [
  {
    degree: "Doctor of Medicine",
    school: "Shiraz University of Medical Sciences",
    location: "Shiraz, Iran",
    dates: "09/2007 - 12/2015",
  },
  {
    degree: "Master of Science in Health and Human Services",
    school: "Fairleigh Dickinson University",
    location: "Vancouver, British Columbia",
    dates: "09/2021 - 06/2023",
  },
];
</script>
