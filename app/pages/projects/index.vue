<template>
  <div class="relative min-h-screen py-10 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-10">
    <!-- Header Banner -->
    <div class="relative z-10 space-y-3 border-b border-zinc-200/80 dark:border-zinc-800/80 pb-8">
      <h1 class="text-3xl sm:text-4xl font-extrabold text-zinc-900 dark:text-zinc-100 tracking-tight">
        Projects
      </h1>
      <p class="text-sm sm:text-base text-zinc-600 dark:text-zinc-300 max-w-3xl leading-relaxed">
        qliniql - a clinical software suite. Current work is in active development; full write-ups will follow.
      </p>
    </div>

    <!-- Minimal mention list (qliniql, in development) -->
    <div class="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-4">
      <div v-for="project in projectList" :key="project.name"
        class="rounded-3xl p-6 border border-zinc-200/80 dark:border-zinc-800/80 bg-white/60 dark:bg-zinc-900/50 backdrop-blur-xl shadow-xs hover:border-teal-500/40 transition-colors duration-300 flex items-start gap-4">
        <div
          class="w-10 h-10 rounded-xl bg-teal-500/10 text-teal-700 dark:text-teal-400 border border-teal-500/20 flex items-center justify-center shrink-0">
          <UIcon :name="project.icon" class="size-5" />
        </div>
        <div class="space-y-1">
          <div class="flex items-center gap-3 flex-wrap">
            <h2 class="text-base font-bold text-zinc-900 dark:text-zinc-100">
              {{ project.name }}
            </h2>
            <span
              class="px-2 py-0.5 rounded-full text-xs font-semibold bg-teal-500/10 text-teal-800 dark:text-teal-300 border border-teal-500/20">
              In Development
            </span>
          </div>
          <p class="text-sm text-zinc-600 dark:text-zinc-300 leading-relaxed">
            {{ project.description }}
          </p>
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
  title: "Projects - Mehrdad Anvar, MD, LMCC",
});

const projectList = [
  {
    name: "qliniql.drugs",
    description: "Clinical drug reference built on the Health Canada Drug Product Database - monographs, interactions, and searchable formulary data.",
    icon: "i-solar-pill-bold-duotone",
  },
  {
    name: "qliniqla.qbank",
    description: "Question bank for Canadian and US medical licensing exam preparation - MCCQE1 and USMLE style cases with working clinical reasoning.",
    icon: "i-solar-box-minimalistic-bold-duotone",
  },
];
</script>
