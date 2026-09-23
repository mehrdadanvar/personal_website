<template>
  <div class="relative min-h-screen py-10 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-10">
    <title>Medical Projects &amp; Software Systems — Dr. Mehrdad Anvar</title>

    <!-- SVG Background Overlay -->
    <div
      class="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[600px] pointer-events-none opacity-15 dark:opacity-10 bg-top bg-no-repeat bg-contain z-0"
      style="background-image: url('/sample15.svg');"
    ></div>

    <!-- Header Banner -->
    <div class="relative z-10 space-y-3 border-b border-zinc-200/80 dark:border-zinc-800/80 pb-8">
      <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 border border-emerald-500/20">
        <UIcon name="i-solar-widget-5-bold-duotone" class="size-4" />
        Medical Systems Portfolio
      </div>
      <h1 class="text-3xl sm:text-4xl font-extrabold text-zinc-900 dark:text-zinc-100 tracking-tight">
        Clinical Software &amp; Data Platforms
      </h1>
      <p class="text-sm sm:text-base text-zinc-600 dark:text-zinc-400 max-w-3xl leading-relaxed">
        A suite of open-access tools, pharmaceutical APIs, vector wave simulators, and medical image archives engineered for clinical trainees and health informatics research.
      </p>
    </div>

    <!-- Bento Grid for Projects -->
    <div class="relative z-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <div
        v-for="(project, index) in projectsList"
        :key="project.slug || index"
        class="rounded-3xl p-6 border border-zinc-200/80 dark:border-zinc-800/80 bg-white/75 dark:bg-zinc-900/60 backdrop-blur-xl shadow-xs hover:border-emerald-500/50 hover:shadow-md transition-all duration-300 flex flex-col justify-between group"
        :class="[
          index === 0 ? 'lg:col-span-2' : ''
        ]"
      >
        <div>
          <div class="flex items-center justify-between gap-4 mb-4">
            <div class="flex items-center gap-3">
              <div
                class="w-12 h-12 rounded-2xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20 flex items-center justify-center font-bold text-xl group-hover:scale-105 transition-transform"
              >
                <UIcon name="i-solar-box-minimalistic-bold-duotone" class="size-6" />
              </div>
              <div>
                <h2 class="text-xl font-bold text-zinc-900 dark:text-zinc-100 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                  {{ project.title }}
                </h2>
                <p class="text-xs text-zinc-500 dark:text-zinc-400">Clinical System</p>
              </div>
            </div>
            <span class="px-2.5 py-1 rounded-full text-xs font-semibold bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 border border-emerald-500/20 shrink-0">
              {{ project.status || 'In Development' }}
            </span>
          </div>

          <p class="text-xs sm:text-sm text-zinc-600 dark:text-zinc-300 leading-relaxed mb-4">
            {{ project.description }}
          </p>

          <p v-if="project.long_description" class="text-xs text-zinc-500 dark:text-zinc-400 leading-relaxed mb-4 line-clamp-3">
            {{ project.long_description }}
          </p>

          <div v-if="project.techStack" class="flex flex-wrap gap-1.5 mb-4">
            <span
              v-for="tech in project.techStack"
              :key="tech"
              class="px-2 py-0.5 rounded-md text-xs bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-300 border border-zinc-200 dark:border-zinc-700 font-mono uppercase"
            >
              {{ tech }}
            </span>
          </div>
        </div>

        <div class="pt-4 border-t border-zinc-200/80 dark:border-zinc-800/80 flex items-center justify-between">
          <span class="text-xs text-zinc-500 dark:text-zinc-400">Open-Source Project</span>
          <NuxtLink
            :to="'/projects/' + project.slug"
            class="inline-flex items-center gap-1.5 text-xs font-semibold text-emerald-600 dark:text-emerald-400 hover:text-emerald-700"
          >
            <span>Read Details</span>
            <UIcon name="i-solar-double-alt-arrow-right-linear" class="size-4" />
          </NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  layout: "default",
});

const staticProjects = [
  {
    title: "HyperQbank",
    description: "A free and modern study platform to prepare for medical licensing examinations (MCCQE1 & USMLE Step exams).",
    long_description: "HyperQbank provides a distraction-free virtual study platform dedicated to medical students and residents with a searchable taxonomy of medical topics, exam-style cases, guideline summaries, and clinical images.",
    slug: "hyperqbank",
    status: "In development",
    techStack: ["go", "python", "nodejs", "nuxt"]
  },
  {
    title: "HyperRx",
    description: "A Clinical API and database parser for Health Canada Drug Product Database (DPD) monograph retrieval.",
    long_description: "HyperRx periodically fetches, cleans, and indexes drug information from Health Canada artifacts, filtering out OTC items and providing structured clinical monograph metadata.",
    slug: "hyperrx",
    status: "In development",
    techStack: ["python", "go", "nuxt"]
  },
  {
    title: "HyperECG",
    description: "Interactive SVG 12-lead electrocardiogram waveform simulator for normal and pathological traces.",
    long_description: "Simulates physiological and pathological ECG vectors using scalable vector graphics to aid in electrophysiology education.",
    slug: "hyperecg",
    status: "In development",
    techStack: ["nuxt", "vue", "svg"]
  },
  {
    title: "HyperRadiology",
    description: "Curated collection of CT, MRI, and X-ray diagnostic studies for general practice training.",
    long_description: "Structured diagnostic radiology case archive with annotated clinical findings and pathology breakdowns.",
    slug: "hyperradio",
    status: "In development",
    techStack: ["nuxt", "dicom"]
  }
];

const { data: response } = await useAsyncData("projects", () => $fetch("/api/content/getprojects").catch(() => null));

const projectsList = computed(() => {
  if (response.value && response.value.projects && Array.isArray(response.value.projects) && response.value.projects.length > 0) {
    return response.value.projects;
  }
  return staticProjects;
});
</script>
