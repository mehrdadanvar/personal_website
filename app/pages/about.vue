<template>
  <div class="relative min-h-screen py-10 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-10">
    <title>About Mehrdad Anvar</title>

    <ArtBackground src="/sample6.svg" />

    <!-- Header Banner -->
    <div class="relative z-10 space-y-3 border-b border-zinc-200/80 dark:border-zinc-800/80 pb-8">
      <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-teal-500/10 text-teal-800 dark:text-teal-300 border border-teal-500/20">
        <UIcon name="i-solar-user-id-bold-duotone" class="size-4 text-teal-600" />
        Academic & Professional Profile
      </div>
      <h1 class="text-3xl sm:text-4xl font-extrabold text-zinc-900 dark:text-zinc-100 tracking-tight">
        About Mehrdad Anvar
      </h1>
      <p class="text-sm sm:text-base text-zinc-600 dark:text-zinc-300 max-w-3xl leading-relaxed">
        Physician, Population &amp; Public Health Researcher, and Health Data Systems Developer. Integrating clinical medicine with quantitative statistics and modern web engineering.
      </p>
    </div>

    <!-- Terminal (restored from main) in the bento grid -->
    <div class="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-6">
      <div
        class="lg:col-span-7 rounded-3xl border border-zinc-200/80 dark:border-zinc-800/80 bg-white/60 dark:bg-zinc-900/50 backdrop-blur-xl shadow-xs p-5 sm:p-8">
        <HeroTerminal1 />
      </div>

      <!-- Bento Card: Strategic Pillars (5 cols) -->
      <div class="lg:col-span-5 rounded-3xl p-6 sm:p-8 border border-zinc-200/80 dark:border-zinc-800/80 bg-white/60 dark:bg-zinc-900/50 backdrop-blur-xl shadow-xs space-y-4 flex flex-col justify-between">
        <div class="space-y-4">
          <div class="flex items-center gap-3 text-teal-700 dark:text-teal-400">
            <div class="w-10 h-10 rounded-xl bg-teal-500/10 border border-teal-500/20 flex items-center justify-center">
              <UIcon name="i-solar-target-bold-duotone" class="size-5" />
            </div>
            <div>
              <h2 class="text-xl font-bold text-zinc-900 dark:text-zinc-100">Dual Core Goals</h2>
              <p class="text-xs text-zinc-500">Methodology &amp; Systems Architecture</p>
            </div>
          </div>

          <div class="space-y-3 text-xs sm:text-sm">
            <div class="p-4 rounded-2xl bg-zinc-50/80 dark:bg-zinc-950/40 border border-zinc-200/50 dark:border-zinc-800/50 space-y-1">
              <span class="font-semibold text-zinc-900 dark:text-zinc-100 flex items-center gap-1.5">
                <UIcon name="i-solar-check-read-bold" class="size-4 text-teal-600 dark:text-teal-400" />
                1. Quantitative Methodologies
              </span>
              <p class="text-zinc-600 dark:text-zinc-400">
                Mastering statistical modeling, regression analysis, and computational data processing to uncover trauma predictors and infection risk factors.
              </p>
            </div>

            <div class="p-4 rounded-2xl bg-zinc-50/80 dark:bg-zinc-950/40 border border-zinc-200/50 dark:border-zinc-800/50 space-y-1">
              <span class="font-semibold text-zinc-900 dark:text-zinc-100 flex items-center gap-1.5">
                <UIcon name="i-solar-check-read-bold" class="size-4 text-teal-600 dark:text-teal-400" />
                2. Practical Research Implementation
              </span>
              <p class="text-zinc-600 dark:text-zinc-400">
                Translating clinical hypotheses into structured protocol designs, peer-reviewed publications, and web-accessible clinical platforms.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Bento Card: Early Journey & Foundation (12 cols) -->
    <div class="relative z-10 rounded-3xl p-6 sm:p-8 border border-zinc-200/80 dark:border-zinc-800/80 bg-white/60 dark:bg-zinc-900/50 backdrop-blur-xl shadow-xs space-y-4">
      <div class="flex items-center gap-3 text-teal-700 dark:text-teal-400">
        <div class="w-10 h-10 rounded-xl bg-teal-500/10 border border-teal-500/20 flex items-center justify-center">
          <UIcon name="i-solar-history-bold-duotone" class="size-5" />
        </div>
        <div>
          <h2 class="text-xl font-bold text-zinc-900 dark:text-zinc-100">Academic Roots & Medical Training</h2>
          <p class="text-xs text-zinc-500">Shiraz University of Medical Sciences</p>
        </div>
      </div>

      <p class="text-xs sm:text-sm text-zinc-600 dark:text-zinc-300 leading-relaxed">
        I was raised in an academic environment in southwest Iran. My mother served as the head of a university school of nursing, instilling in me an early fascination with human physiology, health systems, and science. This foundation naturally led me to pursue biology and ultimately complete eight years of intensive medical education at Shiraz University of Medical Sciences.
      </p>

      <p class="text-xs sm:text-sm text-zinc-600 dark:text-zinc-300 leading-relaxed">
        Throughout clinical rotations and patient care, I recognized that addressing health outcomes required more than bedside intervention &mdash; it demanded population-level insights, administrative data surveillance, and systematic tool design to assist healthcare providers.
      </p>
    </div>

    <!-- Bento Card 3: Research & Data Engineering Spectrum (12 cols) -->
    <div class="relative z-10 rounded-3xl p-6 sm:p-8 border border-zinc-200/80 dark:border-zinc-800/80 bg-white/60 dark:bg-zinc-900/50 backdrop-blur-xl shadow-xs space-y-6">
      <div class="flex items-center justify-between border-b border-zinc-200/80 dark:border-zinc-800/80 pb-4">
        <h2 class="text-xl font-bold text-zinc-900 dark:text-zinc-100 tracking-tight">
          Interdisciplinary Scope: Medicine & Data Science
        </h2>
        <span class="text-xs font-mono text-teal-700 dark:text-teal-400">Clinical & Technical Synthesis</span>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-6 text-xs sm:text-sm">
        <div class="space-y-2">
          <h3 class="font-bold text-zinc-900 dark:text-zinc-100 text-sm flex items-center gap-1.5">
            <UIcon name="i-solar-notes-bold-duotone" class="size-4 text-teal-600 dark:text-teal-400" />
            Epidemiologic Surveillance
          </h3>
          <p class="text-zinc-600 dark:text-zinc-400 leading-relaxed">
            Experience analyzing large administrative datasets (>47,000 trauma patient cohorts) to evaluate mortality trends, head/thoracic risk factors, and bimodal mortality curves.
          </p>
        </div>

        <div class="space-y-2">
          <h3 class="font-bold text-zinc-900 dark:text-zinc-100 text-sm flex items-center gap-1.5">
            <UIcon name="i-solar-widget-5-bold-duotone" class="size-4 text-teal-600 dark:text-teal-400" />
            Open Clinical Software
          </h3>
          <p class="text-zinc-600 dark:text-zinc-400 leading-relaxed">
            Building the qliniql suite &mdash; clinical drug reference and licensing exam question bank &mdash; to streamline drug information retrieval and exam preparation.
          </p>
        </div>

        <div class="space-y-2">
          <h3 class="font-bold text-zinc-900 dark:text-zinc-100 text-sm flex items-center gap-1.5">
            <UIcon name="i-solar-shield-keyhole-bold-duotone" class="size-4 text-teal-600 dark:text-teal-400" />
            Quality & Community Health
          </h3>
          <p class="text-zinc-600 dark:text-zinc-400 leading-relaxed">
            Co-authoring evaluations on healthcare quality metrics (KQCAH questionnaire), hospital ISO certification impact, and community health survey analytics.
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
</script>
