<template>
  <div class="container mx-auto p-6 max-w-5xl space-y-16 mb-24">
    <!-- Header -->
    <div class="space-y-3 border-b border-zinc-200 dark:border-zinc-800 pb-6">
      <h1 class="text-3xl sm:text-4xl font-bold text-zinc-900 dark:text-zinc-100 tracking-tight">
        Curriculum Vitae
      </h1>
      <p class="text-base  text-zinc-600 dark:text-zinc-400">
        Mehrdad Anvar, MD, LMCC — North Vancouver, BC
      </p>
    </div>

    <!-- MongoDB-backed sections rendered with Nuxt UI Timeline (custom slots) -->
    <ResumeEducation :items="section('education')" />
    <ResumeInternships :items="section('internships')" />
    <ResumeLicensure :items="section('licensure')" />
    <ResumeExam :items="section('exams')" />
    <ResumeClinical :items="section('clinical work experience')" />
    <ResumeNonClinical :items="section('non-clinical work experience')" />
    <ResumeResearch :items="section('research experience')" />
    <ResumePublications :items="section('publications')" />
    <ResumeVoluntary :items="section('voluntary experience')" />
    <ResumeSkills :skills="section('technical skills')" :languages="section('languages')" />
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  layout: "resume",
});

useHead({
  title: "Curriculum Vitae, Mehrdad Anvar, MD, LMCC",
});

useSeoMeta({
  title: "Curriculum Vitae- Mehrdad Anvar, MD, LMCC",
  description:
    "Curriculum Vitae of Mehrdad Anvar, MD, LMCC: medical education, Canadian clinical experience, licensure, publications, research, and technical skills.",
  ogTitle: "Curriculum Vitae- Mehrdad Anvar, MD, LMCC",
  ogDescription:
    "Medical education, clinical experience, licensure, publications, and research experience of Mehrdad Anvar, MD, LMCC- North Vancouver, BC.",
  ogUrl: "https://mdanvar.ca/vita",
  ogType: "profile",
  twitterCard: "summary_large_image",
  twitterTitle: "Curriculum Vitae- Mehrdad Anvar, MD, LMCC",
  twitterDescription:
    "Medical education, clinical experience, licensure, publications, and research experience of Mehrdad Anvar, MD, LMCC.",
  robots: "index, follow",
});

const { data: docs } = await useFetch("/api/getDocuments?route=/vita", {
  default: () => [] as Record<string, any>[],
});

function section(sectionName: string): Record<string, any>[] {
  const list = (docs.value as Record<string, any>[] | null) ?? [];
  const doc = list.find((d) => d.section === sectionName);
  return doc && Array.isArray(doc.items) ? doc.items : [];
}
</script>

<style scoped></style>
