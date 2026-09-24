<template>
  <div class="container mx-auto p-6 max-w-5xl space-y-16 mb-24">
    <!-- Header -->
    <div class="space-y-3 border-b border-zinc-200 dark:border-zinc-800 pb-6">
      <h1 class="text-3xl sm:text-4xl font-serif font-bold text-zinc-900 dark:text-zinc-100 tracking-tight">
        Curriculum Vitae
      </h1>
      <p class="text-base lg:text-lg text-zinc-600 dark:text-zinc-400 font-serif">
        Dr. Mehrdad Anvar, MD — North Vancouver, BC
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
    <ResumeSkills
      :skills="section('technical skills')"
      :languages="section('languages')"
    />
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  layout: "resume",
});

useHead({
  title: "Curriculum Vitae — Dr. Mehrdad Anvar, MD",
});

const { data: docs } = await useFetch("/api/getDocuments?route=/vita");

function section(sectionName: string): Record<string, any>[] {
  const list = (docs.value as Record<string, any>[] | null) ?? [];
  const doc = list.find((d) => d.section === sectionName);
  return doc && Array.isArray(doc.items) ? doc.items : [];
}
</script>

<style scoped>
.container {
  font-family: "Source Serif 4", Georgia, serif;
}
</style>
