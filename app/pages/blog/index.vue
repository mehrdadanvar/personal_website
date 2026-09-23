<template>
  <div class="relative min-h-screen py-10 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-10">
    <title>Clinical Review Articles &amp; Blog — Dr. Mehrdad Anvar</title>

    <!-- SVG Background Overlay with enhanced visibility -->
    <div
      class="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[650px] pointer-events-none opacity-40 dark:opacity-30 bg-top bg-no-repeat bg-contain z-0"
      style="background-image: url('/sample13.svg');"
    ></div>

    <!-- Header Banner -->
    <div class="relative z-10 space-y-3 border-b border-zinc-200/80 dark:border-zinc-800/80 pb-8">
      <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-teal-500/10 text-teal-800 dark:text-teal-300 border border-teal-500/20">
        <UIcon name="i-solar-notebook-bold-duotone" class="size-4 text-teal-600" />
        Clinical Reviews &amp; Exam Preparation
      </div>
      <h1 class="text-3xl sm:text-4xl font-extrabold text-zinc-900 dark:text-zinc-100 tracking-tight">
        Medical &amp; Clinical Knowledge Base
      </h1>
      <p class="text-sm sm:text-base text-zinc-600 dark:text-zinc-300 max-w-3xl leading-relaxed">
        Evidence-based clinical reviews, high-yield differential diagnosis breakdowns, and MCCQE1 / USMLE scenario analyses.
      </p>
    </div>

    <!-- Featured Categories & Search Bento Grid -->
    <div class="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-6">
      <!-- Search Tile (7 cols) -->
      <div class="lg:col-span-7 rounded-3xl p-6 sm:p-8 border border-zinc-200/80 dark:border-zinc-800/80 bg-white/80 dark:bg-zinc-900/70 backdrop-blur-xl shadow-xs space-y-4">
        <div class="flex items-center gap-2 text-teal-700 dark:text-teal-400 font-bold text-sm">
          <UIcon name="i-solar-magnifer-bold-duotone" class="size-5" />
          <span>Search Clinical Topics &amp; Guidelines</span>
        </div>
        <p class="text-xs text-zinc-500">
          Filter by condition, presentation symptom, or organ system.
        </p>
        <SearchBlog class="w-full" />
      </div>

      <!-- Categories Tile (5 cols) -->
      <div class="lg:col-span-5 rounded-3xl p-6 sm:p-8 border border-zinc-200/80 dark:border-zinc-800/80 bg-white/80 dark:bg-zinc-900/70 backdrop-blur-xl shadow-xs space-y-4">
        <div class="flex items-center justify-between border-b border-zinc-200/80 dark:border-zinc-800/80 pb-3">
          <span class="text-xs font-bold text-zinc-900 dark:text-zinc-100 uppercase tracking-wider">Clinical Specialties</span>
          <span class="text-xs text-teal-700 dark:text-teal-400">MCCQE1 High-Yield</span>
        </div>
        <div class="flex flex-wrap gap-2">
          <span v-for="cat in categories" :key="cat.name" class="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-medium bg-zinc-100 dark:bg-zinc-800/80 text-zinc-700 dark:text-zinc-300 border border-zinc-200 dark:border-zinc-700 hover:border-teal-500/40 transition-all cursor-pointer">
            <span>{{ cat.name }}</span>
            <span class="text-xs font-mono opacity-60">({{ cat.number }})</span>
          </span>
        </div>
      </div>
    </div>

    <!-- Featured Articles Grid -->
    <div class="relative z-10 space-y-6">
      <div class="flex items-center justify-between">
        <h2 class="text-2xl font-bold text-zinc-900 dark:text-zinc-100 tracking-tight">
          Featured Clinical Reviews
        </h2>
        <span class="text-xs text-zinc-500">Updated Regularly</span>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div
          v-for="item in articlesList"
          :key="item._id || item.slug"
          class="rounded-3xl p-6 sm:p-8 border border-zinc-200/80 dark:border-zinc-800/80 bg-white/80 dark:bg-zinc-900/70 backdrop-blur-xl shadow-xs hover:border-teal-500/50 hover:shadow-md transition-all duration-300 flex flex-col justify-between group"
        >
          <div class="space-y-4">
            <div class="flex items-center justify-between gap-4 text-xs text-zinc-500 border-b border-zinc-200/80 dark:border-zinc-800/80 pb-3">
              <span class="inline-flex items-center gap-1 text-teal-700 dark:text-teal-400 font-semibold">
                <UIcon name="i-solar-calendar-bold" class="size-3.5" />
                {{ item.data_published || '2024' }}
              </span>
              <span class="font-mono text-xs bg-zinc-100 dark:bg-zinc-800 px-2 py-0.5 rounded-md">
                {{ item.cases || item.sections?.length || 0 }} Clinical Cases Reviewed
              </span>
            </div>

            <h3 class="text-xl font-bold text-zinc-900 dark:text-zinc-100 group-hover:text-teal-700 dark:group-hover:text-teal-400 transition-colors leading-snug">
              <NuxtLink :to="'/blog/' + item.slug">
                {{ item.title }}
              </NuxtLink>
            </h3>

            <div v-if="item.sections && item.sections.length > 0" class="bg-zinc-50/80 dark:bg-zinc-950/40 p-4 rounded-2xl border border-zinc-200/50 dark:border-zinc-800/50 space-y-2">
              <span class="text-xs font-semibold text-zinc-700 dark:text-zinc-300 uppercase tracking-wider block">Key Case Modules:</span>
              <ul class="space-y-1.5 text-xs text-zinc-600 dark:text-zinc-400">
                <li v-for="(sec, idx) in item.sections.slice(0, 4)" :key="idx" class="flex items-start gap-1.5">
                  <UIcon name="i-solar-double-alt-arrow-right-linear" class="size-3 text-teal-600 dark:text-teal-400 shrink-0 mt-0.5" />
                  <span class="line-clamp-1">{{ sec }}</span>
                </li>
              </ul>
            </div>
          </div>

          <div class="pt-4 border-t border-zinc-200/80 dark:border-zinc-800/80 flex items-center justify-between mt-6">
            <div class="flex items-center gap-2 text-xs text-zinc-500">
              <UIcon name="i-solar-user-circle-bold-duotone" class="size-5 text-teal-600" />
              <span>Mehrdad Anvar, MD</span>
            </div>

            <NuxtLink
              :to="'/blog/' + item.slug"
              class="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold bg-teal-500/10 hover:bg-teal-500/20 text-teal-800 dark:text-teal-300 border border-teal-500/20 transition-all"
            >
              <span>Read Full Review</span>
              <UIcon name="i-solar-arrow-right-linear" class="size-3.5" />
            </NuxtLink>
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

const categories = [
  { name: "Cardiology", number: 5 },
  { name: "Gastroenterology", number: 11 },
  { name: "Obstetrics & Gynecology", number: 6 },
  { name: "Emergency Medicine & Trauma", number: 8 },
];

const fallbackArticles = [
  {
    _id: "1",
    title: "Chronic Non-Inflammatory Diarrhea: A Clinical Review of Common Etiologies",
    data_published: "2024",
    cases: 9,
    sections: [
      "Celiac Disease: When Autoimmunity Meets Gluten",
      "Carcinoid Syndrome: The Symphony of Serotonin",
      "Bile Acid Malabsorption: When the Enterohepatic Circuit Short-Circuits",
      "Irritable Bowel Syndrome: The Great Gut Communicator"
    ],
    slug: "chronic_non-inflammatory_diarrhea_a_clinical_review_of_common_etiologies"
  },
  {
    _id: "2",
    title: "Dilated Cardiomyopathy: A Clinical Review of Common Etiologies",
    data_published: "2024",
    cases: 6,
    sections: [
      "The Unexpected Heart Challenge: Peripartum Cardiomyopathy",
      "Tachycardia-Induced Cardiomyopathy",
      "Takotsubo Cardiomyopathy in Traumatic Stress"
    ],
    slug: "dilated_cardiomyopathy_a_clinical_review_of_common_etiologies"
  }
];

const { data: loaded_blogs } = await useFetch("/api/getAbstracts").catch(() => ({ data: ref(null) }));

const articlesList = computed(() => {
  if (loaded_blogs.value && loaded_blogs.value.articles && Array.isArray(loaded_blogs.value.articles) && loaded_blogs.value.articles.length > 0) {
    return loaded_blogs.value.articles;
  }
  return fallbackArticles;
});
</script>
