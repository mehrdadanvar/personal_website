<template>
  <section class="flex flex-col gap-6">
    <h2 class="text-2xl font-bold text-teal-800 dark:text-teal-300">Education</h2>
    <UTimeline :items="formattedItems" color="neutral" class="px-2">
      <template #default="{ item }">
        <div class="space-y-1 pb-6">
          <span class="text-xs font-mono font-semibold text-teal-700 dark:text-teal-400 block">
            {{ item.dates || item.start ? `${item.start} - ${item.end}` : item.date }}
          </span>
          <h3 class="text-lg font-bold text-zinc-900 dark:text-zinc-100">
            {{ item.name || item.title }}
          </h3>
          <p class="text-xs font-medium text-zinc-600 dark:text-zinc-400">
            {{ item.major || item.level }} {{ item.location ? `— ${item.location}` : '' }}
          </p>
          <p v-if="item.remarks" class="text-xs text-zinc-500 dark:text-zinc-400 leading-relaxed pt-1">
            {{ item.remarks }}
          </p>
        </div>
      </template>
    </UTimeline>
  </section>
</template>

<script setup lang="ts">
import fallbackSchools from "~/assets/files/schools.json";

const props = defineProps<{
  items?: any[];
}>();

const formattedItems = computed(() => {
  const raw = (props.items && props.items.length > 0) ? props.items : fallbackSchools;
  return raw.map((x: any) => ({
    ...x,
    icon: "i-solar-academic-cap-bold"
  }));
});
</script>
