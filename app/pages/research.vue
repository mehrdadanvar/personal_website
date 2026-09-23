<template>
  <div class="relative min-h-screen py-10 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-10">
    <title>Academic Research &amp; Peer-Reviewed Publications — Dr. Mehrdad Anvar</title>

    <!-- SVG Background Overlay with enhanced visibility -->
    <div
      class="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[650px] pointer-events-none opacity-40 dark:opacity-30 bg-top bg-no-repeat bg-contain z-0"
      style="background-image: url('/sample23.svg');"
    ></div>

    <!-- Header Banner -->
    <div class="relative z-10 space-y-3 border-b border-zinc-200/80 dark:border-zinc-800/80 pb-8">
      <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-teal-500/10 text-teal-800 dark:text-teal-300 border border-teal-500/20">
        <UIcon name="i-solar-document-text-bold-duotone" class="size-4 text-teal-600" />
        PubMed &amp; Embase Peer-Reviewed Research
      </div>
      <h1 class="text-3xl sm:text-4xl font-extrabold text-zinc-900 dark:text-zinc-100 tracking-tight">
        Academic Publications &amp; Research Index
      </h1>
      <p class="text-sm sm:text-base text-zinc-600 dark:text-zinc-300 max-w-3xl leading-relaxed">
        Investigative studies in trauma epidemiology, mortality prediction algorithms, injury surveillance databases, and healthcare quality assessment across major medical centers.
      </p>
    </div>

    <!-- Research Metrics Summary (Clean Dark Teal Accent) -->
    <div class="relative z-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      <div class="rounded-2xl p-5 border border-zinc-200/80 dark:border-zinc-800/80 bg-white/80 dark:bg-zinc-900/70 backdrop-blur-xl shadow-xs">
        <div class="text-xs font-semibold uppercase tracking-wider text-zinc-500 mb-1">Indexed Journal Articles</div>
        <div class="text-3xl font-extrabold text-zinc-900 dark:text-zinc-100">6 Manuscripts</div>
        <p class="text-xs text-zinc-500 mt-1">Medicine, CJTEE, IRCMJ, Razavi IJMed</p>
      </div>

      <div class="rounded-2xl p-5 border border-zinc-200/80 dark:border-zinc-800/80 bg-white/80 dark:bg-zinc-900/70 backdrop-blur-xl shadow-xs">
        <div class="text-xs font-semibold uppercase tracking-wider text-zinc-500 mb-1">Primary Methodology</div>
        <div class="text-3xl font-extrabold text-teal-700 dark:text-teal-400">Logistic Reg.</div>
        <p class="text-xs text-zinc-500 mt-1">Odds ratios, AIS-98 / ICD-10 mapping</p>
      </div>

      <div class="rounded-2xl p-5 border border-zinc-200/80 dark:border-zinc-800/80 bg-white/80 dark:bg-zinc-900/70 backdrop-blur-xl shadow-xs">
        <div class="text-xs font-semibold uppercase tracking-wider text-zinc-500 mb-1">Database Scope</div>
        <div class="text-3xl font-extrabold text-teal-700 dark:text-teal-400">47,000+ Cohort</div>
        <p class="text-xs text-zinc-500 mt-1">Level 1 Trauma Center Registries</p>
      </div>

      <div class="rounded-2xl p-5 border border-zinc-200/80 dark:border-zinc-800/80 bg-white/80 dark:bg-zinc-900/70 backdrop-blur-xl shadow-xs">
        <div class="text-xs font-semibold uppercase tracking-wider text-zinc-500 mb-1">Scholarly Databases</div>
        <div class="text-3xl font-extrabold text-zinc-900 dark:text-zinc-100">PubMed / PMC</div>
        <p class="text-xs text-zinc-500 mt-1">Full-text open access links available</p>
      </div>
    </div>

    <!-- Publications List -->
    <div class="relative z-10 space-y-6">
      <div
        v-for="pub in sortedPublications"
        :key="pub.id"
        class="rounded-3xl p-6 sm:p-8 border border-zinc-200/80 dark:border-zinc-800/80 bg-white/80 dark:bg-zinc-900/70 backdrop-blur-xl shadow-xs space-y-4"
      >
        <div class="flex flex-col sm:flex-row sm:items-start justify-between gap-4 border-b border-zinc-200/80 dark:border-zinc-800/80 pb-4">
          <div class="space-y-1 max-w-4xl">
            <span class="text-xs font-bold text-teal-700 dark:text-teal-400 uppercase tracking-wider">
              {{ pub.journal }} &mdash; {{ pub.year }}
            </span>
            <h2 class="text-xl font-bold text-zinc-900 dark:text-zinc-100 tracking-tight leading-snug">
              {{ pub.title }}
            </h2>
          </div>

          <a
            :href="pub.link"
            target="_blank"
            rel="noopener noreferrer"
            class="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl text-xs font-semibold bg-teal-500/10 hover:bg-teal-500/20 text-teal-800 dark:text-teal-300 border border-teal-500/20 transition-all shrink-0 self-start"
          >
            <span>Full Text PDF</span>
            <UIcon name="i-solar-export-bold" class="size-3.5" />
          </a>
        </div>

        <!-- Authors List -->
        <div class="text-xs text-zinc-600 dark:text-zinc-400 flex flex-wrap gap-1 items-center">
          <span class="font-medium text-zinc-500">Authors:</span>
          <span
            v-for="(author, idx) in pub.authors"
            :key="idx"
            :class="[
              author === 'Mehrdad Anvar' ? 'font-bold text-zinc-900 dark:text-zinc-100 underline decoration-teal-500/50' : ''
            ]"
          >
            {{ author }}{{ idx < pub.authors.length - 1 ? ', ' : '' }}
          </span>
        </div>

        <!-- Structured Abstract -->
        <div class="bg-zinc-50/80 dark:bg-zinc-950/40 p-5 rounded-2xl border border-zinc-200/50 dark:border-zinc-800/50 space-y-3 text-xs sm:text-sm">
          <div v-if="pub.abstract.background" class="space-y-1">
            <span class="font-bold text-zinc-900 dark:text-zinc-200 uppercase tracking-wider text-xs text-teal-700 dark:text-teal-400">Background:</span>
            <p class="text-zinc-600 dark:text-zinc-300 leading-relaxed">{{ pub.abstract.background }}</p>
          </div>

          <div v-if="pub.abstract.methods" class="space-y-1">
            <span class="font-bold text-zinc-900 dark:text-zinc-200 uppercase tracking-wider text-xs text-teal-700 dark:text-teal-400">Methods:</span>
            <p class="text-zinc-600 dark:text-zinc-300 leading-relaxed">{{ pub.abstract.methods }}</p>
          </div>

          <div v-if="pub.abstract.results" class="space-y-1">
            <span class="font-bold text-zinc-900 dark:text-zinc-200 uppercase tracking-wider text-xs text-teal-700 dark:text-teal-400">Results:</span>
            <p class="text-zinc-600 dark:text-zinc-300 leading-relaxed">{{ pub.abstract.results }}</p>
          </div>

          <div v-if="pub.abstract.conclusion" class="space-y-1">
            <span class="font-bold text-zinc-900 dark:text-zinc-200 uppercase tracking-wider text-xs text-teal-700 dark:text-teal-400">Conclusion:</span>
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

import pubs from "~/assets/files/pubs.json";

const sortedPublications = computed(() => {
  return [...pubs].sort((a, b) => b.year - a.year);
});
</script>
