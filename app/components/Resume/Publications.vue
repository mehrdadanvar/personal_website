<template>
  <ResumeSection title="Publications">
    <UTimeline :items="items" color="neutral" class="px-1">
      <template #wrapper="{ item }">
        <div class="flex flex-col-reverse sm:flex-row items-start justify-between gap-2 sm:gap-8 w-full">
          <div class="min-w-0 flex-1 space-y-1">
            <h3 class="text-base lg:text-lg font-bold text-zinc-900 dark:text-zinc-100 leading-snug">
              {{ item.title }}
            </h3>
            <p class="text-sm text-zinc-600 dark:text-zinc-300">
              <a
                v-if="item.link || item.pdf"
                :href="item.link || item.pdf"
                target="_blank"
                rel="noopener noreferrer"
                class="underline decoration-teal-700/40 dark:decoration-teal-400/40 underline-offset-4 hover:text-teal-700 dark:hover:text-teal-300"
              >{{ item.journal }}</a>
              <span v-else>{{ item.journal }}</span>
            </p>
            <p class="text-xs sm:text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed">
              <template v-for="(author, i) in item.authors" :key="author">
                <span :class="{ 'text-teal-700 dark:text-teal-300 font-semibold': isMe(author) }">{{ author }}</span><span v-if="i < item.authors.length - 1">{{ ", " }}</span>
              </template>
            </p>
            <button
              v-if="item.abstract"
              type="button"
              class="inline-flex items-center gap-1 text-xs sm:text-sm font-semibold text-teal-700 dark:text-teal-300 hover:underline"
              @click="toggle(item)"
            >
              <span>Abstract</span>
              <UIcon
                name="i-solar-double-alt-arrow-down-line-duotone"
                class="size-3.5 transition-transform duration-150"
                :class="isOpen(item) ? 'rotate-180' : ''"
              />
            </button>
            <div v-if="item.abstract && isOpen(item)" class="space-y-1.5 text-xs sm:text-sm text-zinc-500 dark:text-zinc-400 text-justify leading-relaxed">
              <p v-for="(value, key) in item.abstract" :key="key">
                <span class="font-semibold text-zinc-600 dark:text-zinc-300">{{ key }}:</span> {{ value }}
              </p>
            </div>
          </div>
          <span class="shrink-0 text-sm lg:text-base font-semibold text-teal-700 dark:text-teal-300 tabular-nums whitespace-nowrap sm:text-right pt-0.5">
            {{ item.year }}
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
import pubsData from "~/assets/files/pubs.json";

const props = defineProps<{
  items?: Record<string, any>[];
}>();

const openIds = ref<Set<string>>(new Set());

function pubKey(item: Record<string, any>): string {
  return String(item._id ?? item.id ?? item.title);
}

function isOpen(item: Record<string, any>): boolean {
  return openIds.value.has(pubKey(item));
}

function toggle(item: Record<string, any>) {
  const key = pubKey(item);
  const next = new Set(openIds.value);
  if (next.has(key)) {
    next.delete(key);
  } else {
    next.add(key);
  }
  openIds.value = next;
}

const items = computed(() =>
  sortByFieldDesc(pickItems(props.items, pubsData), "id"),
);
</script>
