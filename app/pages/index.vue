<template>
  <div class="relative min-h-screen py-8 sm:py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-12">
    <!-- SVG Background Overlay 1 -->
    <div
      class="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[600px] pointer-events-none opacity-15 dark:opacity-10 bg-top bg-no-repeat bg-contain z-0"
      style="background-image: url('/sample12.svg');"
    ></div>

    <!-- Section 1: Hero Profile & Quick Metrics Bento Grid -->
    <section class="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-6">
      <!-- Bento Tile 1: Profile & Academic Bio (8 cols) -->
      <div
        class="lg:col-span-8 rounded-3xl p-6 sm:p-8 border border-zinc-200/80 dark:border-zinc-800/80 bg-white/75 dark:bg-zinc-900/60 backdrop-blur-xl shadow-xs hover:shadow-md transition-all duration-300 flex flex-col justify-between group relative overflow-hidden"
      >
        <!-- Subtle SVG Corner Decorative Background -->
        <div
          class="absolute -right-12 -bottom-12 w-64 h-64 opacity-10 pointer-events-none bg-no-repeat bg-contain"
          style="background-image: url('/sample1.svg');"
        ></div>

        <div>
          <!-- Header Badges -->
          <div class="flex flex-wrap items-center gap-2 mb-6">
            <span class="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 border border-emerald-500/20">
              <UIcon name="i-solar-medical-kit-bold-duotone" class="size-4" />
              Doctor of Medicine (MD)
            </span>
            <span class="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-sky-500/10 text-sky-700 dark:text-sky-400 border border-sky-500/20">
              <UIcon name="i-solar-chart-2-bold-duotone" class="size-4" />
              Population &amp; Public Health Researcher
            </span>
            <span class="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-purple-500/10 text-purple-700 dark:text-purple-400 border border-purple-500/20">
              <UIcon name="i-solar-code-2-bold-duotone" class="size-4" />
              Health Data Systems Engineer
            </span>
          </div>

          <div class="flex flex-col sm:flex-row items-start sm:items-center gap-6 mb-6">
            <div class="relative shrink-0">
              <img
                src="/me2.png"
                alt="Mehrdad Anvar, MD"
                class="w-24 h-24 sm:w-28 sm:h-28 rounded-2xl object-cover grayscale contrast-110 ring-2 ring-emerald-500/30 shadow-md"
              />
              <div class="absolute -bottom-1 -right-1 w-6 h-6 rounded-full bg-emerald-500 border-2 border-white dark:border-zinc-900 flex items-center justify-center text-white" title="Verified MD Practitioner">
                <UIcon name="i-solar-check-read-bold" class="size-3.5" />
              </div>
            </div>

            <div class="space-y-1">
              <h1 class="text-3xl sm:text-4xl font-extrabold text-zinc-900 dark:text-zinc-100 tracking-tight">
                Mehrdad Anvar, MD
              </h1>
              <p class="text-sm font-medium text-emerald-600 dark:text-emerald-400">
                Shiraz University of Medical Sciences &mdash; Clinical Research &amp; Health Informatics
              </p>
              <p class="text-xs text-zinc-500 dark:text-zinc-400 pt-1">
                Specializing in Trauma Epidemiology, Outcome Prediction Modeling, and Open Clinical Prep Systems.
              </p>
            </div>
          </div>

          <p class="text-sm leading-relaxed text-zinc-600 dark:text-zinc-300 font-normal">
            I am a physician and researcher dedicated to bridging quantitative public health analysis with robust clinical software design.
            My academic focus encompasses administrative trauma registries, mortality outcome prediction modeling, and open-access medical educational platforms.
            By combining clinical methodology with modern web engineering, I build precise data systems for medical trainees and healthcare researchers.
          </p>
        </div>

        <!-- Academic Links & Action Buttons -->
        <div class="pt-6 mt-6 border-t border-zinc-200/80 dark:border-zinc-800/80 flex flex-wrap items-center justify-between gap-4">
          <div class="flex items-center gap-2">
            <NuxtLink
              to="/vita"
              class="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold bg-emerald-600 hover:bg-emerald-700 text-white transition-all shadow-xs"
            >
              <UIcon name="i-solar-diploma-bold-duotone" class="size-4" />
              Curriculum Vitae &amp; Research
            </NuxtLink>
            <NuxtLink
              to="/projects"
              class="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold bg-zinc-100 dark:bg-zinc-800 hover:bg-zinc-200 dark:hover:bg-zinc-700 text-zinc-800 dark:text-zinc-200 transition-all border border-zinc-200 dark:border-zinc-700"
            >
              <UIcon name="i-solar-widget-5-bold-duotone" class="size-4" />
              View Medical Software
            </NuxtLink>
          </div>

          <div class="flex items-center gap-2 text-zinc-500 dark:text-zinc-400">
            <a
              href="https://github.com/mehrdadanvar"
              target="_blank"
              class="p-2 rounded-lg hover:bg-zinc-100 dark:hover:bg-zinc-800 hover:text-emerald-600 transition-colors"
              title="GitHub Profile"
            >
              <UIcon name="i-simple-icons-github" class="size-4" />
            </a>
            <a
              href="https://www.linkedin.com/in/mehrdad-anvar/"
              target="_blank"
              class="p-2 rounded-lg hover:bg-zinc-100 dark:hover:bg-zinc-800 hover:text-emerald-600 transition-colors"
              title="LinkedIn Profile"
            >
              <UIcon name="i-simple-icons-linkedin" class="size-4" />
            </a>
            <a
              href="mailto:mehrdad.anvar@gmail.com"
              class="p-2 rounded-lg hover:bg-zinc-100 dark:hover:bg-zinc-800 hover:text-emerald-600 transition-colors"
              title="Contact Email"
            >
              <UIcon name="i-solar-letter-bold-duotone" class="size-4" />
            </a>
          </div>
        </div>
      </div>

      <!-- Bento Tile 2: Key Academic Stats (4 cols) -->
      <div class="lg:col-span-4 grid grid-cols-2 lg:grid-cols-1 gap-4">
        <!-- Stat 1 -->
        <div class="rounded-2xl p-5 border border-zinc-200/80 dark:border-zinc-800/80 bg-white/75 dark:bg-zinc-900/60 backdrop-blur-xl shadow-xs hover:border-emerald-500/40 transition-all flex flex-col justify-between">
          <div class="flex items-center justify-between mb-2">
            <span class="text-xs font-semibold uppercase tracking-wider text-zinc-500 dark:text-zinc-400">Trauma Epidemiology</span>
            <div class="p-2 rounded-lg bg-emerald-500/10 text-emerald-600 dark:text-emerald-400">
              <UIcon name="i-solar-users-group-two-rounded-bold-duotone" class="size-5" />
            </div>
          </div>
          <div>
            <div class="text-3xl font-extrabold text-zinc-900 dark:text-zinc-100 tracking-tight">47,000+</div>
            <p class="text-xs text-zinc-500 dark:text-zinc-400 mt-1">Registry Cases Analyzed &mdash; Injury Surveillance &amp; Predictors</p>
          </div>
        </div>

        <!-- Stat 2 -->
        <div class="rounded-2xl p-5 border border-zinc-200/80 dark:border-zinc-800/80 bg-white/75 dark:bg-zinc-900/60 backdrop-blur-xl shadow-xs hover:border-sky-500/40 transition-all flex flex-col justify-between">
          <div class="flex items-center justify-between mb-2">
            <span class="text-xs font-semibold uppercase tracking-wider text-zinc-500 dark:text-zinc-400">Medical Software</span>
            <div class="p-2 rounded-lg bg-sky-500/10 text-sky-600 dark:text-sky-400">
              <UIcon name="i-solar-box-minimalistic-bold-duotone" class="size-5" />
            </div>
          </div>
          <div>
            <div class="text-3xl font-extrabold text-zinc-900 dark:text-zinc-100 tracking-tight">6 Systems</div>
            <p class="text-xs text-zinc-500 dark:text-zinc-400 mt-1">MCCQE1/USMLE Prep, Drug Monograph API, ECG Simulator</p>
          </div>
        </div>

        <!-- Stat 3 -->
        <div class="rounded-2xl p-5 border border-zinc-200/80 dark:border-zinc-800/80 bg-white/75 dark:bg-zinc-900/60 backdrop-blur-xl shadow-xs hover:border-purple-500/40 transition-all flex flex-col justify-between">
          <div class="flex items-center justify-between mb-2">
            <span class="text-xs font-semibold uppercase tracking-wider text-zinc-500 dark:text-zinc-400">Research Domains</span>
            <div class="p-2 rounded-lg bg-purple-500/10 text-purple-600 dark:text-purple-400">
              <UIcon name="i-solar-document-text-bold-duotone" class="size-5" />
            </div>
          </div>
          <div>
            <div class="text-3xl font-extrabold text-zinc-900 dark:text-zinc-100 tracking-tight">4 Programmatic</div>
            <p class="text-xs text-zinc-500 dark:text-zinc-400 mt-1">Trauma, Mortality Models, Community Health, Orthopedics</p>
          </div>
        </div>
      </div>
    </section>

    <!-- SVG Background Overlay 2 -->
    <div
      class="absolute top-[650px] left-0 w-full h-[500px] pointer-events-none opacity-10 dark:opacity-10 bg-center bg-no-repeat bg-cover z-0"
      style="background-image: url('/sample15.svg');"
    ></div>

    <!-- Section 2: Featured Clinical Systems Bento Grid -->
    <section class="relative z-10 space-y-6">
      <div class="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
        <div>
          <div class="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 border border-emerald-500/20 mb-2">
            <UIcon name="i-solar-cpu-bold-duotone" class="size-4" />
            Clinical Software Platforms
          </div>
          <h2 class="text-2xl sm:text-3xl font-bold text-zinc-900 dark:text-zinc-100 tracking-tight">
            Medical Tools &amp; Data Applications
          </h2>
          <p class="text-xs sm:text-sm text-zinc-500 dark:text-zinc-400 max-w-2xl mt-1">
            Open-source systems designed for clinical preparation, pharmaceutical database ingestion, and vector simulation.
          </p>
        </div>
        <NuxtLink
          to="/projects"
          class="inline-flex items-center gap-1.5 text-xs font-semibold text-emerald-600 dark:text-emerald-400 hover:text-emerald-700 transition-colors"
        >
          <span>Explore All Projects</span>
          <UIcon name="i-solar-arrow-right-linear" class="size-4" />
        </NuxtLink>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <!-- Project Bento 1: HyperQbank (Spans 2 cols on lg) -->
        <div
          class="lg:col-span-2 rounded-3xl p-6 border border-zinc-200/80 dark:border-zinc-800/80 bg-white/75 dark:bg-zinc-900/60 backdrop-blur-xl shadow-xs hover:border-emerald-500/50 hover:shadow-md transition-all duration-300 flex flex-col justify-between group"
        >
          <div>
            <div class="flex items-center justify-between gap-4 mb-4">
              <div class="flex items-center gap-3">
                <div class="w-12 h-12 rounded-2xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20 flex items-center justify-center font-bold text-xl group-hover:scale-105 transition-transform">
                  HQ
                </div>
                <div>
                  <h3 class="text-xl font-bold text-zinc-900 dark:text-zinc-100 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                    HyperQbank
                  </h3>
                  <p class="text-xs text-zinc-500 dark:text-zinc-400">Medical Licensing Exam Platform (MCCQE1 &amp; USMLE)</p>
                </div>
              </div>
              <span class="px-2.5 py-1 rounded-full text-xs font-semibold bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 border border-emerald-500/20 shrink-0">
                Active Development
              </span>
            </div>

            <p class="text-xs sm:text-sm text-zinc-600 dark:text-zinc-300 leading-relaxed mb-4">
              An open, distraction-free study platform built for medical graduates and residents. HyperQbank provides structured clinical scenario taxonomies, searchable guideline references, and decision-tree practice modules tailored for the MCCQE1 and USMLE Step exams.
            </p>

            <div class="flex flex-wrap gap-2 mb-4">
              <span class="px-2 py-0.5 rounded-md text-xs bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-300 border border-zinc-200 dark:border-zinc-700">MCCQE1 Guidelines</span>
              <span class="px-2 py-0.5 rounded-md text-xs bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-300 border border-zinc-200 dark:border-zinc-700">USMLE Taxonomy</span>
              <span class="px-2 py-0.5 rounded-md text-xs bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-300 border border-zinc-200 dark:border-zinc-700">Nuxt 4 / Vue 3</span>
              <span class="px-2 py-0.5 rounded-md text-xs bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-300 border border-zinc-200 dark:border-zinc-700">Go Backend</span>
            </div>
          </div>

          <div class="pt-4 border-t border-zinc-200/80 dark:border-zinc-800/80 flex items-center justify-between">
            <span class="text-xs text-zinc-500 dark:text-zinc-400">Searchable Clinical Question Bank</span>
            <NuxtLink
              to="/projects/hyperqbank"
              class="inline-flex items-center gap-1.5 text-xs font-semibold text-emerald-600 dark:text-emerald-400 hover:text-emerald-700"
            >
              <span>Project Details</span>
              <UIcon name="i-solar-double-alt-arrow-right-linear" class="size-4" />
            </NuxtLink>
          </div>
        </div>

        <!-- Project Bento 2: HyperRx (1 col) -->
        <div
          class="rounded-3xl p-6 border border-zinc-200/80 dark:border-zinc-800/80 bg-white/75 dark:bg-zinc-900/60 backdrop-blur-xl shadow-xs hover:border-sky-500/50 hover:shadow-md transition-all duration-300 flex flex-col justify-between group"
        >
          <div>
            <div class="flex items-center justify-between gap-2 mb-4">
              <div class="flex items-center gap-3">
                <div class="w-10 h-10 rounded-xl bg-sky-500/10 text-sky-600 dark:text-sky-400 border border-sky-500/20 flex items-center justify-center font-bold text-lg">
                  Rx
                </div>
                <div>
                  <h3 class="text-lg font-bold text-zinc-900 dark:text-zinc-100 group-hover:text-sky-600 transition-colors">
                    HyperRx
                  </h3>
                  <p class="text-xs text-zinc-500 dark:text-zinc-400">Drug Product Monograph API</p>
                </div>
              </div>
            </div>

            <p class="text-xs text-zinc-600 dark:text-zinc-300 leading-relaxed mb-4">
              Automated ingestion and normalization pipeline for the Health Canada Drug Product Database (DPD). Filters OTC products and indexes prescription monograph entries for instant clinical query retrieval.
            </p>

            <div class="flex flex-wrap gap-1.5 mb-4">
              <span class="px-2 py-0.5 rounded-md text-xs bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-300">Health Canada DPD</span>
              <span class="px-2 py-0.5 rounded-md text-xs bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-300">Python ETL</span>
            </div>
          </div>

          <div class="pt-4 border-t border-zinc-200/80 dark:border-zinc-800/80 flex items-center justify-between">
            <span class="text-xs text-zinc-500 dark:text-zinc-400">Pharmaceutical API</span>
            <NuxtLink
              to="/projects/hyperrx"
              class="inline-flex items-center gap-1.5 text-xs font-semibold text-sky-600 dark:text-sky-400 hover:text-sky-700"
            >
              <span>Details</span>
              <UIcon name="i-solar-double-alt-arrow-right-linear" class="size-4" />
            </NuxtLink>
          </div>
        </div>

        <!-- Project Bento 3: HyperECG (1 col) -->
        <div
          class="rounded-3xl p-6 border border-zinc-200/80 dark:border-zinc-800/80 bg-white/75 dark:bg-zinc-900/60 backdrop-blur-xl shadow-xs hover:border-purple-500/50 hover:shadow-md transition-all duration-300 flex flex-col justify-between group"
        >
          <div>
            <div class="flex items-center justify-between gap-2 mb-4">
              <div class="flex items-center gap-3">
                <div class="w-10 h-10 rounded-xl bg-purple-500/10 text-purple-600 dark:text-purple-400 border border-purple-500/20 flex items-center justify-center font-bold text-lg">
                  ECG
                </div>
                <div>
                  <h3 class="text-lg font-bold text-zinc-900 dark:text-zinc-100 group-hover:text-purple-600 transition-colors">
                    HyperECG
                  </h3>
                  <p class="text-xs text-zinc-500 dark:text-zinc-400">SVG 12-Lead Vector Simulator</p>
                </div>
              </div>
            </div>

            <p class="text-xs text-zinc-600 dark:text-zinc-300 leading-relaxed mb-4">
              Simulates normal and pathological electrocardiogram waveforms using SVG renderers to generate interactive 12-lead traces for medical waveform education.
            </p>

            <div class="flex flex-wrap gap-1.5 mb-4">
              <span class="px-2 py-0.5 rounded-md text-xs bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-300">SVG Graphics</span>
              <span class="px-2 py-0.5 rounded-md text-xs bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-300">12-Lead Traces</span>
            </div>
          </div>

          <div class="pt-4 border-t border-zinc-200/80 dark:border-zinc-800/80 flex items-center justify-between">
            <span class="text-xs text-zinc-500 dark:text-zinc-400">Waveform Simulation</span>
            <NuxtLink
              to="/projects/hyperecg"
              class="inline-flex items-center gap-1.5 text-xs font-semibold text-purple-600 dark:text-purple-400 hover:text-purple-700"
            >
              <span>Details</span>
              <UIcon name="i-solar-double-alt-arrow-right-linear" class="size-4" />
            </NuxtLink>
          </div>
        </div>

        <!-- Project Bento 4: HyperRadiology (2 cols on md/lg) -->
        <div
          class="md:col-span-2 rounded-3xl p-6 border border-zinc-200/80 dark:border-zinc-800/80 bg-white/75 dark:bg-zinc-900/60 backdrop-blur-xl shadow-xs hover:border-amber-500/50 hover:shadow-md transition-all duration-300 flex flex-col justify-between group"
        >
          <div>
            <div class="flex items-center justify-between gap-4 mb-4">
              <div class="flex items-center gap-3">
                <div class="w-10 h-10 rounded-xl bg-amber-500/10 text-amber-600 dark:text-amber-400 border border-amber-500/20 flex items-center justify-center font-bold text-lg">
                  RAD
                </div>
                <div>
                  <h3 class="text-lg font-bold text-zinc-900 dark:text-zinc-100 group-hover:text-amber-600 transition-colors">
                    HyperRadiology
                  </h3>
                  <p class="text-xs text-zinc-500 dark:text-zinc-400">Diagnostic Imaging Case Archive (CT / MRI / X-ray)</p>
                </div>
              </div>
            </div>

            <p class="text-xs sm:text-sm text-zinc-600 dark:text-zinc-300 leading-relaxed mb-4">
              Curated repository of diagnostic radiology studies featuring CT, MRI, and radiographic imaging of emergency and internal medicine pathology with annotated findings for clinical training.
            </p>

            <div class="flex flex-wrap gap-2 mb-4">
              <span class="px-2 py-0.5 rounded-md text-xs bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-300">CT &amp; MRI Scans</span>
              <span class="px-2 py-0.5 rounded-md text-xs bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-300">Diagnostic Annotations</span>
            </div>
          </div>

          <div class="pt-4 border-t border-zinc-200/80 dark:border-zinc-800/80 flex items-center justify-between">
            <span class="text-xs text-zinc-500 dark:text-zinc-400">Medical Imaging Archive</span>
            <NuxtLink
              to="/projects/hyperradio"
              class="inline-flex items-center gap-1.5 text-xs font-semibold text-amber-600 dark:text-amber-400 hover:text-amber-700"
            >
              <span>Details</span>
              <UIcon name="i-solar-double-alt-arrow-right-linear" class="size-4" />
            </NuxtLink>
          </div>
        </div>
      </div>
    </section>

    <!-- SVG Background Overlay 3 -->
    <div
      class="absolute top-[1400px] right-0 w-full h-[600px] pointer-events-none opacity-10 dark:opacity-10 bg-center bg-no-repeat bg-contain z-0"
      style="background-image: url('/sample6.svg');"
    ></div>

    <!-- Section 3: Academic Research & Methodology Bento Grid -->
    <section class="relative z-10 space-y-6">
      <div class="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
        <div>
          <div class="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 border border-emerald-500/20 mb-2">
            <UIcon name="i-solar-document-text-bold-duotone" class="size-4" />
            Epidemiology &amp; Biostatistics
          </div>
          <h2 class="text-2xl sm:text-3xl font-bold text-zinc-900 dark:text-zinc-100 tracking-tight">
            Academic Research &amp; Clinical Investigations
          </h2>
          <p class="text-xs sm:text-sm text-zinc-500 dark:text-zinc-400 max-w-2xl mt-1">
            Programmatic research in trauma epidemiology, risk modeling, hospital mortality predictors, and health service quality.
          </p>
        </div>
        <NuxtLink
          to="/vita"
          class="inline-flex items-center gap-1.5 text-xs font-semibold text-emerald-600 dark:text-emerald-400 hover:text-emerald-700 transition-colors"
        >
          <span>View Bibliography &amp; CV</span>
          <UIcon name="i-solar-arrow-right-linear" class="size-4" />
        </NuxtLink>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        <!-- Research Item 1 -->
        <div
          v-for="(item, idx) in researchData"
          :key="idx"
          class="rounded-3xl p-6 border border-zinc-200/80 dark:border-zinc-800/80 bg-white/75 dark:bg-zinc-900/60 backdrop-blur-xl shadow-xs hover:border-emerald-500/40 transition-all duration-300 flex flex-col justify-between"
        >
          <div>
            <div class="flex items-center gap-2 mb-3">
              <span class="w-7 h-7 rounded-lg bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 flex items-center justify-center text-xs font-bold">
                0{{ idx + 1 }}
              </span>
              <h3 class="text-lg font-bold text-zinc-900 dark:text-zinc-100 tracking-tight">
                {{ item.title }}
              </h3>
            </div>

            <p class="text-xs sm:text-sm text-zinc-600 dark:text-zinc-300 leading-relaxed mb-4">
              {{ item.description }}
            </p>

            <div class="space-y-2 mb-4 bg-zinc-50/80 dark:bg-zinc-950/40 p-4 rounded-2xl border border-zinc-200/50 dark:border-zinc-800/50">
              <div
                v-for="(highlight, hIdx) in item.highlights"
                :key="hIdx"
                class="flex items-start gap-2 text-xs text-zinc-700 dark:text-zinc-300"
              >
                <UIcon name="i-solar-check-square-bold" class="size-3.5 text-emerald-500 shrink-0 mt-0.5" />
                <span>{{ highlight }}</span>
              </div>
            </div>
          </div>

          <div class="pt-3 border-t border-zinc-200/80 dark:border-zinc-800/80 flex items-center justify-between text-xs text-zinc-500 dark:text-zinc-400">
            <span>Shiraz University Research Projects</span>
            <span class="font-mono text-emerald-600 dark:text-emerald-400 font-medium">PubMed / Embase</span>
          </div>
        </div>
      </div>
    </section>

    <!-- Section 4: Technical & Methodology Stack Bento Card -->
    <section class="relative z-10 rounded-3xl p-6 sm:p-8 border border-zinc-200/80 dark:border-zinc-800/80 bg-white/75 dark:bg-zinc-900/60 backdrop-blur-xl shadow-xs space-y-6">
      <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-zinc-200/80 dark:border-zinc-800/80 pb-6">
        <div>
          <h2 class="text-xl font-bold text-zinc-900 dark:text-zinc-100 tracking-tight">
            Methodological &amp; Technical Competencies
          </h2>
          <p class="text-xs sm:text-sm text-zinc-500 dark:text-zinc-400 mt-0.5">
            Interdisciplinary synthesis of medicine, biostatistics, and full-stack software development.
          </p>
        </div>
        <div class="flex items-center gap-2">
          <UBadge variant="soft" color="success" size="md">Evidence-Based</UBadge>
          <UBadge variant="soft" color="info" size="md">Health Informatics</UBadge>
        </div>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-6 text-xs sm:text-sm">
        <!-- Col 1 -->
        <div class="space-y-3">
          <div class="flex items-center gap-2 text-emerald-600 dark:text-emerald-400 font-bold uppercase tracking-wider text-xs">
            <UIcon name="i-solar-medical-kit-bold-duotone" class="size-4" />
            <span>Clinical &amp; Medical</span>
          </div>
          <ul class="space-y-2 text-zinc-600 dark:text-zinc-300">
            <li class="flex items-center gap-2">
              <span class="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
              Doctor of Medicine (MD) Degree
            </li>
            <li class="flex items-center gap-2">
              <span class="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
              MCCQE Part 1 &amp; USMLE Licensing Preparation
            </li>
            <li class="flex items-center gap-2">
              <span class="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
              Emergency &amp; General Surgery Clinical Internships
            </li>
            <li class="flex items-center gap-2">
              <span class="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
              Health Canada DPD Ingestion &amp; Monograph Analysis
            </li>
          </ul>
        </div>

        <!-- Col 2 -->
        <div class="space-y-3">
          <div class="flex items-center gap-2 text-sky-600 dark:text-sky-400 font-bold uppercase tracking-wider text-xs">
            <UIcon name="i-solar-chart-2-bold-duotone" class="size-4" />
            <span>Epidemiology &amp; Statistics</span>
          </div>
          <ul class="space-y-2 text-zinc-600 dark:text-zinc-300">
            <li class="flex items-center gap-2">
              <span class="w-1.5 h-1.5 rounded-full bg-sky-500"></span>
              Logistic Regression &amp; Survival Analysis
            </li>
            <li class="flex items-center gap-2">
              <span class="w-1.5 h-1.5 rounded-full bg-sky-500"></span>
              Trauma Registry Surveillance (47,000+ Cohorts)
            </li>
            <li class="flex items-center gap-2">
              <span class="w-1.5 h-1.5 rounded-full bg-sky-500"></span>
              Nosocomial Infection &amp; NICU Risk Quantification
            </li>
            <li class="flex items-center gap-2">
              <span class="w-1.5 h-1.5 rounded-full bg-sky-500"></span>
              KQCAH Quality Assessment Tools &amp; Surveys
            </li>
          </ul>
        </div>

        <!-- Col 3 -->
        <div class="space-y-3">
          <div class="flex items-center gap-2 text-purple-600 dark:text-purple-400 font-bold uppercase tracking-wider text-xs">
            <UIcon name="i-solar-code-2-bold-duotone" class="size-4" />
            <span>Software &amp; Web Engineering</span>
          </div>
          <ul class="space-y-2 text-zinc-600 dark:text-zinc-300">
            <li class="flex items-center gap-2">
              <span class="w-1.5 h-1.5 rounded-full bg-purple-500"></span>
              Nuxt 4 / Vue 3 / TypeScript Architecture
            </li>
            <li class="flex items-center gap-2">
              <span class="w-1.5 h-1.5 rounded-full bg-purple-500"></span>
              Python Data Science (Pandas, SciPy, NumPy)
            </li>
            <li class="flex items-center gap-2">
              <span class="w-1.5 h-1.5 rounded-full bg-purple-500"></span>
              Go Backend &amp; High-Throughput REST APIs
            </li>
            <li class="flex items-center gap-2">
              <span class="w-1.5 h-1.5 rounded-full bg-purple-500"></span>
              SQLite / MongoDB Document Stores &amp; Tailwind CSS
            </li>
          </ul>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  layout: "main",
});

// Static academic research fallback
const staticResearch = [
  {
    title: "Trauma Epidemiology & Injury Surveillance",
    description: "Exploring injury patterns across age and gender groups in Iran's largest trauma centers. Leveraging administrative databases to understand injury mechanisms, mortality predictors, and trauma outcomes for prevention and healthcare optimization.",
    highlights: [
      "Analyzed over 47,000 trauma cases to identify demographic and clinical predictors of mortality.",
      "Quantified timing and patterns of trauma-related in-hospital deaths, revealing a shift from trimodal to bimodal distribution.",
      "Highlighted high-risk groups such as elderly males with thoracic or head injuries.",
      "Proposed data-driven improvements in trauma surveillance systems and care strategies."
    ]
  },
  {
    title: "Risk Modeling & Outcome Prediction",
    description: "Designing data-driven models to improve trauma care and neonatal infection outcomes. Through statistical modeling and regression analysis, contributing to identifying high-risk patients in trauma and neonatal ICUs.",
    highlights: [
      "Developed logistic regression models to predict early and late trauma mortality.",
      "Identified age, ISS >16, thoracic injuries, and nosocomial infections as major outcome predictors.",
      "Supported risk quantification models for catheter-related bloodstream infections in NICUs.",
      "Recommended data-centric strategies to reduce in-hospital complications and mortality."
    ]
  },
  {
    title: "Community & Preventive Medicine Research",
    description: "Integrating fieldwork and analytics to tackle community health challenges. Collaborating on studies addressing behavioral risk factors and health service quality across teaching hospitals.",
    highlights: [
      "Led electronic data collection and analysis for a community survey on hookah smoking and cessation strategies.",
      "Co-authored a study evaluating the impact of ISO certification on patient satisfaction across teaching hospitals.",
      "Applied structured patient feedback tools (KQCAH) to measure healthcare quality in resource-limited settings."
    ]
  },
  {
    title: "Orthopedics, Musculoskeletal & Rehabilitation Research",
    description: "Supporting observational studies in musculoskeletal and orthopedic epidemiology at Shiraz Bone & Joint Research Center to improve patient care.",
    highlights: [
      "Compared core muscle endurance in sedentary vs. active hospital staff.",
      "Assessed treatment outcomes in patients with congenital hip dislocation.",
      "Investigated anatomical and radiographic factors in tibiofibular syndesmosis alignment.",
      "Strengthened methodological rigor in designing and interpreting clinical orthopedic research."
    ]
  }
];

// Async fetch with fallback
const { data: raw_research } = await useAsyncData("research", () => $fetch("/api/content/getindexresearch").catch(() => null));

const researchData = computed(() => {
  if (raw_research.value && raw_research.value.research && Array.isArray(raw_research.value.research) && raw_research.value.research.length > 0) {
    return raw_research.value.research;
  }
  return staticResearch;
});
</script>
