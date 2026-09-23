<template>
  <div class="relative min-h-screen py-10 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-10">
    <title>Curriculum Vitae — Dr. Mehrdad Anvar, MD</title>

    <!-- SVG Background Overlay -->
    <div
      class="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[600px] pointer-events-none opacity-15 dark:opacity-10 bg-top bg-no-repeat bg-contain z-0"
      style="background-image: url('/sample12.svg');"
    ></div>

    <!-- Header Banner -->
    <div class="relative z-10 space-y-3 border-b border-zinc-200/80 dark:border-zinc-800/80 pb-8">
      <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 border border-emerald-500/20">
        <UIcon name="i-solar-diploma-bold-duotone" class="size-4" />
        Academic Curriculum Vitae
      </div>
      <h1 class="text-3xl sm:text-4xl font-extrabold text-zinc-900 dark:text-zinc-100 tracking-tight">
        Curriculum Vitae &amp; Credentials
      </h1>
      <p class="text-sm sm:text-base text-zinc-600 dark:text-zinc-400 max-w-3xl leading-relaxed">
        Comprehensive academic record encompassing medical training (MD), clinical internships, trauma epidemiology research, and health software systems development.
      </p>
    </div>

    <!-- Vitae Bento Layout -->
    <div class="relative z-10 space-y-8">
      <!-- Section 1: Academic Background & Degrees -->
      <div class="rounded-3xl p-6 sm:p-8 border border-zinc-200/80 dark:border-zinc-800/80 bg-white/75 dark:bg-zinc-900/60 backdrop-blur-xl shadow-xs space-y-6">
        <div class="flex items-center gap-3 text-emerald-600 dark:text-emerald-400 border-b border-zinc-200/80 dark:border-zinc-800/80 pb-4">
          <UIcon name="i-solar-diploma-bold-duotone" class="size-6" />
          <h2 class="text-xl font-bold text-zinc-900 dark:text-zinc-100 tracking-tight">Education &amp; Qualifications</h2>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div class="p-5 rounded-2xl bg-zinc-50/80 dark:bg-zinc-950/40 border border-zinc-200/50 dark:border-zinc-800/50 space-y-2">
            <span class="text-xs font-semibold text-emerald-600 dark:text-emerald-400 uppercase tracking-wider">2006 &mdash; 2014</span>
            <h3 class="text-lg font-bold text-zinc-900 dark:text-zinc-100">Doctor of Medicine (MD)</h3>
            <p class="text-xs font-medium text-zinc-600 dark:text-zinc-400">Shiraz University of Medical Sciences</p>
            <p class="text-xs text-zinc-500 dark:text-zinc-400 leading-relaxed pt-1">
              Completed 8-year intensive medical curriculum including basic medical sciences, pathophysiologic clerkships, and clinical internship rotations in general surgery, emergency medicine, pediatrics, and internal medicine.
            </p>
          </div>

          <div class="p-5 rounded-2xl bg-zinc-50/80 dark:bg-zinc-950/40 border border-zinc-200/50 dark:border-zinc-800/50 space-y-2">
            <span class="text-xs font-semibold text-sky-600 dark:text-sky-400 uppercase tracking-wider">Medical Examination Qualifications</span>
            <h3 class="text-lg font-bold text-zinc-900 dark:text-zinc-100">MCCQE1 &amp; USMLE Licensing</h3>
            <p class="text-xs font-medium text-zinc-600 dark:text-zinc-400">Medical Council of Canada &amp; USMLE</p>
            <p class="text-xs text-zinc-500 dark:text-zinc-400 leading-relaxed pt-1">
              Demonstrated mastery in clinical knowledge and decision-making for Canadian and US licensing standards. Author and lead architect of HyperQbank medical exam prep ecosystem.
            </p>
          </div>
        </div>
      </div>

      <!-- Section 2: Clinical Internships & Research Appointments -->
      <div class="rounded-3xl p-6 sm:p-8 border border-zinc-200/80 dark:border-zinc-800/80 bg-white/75 dark:bg-zinc-900/60 backdrop-blur-xl shadow-xs space-y-6">
        <div class="flex items-center gap-3 text-sky-600 dark:text-sky-400 border-b border-zinc-200/80 dark:border-zinc-800/80 pb-4">
          <UIcon name="i-solar-notes-bold-duotone" class="size-6" />
          <h2 class="text-xl font-bold text-zinc-900 dark:text-zinc-100 tracking-tight">Clinical &amp; Research Appointments</h2>
        </div>

        <div class="space-y-4">
          <ResumeInternships />
          <ResumeResearch />
        </div>
      </div>

      <!-- Section 3: Peer-Reviewed Publications -->
      <div class="rounded-3xl p-6 sm:p-8 border border-zinc-200/80 dark:border-zinc-800/80 bg-white/75 dark:bg-zinc-900/60 backdrop-blur-xl shadow-xs space-y-6">
        <div class="flex items-center justify-between border-b border-zinc-200/80 dark:border-zinc-800/80 pb-4">
          <div class="flex items-center gap-3 text-purple-600 dark:text-purple-400">
            <UIcon name="i-solar-document-text-bold-duotone" class="size-6" />
            <h2 class="text-xl font-bold text-zinc-900 dark:text-zinc-100 tracking-tight">Publications</h2>
          </div>
          <NuxtLink to="/research" class="text-xs font-semibold text-emerald-600 dark:text-emerald-400 hover:text-emerald-700">
            View Full Abstracts &rarr;
          </NuxtLink>
        </div>

        <ResumePublications />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  layout: "default",
});
</script>
