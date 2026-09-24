<template>
  <div class="relative min-h-screen py-10 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-12">
    <title>Dr. Mehrdad Anvar, MD — Public Health &amp; Health Informatics</title>

    <ArtBackground src="/sample12.svg" />

    <!-- MAIN BENTO GRID HERO -->
    <section class="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-6">
      <!-- Profile Hero Bento Card (12 cols) -->
      <div class="lg:col-span-12 rounded-3xl p-6 sm:p-10 border border-zinc-200/80 dark:border-zinc-800/80 bg-white/60 dark:bg-zinc-900/50 backdrop-blur-xl shadow-xs flex flex-col md:flex-row items-center md:items-start gap-8">
        <!-- Prominent Doctor Portrait -->
        <div class="relative shrink-0">
          <img
            src="/me2.png"
            alt="Dr. Mehrdad Anvar, MD"
            class="w-40 h-40 sm:w-48 sm:h-48 rounded-2xl object-cover grayscale opacity-90 border-2 border-zinc-200 dark:border-zinc-800 shadow-sm"
          />
          <span class="absolute -bottom-2 -right-2 px-2.5 py-1 rounded-full text-xs font-bold bg-teal-700 text-white dark:bg-teal-400 dark:text-zinc-950 shadow-xs">
            MD Physician
          </span>
        </div>

        <div class="space-y-4 text-center md:text-left flex-1">
          <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-teal-500/10 text-teal-800 dark:text-teal-300 border border-teal-500/20">
            <UIcon name="i-solar-diploma-bold-duotone" class="size-4 text-teal-600" />
            Public Health &amp; Clinical Informatics Research
          </div>

          <h1 class="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-zinc-900 dark:text-zinc-100 tracking-tight leading-tight">
            Dr. Mehrdad Anvar
          </h1>

          <p class="text-sm sm:text-base text-zinc-600 dark:text-zinc-300 max-w-3xl leading-relaxed">
            Physician and health data software architect based in Vancouver, BC. Focused on quantitative trauma epidemiology, in-hospital mortality risk modeling, and full-stack clinical decision platforms.
          </p>

          <div class="pt-2 flex flex-wrap items-center justify-center md:justify-start gap-3">
            <NuxtLink
              to="/vita"
              class="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-semibold bg-teal-700 hover:bg-teal-800 text-white dark:bg-teal-400 dark:hover:bg-teal-300 dark:text-zinc-950 transition-all shadow-xs"
            >
              <UIcon name="i-solar-document-text-bold-duotone" class="size-4" />
              <span>Curriculum Vitae</span>
            </NuxtLink>

            <NuxtLink
              to="/projects"
              class="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-semibold bg-zinc-100 dark:bg-zinc-800 hover:bg-zinc-200 dark:hover:bg-zinc-700 text-zinc-800 dark:text-zinc-200 border border-zinc-200 dark:border-zinc-700 transition-all"
            >
              <UIcon name="i-solar-widget-5-bold-duotone" class="size-4" />
              <span>Medical Systems</span>
            </NuxtLink>

            <NuxtLink
              to="/research"
              class="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-semibold bg-zinc-100 dark:bg-zinc-800 hover:bg-zinc-200 dark:hover:bg-zinc-700 text-zinc-800 dark:text-zinc-200 border border-zinc-200 dark:border-zinc-700 transition-all"
            >
              <UIcon name="i-solar-notes-bold-duotone" class="size-4" />
              <span>Publications</span>
            </NuxtLink>
          </div>
        </div>
      </div>
    </section>

    <!-- CLINICAL SYSTEMS BENTO GRID -->
    <section class="relative z-10 space-y-6">
      <!-- Section Header -->
      <div class="flex flex-col sm:flex-row sm:items-end justify-between gap-2 border-b border-zinc-200/80 dark:border-zinc-800/80 pb-4">
        <div>
          <span class="text-xs font-bold text-teal-700 dark:text-teal-400 uppercase tracking-wider">Clinical Software Ecosystem</span>
          <h2 class="text-2xl font-bold text-zinc-900 dark:text-zinc-100 tracking-tight">
            Medical Software Systems
          </h2>
        </div>
        <NuxtLink to="/projects" class="text-xs font-semibold text-teal-700 dark:text-teal-400 hover:underline">
          Explore all projects &rarr;
        </NuxtLink>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div
          v-for="proj in featuredProjects"
          :key="proj.slug"
          class="rounded-3xl p-6 border border-zinc-200/80 dark:border-zinc-800/80 bg-white/60 dark:bg-zinc-900/50 backdrop-blur-xl shadow-xs hover:border-teal-500/50 hover:shadow-md transition-all duration-300 flex flex-col justify-between group"
        >
          <div class="space-y-3">
            <div class="w-10 h-10 rounded-xl bg-teal-500/10 text-teal-700 dark:text-teal-400 border border-teal-500/20 flex items-center justify-center">
              <UIcon :name="proj.icon" class="size-5" />
            </div>

            <h3 class="text-lg font-bold text-zinc-900 dark:text-zinc-100 group-hover:text-teal-700 dark:group-hover:text-teal-400 transition-colors">
              {{ proj.title }}
            </h3>

            <p class="text-xs text-zinc-600 dark:text-zinc-300 leading-relaxed">
              {{ proj.description }}
            </p>
          </div>

          <div class="pt-4 mt-4 border-t border-zinc-200/80 dark:border-zinc-800/80 flex items-center justify-between text-xs">
            <span class="font-mono text-[11px] text-zinc-500">{{ proj.tech }}</span>
            <NuxtLink :to="'/projects/' + proj.slug" class="font-semibold text-teal-700 dark:text-teal-400 group-hover:translate-x-0.5 transition-transform inline-flex items-center gap-1">
              <span>View</span>
              <UIcon name="i-solar-double-alt-arrow-right-linear" class="size-3.5" />
            </NuxtLink>
          </div>
        </div>
      </div>
    </section>

    <ArtBackground src="/sample15.svg" />

    <!-- ACADEMIC RESEARCH BENTO GRID -->
    <section class="relative z-10 space-y-6 pt-6">
      <div class="flex flex-col sm:flex-row sm:items-end justify-between gap-2 border-b border-zinc-200/80 dark:border-zinc-800/80 pb-4">
        <div>
          <span class="text-xs font-bold text-teal-700 dark:text-teal-400 uppercase tracking-wider">Investigative Domains</span>
          <h2 class="text-2xl font-bold text-zinc-900 dark:text-zinc-100 tracking-tight">
            Academic Research Focus
          </h2>
        </div>
        <NuxtLink to="/research" class="text-xs font-semibold text-teal-700 dark:text-teal-400 hover:underline">
          View PubMed publications &rarr;
        </NuxtLink>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div
          v-for="research in researchList"
          :key="research.title"
          class="rounded-3xl p-6 sm:p-8 border border-zinc-200/80 dark:border-zinc-800/80 bg-white/60 dark:bg-zinc-900/50 backdrop-blur-xl shadow-xs space-y-4"
        >
          <div class="flex items-center gap-3">
            <div class="w-10 h-10 rounded-xl bg-teal-500/10 text-teal-700 dark:text-teal-400 border border-teal-500/20 flex items-center justify-center shrink-0">
              <UIcon name="i-solar-notes-bold-duotone" class="size-5" />
            </div>
            <div>
              <h3 class="text-lg font-bold text-zinc-900 dark:text-zinc-100">
                {{ research.title }}
              </h3>
              <p class="text-xs text-zinc-500">Methodology &amp; Clinical Analytics</p>
            </div>
          </div>

          <p class="text-xs sm:text-sm text-zinc-600 dark:text-zinc-300 leading-relaxed">
            {{ research.description }}
          </p>

          <ul v-if="research.bullets && research.bullets.length" class="space-y-1.5 pt-2 text-xs text-zinc-600 dark:text-zinc-400 border-t border-zinc-200/60 dark:border-zinc-800/60">
            <li v-for="(b, i) in research.bullets" :key="i" class="flex items-start gap-2">
              <UIcon name="i-solar-check-read-bold" class="size-4 text-teal-600 dark:text-teal-400 shrink-0 mt-0.5" />
              <span>{{ b }}</span>
            </li>
          </ul>
        </div>
      </div>
    </section>

    <!-- COMPETENCIES & TECHNICAL STACK -->
    <section class="relative z-10 rounded-3xl p-6 sm:p-8 border border-zinc-200/80 dark:border-zinc-800/80 bg-white/60 dark:bg-zinc-900/50 backdrop-blur-xl shadow-xs space-y-6">
      <div class="flex items-center justify-between border-b border-zinc-200/80 dark:border-zinc-800/80 pb-4">
        <h2 class="text-xl font-bold text-zinc-900 dark:text-zinc-100 tracking-tight">
          Competencies &amp; Quantitative Stack
        </h2>
        <span class="text-xs font-mono text-teal-700 dark:text-teal-400">Clinical &amp; Software Synthesis</span>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-6 text-xs sm:text-sm">
        <div class="space-y-2">
          <span class="font-bold text-zinc-900 dark:text-zinc-100 text-xs uppercase tracking-wider text-teal-700 dark:text-teal-400 block">
            Clinical Medicine &amp; Surgery
          </span>
          <p class="text-zinc-600 dark:text-zinc-400 leading-relaxed">
            MD Doctor degree from SUMS. 42 months of clinical rotations across Emergency Medicine, General Surgery, Pediatrics, and ICU wards.
          </p>
        </div>

        <div class="space-y-2">
          <span class="font-bold text-zinc-900 dark:text-zinc-100 text-xs uppercase tracking-wider text-teal-700 dark:text-teal-400 block">
            Statistical &amp; Risk Modeling
          </span>
          <p class="text-zinc-600 dark:text-zinc-400 leading-relaxed">
            Binary and multiple logistic regression, survival modeling (Kaplan-Meier, Cox regression), AIS-98 / ICD-10 injury severity score algorithms.
          </p>
        </div>

        <div class="space-y-2">
          <span class="font-bold text-zinc-900 dark:text-zinc-100 text-xs uppercase tracking-wider text-teal-700 dark:text-teal-400 block">
            Full-Stack Systems Engineering
          </span>
          <p class="text-zinc-600 dark:text-zinc-400 leading-relaxed">
            Nuxt 4, Vue 3, TypeScript, Python data parsers, Go microservices, SVG vector generators, and SQLite/PostgreSQL databases.
          </p>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  layout: "default",
});

const featuredProjects = [
  {
    title: "HyperQbank",
    description: "Medical licensing exam platform for MCCQE1 and USMLE Step prep with searchable case taxonomies.",
    slug: "hyperqbank",
    tech: "Nuxt • Go • Python",
    icon: "i-solar-box-minimalistic-bold-duotone"
  },
  {
    title: "HyperRx",
    description: "Health Canada Drug Product Database (DPD) parser and clinical monograph API.",
    slug: "hyperrx",
    tech: "Python • Go • Nuxt",
    icon: "i-solar-pill-bold-duotone"
  },
  {
    title: "HyperECG",
    description: "Interactive SVG 12-lead electrocardiogram waveform vector generator and electrophysiology simulator.",
    slug: "hyperecg",
    tech: "Nuxt • SVG",
    icon: "i-solar-pulse-bold-duotone"
  },
  {
    title: "HyperRadiology",
    description: "Diagnostic CT, MRI, and X-ray imaging archive with clinical findings breakdown.",
    slug: "hyperradio",
    tech: "Nuxt • DICOM",
    icon: "i-solar-gallery-bold-duotone"
  }
];

const researchList = [
  {
    title: "Trauma Registry & Mortality Modeling",
    description: "Multi-center logistic regression modeling to evaluate independent risk factors for in-hospital mortality across 47,000+ trauma cases.",
    bullets: [
      "Odds ratios for thoracic vs. central nervous system injuries",
      "Bimodal time distribution of trauma-related mortality",
      "AIS-98 Severity Score mapping from ICD-10 external injury codes"
    ]
  },
  {
    title: "Nosocomial Infection & Outcome Analysis",
    description: "Quantifying hospital-acquired infection risk factors, prolonged ICU stays, and late-phase in-hospital survival.",
    bullets: [
      "12.7 Odds Ratio for late trauma mortality associated with nosocomial infections",
      "Surveillance algorithms for surgical site & NICU bloodstream infections"
    ]
  },
  {
    title: "Quality Evaluation & ISO Accreditation",
    description: "Assessing healthcare quality metrics using modified KQCAH multi-dimension surveys in teaching hospitals.",
    bullets: [
      "Comparative analysis of ISO-certified vs. uncertified university hospitals",
      "Multi-dimension evaluation across patient satisfaction parameters"
    ]
  },
  {
    title: "Orthopedic & Demographics Analytics",
    description: "Observational studies evaluating core muscle endurance, tibiofibular syndesmosis radiographic markers, and pediatric hip dislocation.",
    bullets: [
      "Radiographic syndesmosis variations across age & gender demographics",
      "Ergonomic core endurance measurements in institutional health staff"
    ]
  }
];
</script>
