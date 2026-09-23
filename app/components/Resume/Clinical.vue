<template>
  <section class="flex flex-col gap-6">
    <h2 class="text-2xl font-bold text-teal-800 dark:text-teal-300">Clinical Experience</h2>
    <UTimeline :items="formattedItems" color="neutral" class="px-2">
      <template #default="{ item }">
        <div class="space-y-2 pb-8">
          <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
            <h3 class="text-lg font-bold text-zinc-900 dark:text-zinc-100">
              {{ item.title }}
            </h3>
            <span class="text-xs font-mono font-semibold text-teal-700 dark:text-teal-400 shrink-0">
              {{ item.period || (item.start ? `${item.start} - ${item.end}` : '') }}
            </span>
          </div>

          <p class="text-xs font-medium text-zinc-600 dark:text-zinc-400">
            {{ item.place || item.center }} <span v-if="item.geo && item.geo.length">({{ Array.isArray(item.geo) ? item.geo.join(', ') : item.geo }})</span>
            <span v-else-if="item.location">({{ item.location }})</span>
          </p>

          <ul v-if="Array.isArray(item.definition) || Array.isArray(item.description)" class="space-y-1 text-xs text-zinc-600 dark:text-zinc-300 list-disc pl-4 pt-1">
            <li v-for="(def, idx) in (item.definition || item.description)" :key="idx" class="leading-relaxed">
              {{ def }}
            </li>
          </ul>
          <p v-else-if="item.definition || item.description" class="text-xs text-zinc-600 dark:text-zinc-300 leading-relaxed pt-1">
            {{ item.definition || item.description }}
          </p>
        </div>
      </template>
    </UTimeline>
  </section>
</template>

<script setup lang="ts">
import fallbackClinics from "~/assets/files/clinics.json";

const props = defineProps<{
  items?: any[];
}>();

const formattedItems = computed(() => {
  const raw = (props.items && props.items.length > 0) ? props.items : fallbackClinics;
  return raw.map((x: any) => ({
    ...x,
    icon: "i-solar-medical-kit-bold"
  }));
});
</script>
