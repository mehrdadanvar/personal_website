<template>
  <div class="relative min-h-screen py-10 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-10">
    <ArtBackground src="/sample23.svg" />

    <!-- Header Banner -->
    <div class="relative z-10 space-y-3 border-b border-zinc-200/80 dark:border-zinc-800/80 pb-8">
      <div
        class="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-teal-500/10 text-teal-800 dark:text-teal-300 border border-teal-500/20">
        <UIcon name="i-solar-document-text-bold-duotone" class="size-4 text-teal-600" />
        Peer-Reviewed Research
      </div>
      <h1 class="text-3xl sm:text-4xl font-extrabold text-zinc-900 dark:text-zinc-100 tracking-tight">
        Academic Publications &amp; Research Experience
      </h1>
      <p class="text-sm sm:text-base text-zinc-600 dark:text-zinc-300 max-w-3xl leading-relaxed">
        Investigative studies in trauma epidemiology, mortality prediction, injury surveillance databases, and
        healthcare quality assessment across major medical centers.
      </p>
    </div>

    <!-- Research Experience Card -->
    <div v-if="researchItems.length"
      class="relative z-10 rounded-3xl border border-zinc-200/80 dark:border-zinc-800/80 bg-linear-to-bl from-zinc-400/10 to-white/10 dark:from-zinc-500/10 dark:to-zinc-800/20 backdrop-blur-md p-[1px]">
      <div class="rounded-3xl bg-white/80 dark:bg-black/50 p-6 sm:p-8">
        <h2 class="flex items-center gap-2 text-xl font-bold text-teal-800 dark:text-teal-300 pb-5">
          <UIcon name="i-solar-test-tube-bold" class="size-5" />
          Research Experience
        </h2>
        <div class="space-y-5">
          <div v-for="(item, idx) in researchItems" :key="item.id ?? idx"
            class="grid grid-cols-1 sm:grid-cols-[150px,1fr] gap-1 sm:gap-4">
            <span class="text-xs font-mono font-semibold text-teal-700 dark:text-teal-400 pt-1 tabular-nums">
              {{ item.dates }}
            </span>
            <div class="space-y-1.5 border-l border-zinc-200 dark:border-zinc-800 pl-4">
              <h3 class="text-base font-bold text-zinc-900 dark:text-zinc-100 leading-snug">
                {{ item.title }}
              </h3>
              <ul v-if="item.bullet_points?.length"
                class="list-disc pl-4 space-y-1 text-sm text-zinc-600 dark:text-zinc-300 leading-relaxed marker:text-teal-700 dark:marker:text-teal-400">
                <li v-for="(line, i) in item.bullet_points" :key="i">{{ line }}</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Publications List -->
    <div class="relative z-10 space-y-6">
      <div v-for="pub in sortedPublications" :key="pub.id"
        class="rounded-3xl p-6 sm:p-8 border border-zinc-200/80 dark:border-zinc-800/80 bg-white/60 dark:bg-zinc-900/50 backdrop-blur-xl shadow-xs space-y-4">
        <div
          class="flex flex-col sm:flex-row sm:items-start justify-between gap-4 border-b border-zinc-200/80 dark:border-zinc-800/80 pb-4">
          <div class="space-y-1 max-w-4xl">
            <span class="text-xs font-bold text-teal-700 dark:text-teal-400 tracking-wider">
              {{ pub.journal }} &mdash; {{ pub.year }}
            </span>
            <h2 class="text-xl font-bold text-zinc-900 dark:text-zinc-100 tracking-tight leading-snug">
              {{ pub.title }}
            </h2>
          </div>

          <a :href="pub.link" target="_blank" rel="noopener noreferrer"
            class="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl text-xs font-semibold bg-teal-500/10 hover:bg-teal-500/20 text-teal-800 dark:text-teal-300 border border-teal-500/20 transition-all shrink-0 self-start">
            <span>Full Text PDF</span>
            <UIcon name="i-solar-export-bold" class="size-3.5" />
          </a>
        </div>

        <!-- Authors List -->
        <div class="text-xs text-zinc-600 dark:text-zinc-400 flex flex-wrap gap-1 items-center">
          <span class="font-medium text-zinc-500">Authors:</span>
          <span v-for="(author, idx) in pub.authors" :key="idx" :class="[
            author === 'Mehrdad Anvar' ? 'font-bold text-zinc-900 dark:text-zinc-100 underline decoration-teal-500/50' : ''
          ]">
            {{ author }}{{ idx < pub.authors.length - 1 ? ', ' : '' }} </span>
        </div>

        <!-- Structured Abstract -->
        <div
          class="bg-zinc-50/80 dark:bg-zinc-950/40 p-5 rounded-2xl border border-zinc-200/50 dark:border-zinc-800/50 space-y-3 text-xs sm:text-sm">
          <div v-if="pub.abstract.background" class="space-y-1">
            <span
              class="font-bold text-zinc-900 dark:text-zinc-200 tracking-wider text-xs text-teal-700 dark:text-teal-400">Background:</span>
            <p class="text-zinc-600 dark:text-zinc-300 leading-relaxed">{{ pub.abstract.background }}</p>
          </div>

          <div v-if="pub.abstract.methods" class="space-y-1">
            <span
              class="font-bold text-zinc-900 dark:text-zinc-200 tracking-wider text-xs text-teal-700 dark:text-teal-400">Methods:</span>
            <p class="text-zinc-600 dark:text-zinc-300 leading-relaxed">{{ pub.abstract.methods }}</p>
          </div>

          <div v-if="pub.abstract.results" class="space-y-1">
            <span
              class="font-bold text-zinc-900 dark:text-zinc-200 tracking-wider text-xs text-teal-700 dark:text-teal-400">Results:</span>
            <p class="text-zinc-600 dark:text-zinc-300 leading-relaxed">{{ pub.abstract.results }}</p>
          </div>

          <div v-if="pub.abstract.conclusion" class="space-y-1">
            <span
              class="font-bold text-zinc-900 dark:text-zinc-200 tracking-wider text-xs text-teal-700 dark:text-teal-400">Conclusion:</span>
            <p class="text-zinc-600 dark:text-zinc-300 leading-relaxed">{{ pub.abstract.conclusion }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  layout: "default",
});

useHead({
  title: "Academic Research & Peer-Reviewed Publications — Mehrdad Anvar",
});

useSeoMeta({
  title: "Academic Research & Peer-Reviewed Publications — Mehrdad Anvar",
  description:
    "Peer-reviewed trauma epidemiology and public health research by Dr. Mehrdad Anvar, MD, LMCC: in-hospital mortality risk modeling, nosocomial infection analysis, and healthcare quality evaluation.",
  ogTitle: "Academic Research & Publications — Mehrdad Anvar, MD, LMCC",
  ogDescription:
    "Peer-reviewed studies in trauma epidemiology, mortality prediction, injury surveillance, and healthcare quality assessment.",
  ogUrl: "https://mdanvar.ca/research",
  ogType: "profile",
  twitterCard: "summary_large_image",
  twitterTitle: "Academic Research & Publications — Mehrdad Anvar, MD, LMCC",
  twitterDescription:
    "Peer-reviewed studies in trauma epidemiology, mortality prediction, and healthcare quality assessment.",
  robots: "index, follow",
});

import pubsData from "~/assets/files/pubs.json";
import researchData from "~/assets/files/research.json";

const { data: docs } = await useFetch("/api/getDocuments?route=/vita", {
  default: () => [] as Record<string, any>[],
});

function dbItems(sectionName: string, fallback: Record<string, any>[]): Record<string, any>[] {
  const list = (docs.value as Record<string, any>[] | null) ?? [];
  const doc = list.find((d) => d.section === sectionName);
  return doc && Array.isArray(doc.items) && doc.items.length > 0 ? doc.items : fallback;
}

const researchItems = computed(() => dbItems("research experience", researchData));

const sortedPublications = computed(() => {
  return [...dbItems("publications", pubsData)].sort((a, b) => b.year - a.year);
});
</script>
