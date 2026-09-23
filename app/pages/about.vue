<template>
  <div class="relative min-h-screen py-10 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-10">
    <title>About Mehrdad Anvar, MD</title>

    <!-- SVG Background Overlay -->
    <div
      class="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[600px] pointer-events-none opacity-15 dark:opacity-10 bg-top bg-no-repeat bg-contain z-0"
      style="background-image: url('/sample6.svg');"
    ></div>

    <!-- Header Banner -->
    <div class="relative z-10 space-y-3 border-b border-zinc-200/80 dark:border-zinc-800/80 pb-8">
      <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 border border-emerald-500/20">
        <UIcon name="i-solar-user-id-bold-duotone" class="size-4" />
        Academic &amp; Professional Profile
      </div>
      <h1 class="text-3xl sm:text-4xl font-extrabold text-zinc-900 dark:text-zinc-100 tracking-tight">
        About Dr. Mehrdad Anvar
      </h1>
      <p class="text-sm sm:text-base text-zinc-600 dark:text-zinc-400 max-w-3xl leading-relaxed">
        Physician, Population &amp; Public Health Researcher, and Health Data Systems Developer. Integrating clinical medicine with quantitative statistics and modern web engineering.
      </p>
    </div>

    <!-- Bento Grid Layout for About Content -->
    <div class="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-6">
      <!-- Bento Card 1: Early Journey & Foundation (7 cols) -->
      <div class="lg:col-span-7 rounded-3xl p-6 sm:p-8 border border-zinc-200/80 dark:border-zinc-800/80 bg-white/75 dark:bg-zinc-900/60 backdrop-blur-xl shadow-xs space-y-4">
        <div class="flex items-center gap-3 text-emerald-600 dark:text-emerald-400">
          <div class="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center">
            <UIcon name="i-solar-history-bold-duotone" class="size-5" />
          </div>
          <div>
            <h2 class="text-xl font-bold text-zinc-900 dark:text-zinc-100">Academic Roots &amp; Medical Training</h2>
            <p class="text-xs text-zinc-500 dark:text-zinc-400">Shiraz University of Medical Sciences</p>
          </div>
        </div>

        <p class="text-xs sm:text-sm text-zinc-600 dark:text-zinc-300 leading-relaxed">
          I was raised in an academic environment in southwest Iran. My mother served as the head of a university school of nursing, instilling in me an early fascination with human physiology, health systems, and science. This foundation naturally led me to pursue biology and ultimately complete eight years of intensive medical education at Shiraz University of Medical Sciences.
        </p>

        <p class="text-xs sm:text-sm text-zinc-600 dark:text-zinc-300 leading-relaxed">
          Throughout clinical rotations and patient care, I recognized that addressing health outcomes required more than bedside intervention &mdash; it demanded population-level insights, administrative data surveillance, and systematic tool design to assist healthcare providers.
        </p>
      </div>

      <!-- Bento Card 2: Strategic Pillars (5 cols) -->
      <div class="lg:col-span-5 rounded-3xl p-6 sm:p-8 border border-zinc-200/80 dark:border-zinc-800/80 bg-white/75 dark:bg-zinc-900/60 backdrop-blur-xl shadow-xs space-y-4 flex flex-col justify-between">
        <div class="space-y-4">
          <div class="flex items-center gap-3 text-sky-600 dark:text-sky-400">
            <div class="w-10 h-10 rounded-xl bg-sky-500/10 border border-sky-500/20 flex items-center justify-center">
              <UIcon name="i-solar-target-bold-duotone" class="size-5" />
            </div>
            <div>
              <h2 class="text-xl font-bold text-zinc-900 dark:text-zinc-100">Dual Core Goals</h2>
              <p class="text-xs text-zinc-500 dark:text-zinc-400">Methodology &amp; Systems Architecture</p>
            </div>
          </div>

          <div class="space-y-3 text-xs sm:text-sm">
            <div class="p-4 rounded-2xl bg-zinc-50/80 dark:bg-zinc-950/40 border border-zinc-200/50 dark:border-zinc-800/50 space-y-1">
              <span class="font-semibold text-zinc-900 dark:text-zinc-100 flex items-center gap-1.5">
                <UIcon name="i-solar-check-read-bold" class="size-4 text-emerald-500" />
                1. Quantitative Methodologies
              </span>
              <p class="text-zinc-600 dark:text-zinc-400">
                Mastering statistical modeling, regression analysis, and computational data processing to uncover trauma predictors and infection risk factors.
              </p>
            </div>

            <div class="p-4 rounded-2xl bg-zinc-50/80 dark:bg-zinc-950/40 border border-zinc-200/50 dark:border-zinc-800/50 space-y-1">
              <span class="font-semibold text-zinc-900 dark:text-zinc-100 flex items-center gap-1.5">
                <UIcon name="i-solar-check-read-bold" class="size-4 text-emerald-500" />
                2. Practical Research Implementation
              </span>
              <p class="text-zinc-600 dark:text-zinc-400">
                Translating clinical hypotheses into structured protocol designs, peer-reviewed publications, and web-accessible clinical platforms.
              </p>
            </div>
          </div>
        </div>
      </div>

      <!-- Bento Card 3: Research & Data Engineering Spectrum (12 cols) -->
      <div class="lg:col-span-12 rounded-3xl p-6 sm:p-8 border border-zinc-200/80 dark:border-zinc-800/80 bg-white/75 dark:bg-zinc-900/60 backdrop-blur-xl shadow-xs space-y-6">
        <div class="flex items-center justify-between border-b border-zinc-200/80 dark:border-zinc-800/80 pb-4">
          <h2 class="text-xl font-bold text-zinc-900 dark:text-zinc-100 tracking-tight">
            Interdisciplinary Scope: Medicine &amp; Data Science
          </h2>
          <span class="text-xs font-mono text-emerald-600 dark:text-emerald-400">Clinical &amp; Technical Synthesis</span>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-6 text-xs sm:text-sm">
          <div class="space-y-2">
            <h3 class="font-bold text-zinc-900 dark:text-zinc-100 text-sm flex items-center gap-1.5">
              <UIcon name="i-solar-notes-bold-duotone" class="size-4 text-emerald-500" />
              Epidemiologic Surveillance
            </h3>
            <p class="text-zinc-600 dark:text-zinc-400 leading-relaxed">
              Experience analyzing large administrative datasets (>47,000 trauma patient cohorts) to evaluate mortality trends, head/thoracic risk factors, and bimodal mortality curves.
            </p>
          </div>

          <div class="space-y-2">
            <h3 class="font-bold text-zinc-900 dark:text-zinc-100 text-sm flex items-center gap-1.5">
              <UIcon name="i-solar-widget-5-bold-duotone" class="size-4 text-sky-500" />
              Open Medical Platforms
            </h3>
            <p class="text-zinc-600 dark:text-zinc-400 leading-relaxed">
              Engineering open educational software (HyperQbank, HyperRx, HyperECG) to streamline licensing exam prep (MCCQE1/USMLE) and pharmaceutical monograph retrieval.
            </p>
          </div>

          <div class="space-y-2">
            <h3 class="font-bold text-zinc-900 dark:text-zinc-100 text-sm flex items-center gap-1.5">
              <UIcon name="i-solar-shield-keyhole-bold-duotone" class="size-4 text-purple-500" />
              Quality &amp; Community Health
            </h3>
            <p class="text-zinc-600 dark:text-zinc-400 leading-relaxed">
              Co-authoring evaluations on healthcare quality metrics (KQCAH questionnaire), hospital ISO certification impact, and community health survey analytics.
            </p>
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
</script>
