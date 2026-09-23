<template>
  <section class="flex flex-col gap-6">
    <h2 class="text-2xl font-bold text-teal-800 dark:text-teal-300">Internships</h2>
    <UTimeline :items="formattedItems" color="neutral" class="px-2">
      <template #default="{ item }">
        <div class="space-y-1 pb-6">
          <div class="flex items-center justify-between gap-4">
            <h3 class="text-base font-bold text-zinc-900 dark:text-zinc-100">
              {{ item.title }} <span v-if="item.duration" class="text-xs font-normal text-zinc-500">({{ item.duration }} weeks)</span>
            </h3>
            <span class="text-xs font-mono font-semibold text-teal-700 dark:text-teal-400 shrink-0">
              {{ item.short_dates || formatDateRange(item.dates) }}
            </span>
          </div>

          <p class="text-xs font-medium text-zinc-600 dark:text-zinc-400">
            {{ item.location }}
          </p>
          <p v-if="item.description" class="text-xs text-zinc-500 dark:text-zinc-400 leading-relaxed pt-0.5">
            {{ item.description }}
          </p>
        </div>
      </template>
    </UTimeline>
  </section>
</template>

<script setup lang="ts">
import fallbackInternships from "~/assets/files/internships.json";

const props = defineProps<{
  items?: any[];
}>();

function formatDateRange(datesObj: any) {
  if (!datesObj) return "";
  if (typeof datesObj === "string") return datesObj;
  if (datesObj.start && datesObj.end) {
    return `${datesObj.start} – ${datesObj.end}`;
  }
  return "";
}

const formattedItems = computed(() => {
  const raw = (props.items && props.items.length > 0) ? props.items : fallbackInternships;
  return raw.map((item: any) => {
    let short_dates = item.short_dates;
    if (!short_dates && item.dates && typeof item.dates === "object") {
      const s = item.dates.start ? item.dates.start.split("-") : [];
      const e = item.dates.end ? item.dates.end.split("-") : [];
      if (s.length >= 2 && e.length >= 2) {
        short_dates = `${s[1]} ${s[0]} – ${e[1]} ${e[0]}`;
      }
    }
    return {
      ...item,
      short_dates: short_dates || formatDateRange(item.dates),
      icon: "i-solar-notes-bold"
    };
  });
});
</script>
