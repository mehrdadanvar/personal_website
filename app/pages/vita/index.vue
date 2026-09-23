<template>
  <div class="container mx-auto p-6 max-w-5xl space-y-12 mb-24">
    <title>Curriculum Vitae — Dr. Mehrdad Anvar, MD</title>

    <!-- Header Banner -->
    <div class="border-b border-zinc-200 dark:border-zinc-800 pb-6 space-y-2">
      <h1 class="text-3xl sm:text-4xl font-extrabold text-zinc-900 dark:text-zinc-100 tracking-tight">
        Curriculum Vitae
      </h1>
      <p class="text-sm text-zinc-600 dark:text-zinc-400">
        Dr. Mehrdad Anvar, MD — Academic Record &amp; Clinical Credentials
      </p>
    </div>

    <!-- MongoDB-backed Sections using Nuxt UTimeline in each component -->
    <ResumeEducation :items="getSectionItems('education', 'educations', schoolsData)" />
    <ResumeExam :items="getSectionItems('exams', 'exams', examsData)" />
    <ResumeClinical :items="getSectionItems('clinical experience', 'experiences', clinicsData)" />
    <ResumeInternships :items="getSectionItems('internships', 'internships', internshipsData)" />
    <ResumePublications :items="getSectionItems('publications', 'publications', pubsData)" />
    <ResumeResearch :items="getSectionItems('research experience', 'research', researchData)" />
    <ResumePresentation :items="getSectionItems('presentations', 'presentations', presentationsData)" />
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  layout: "resume",
});

import schoolsData from "~/assets/files/schools.json";
import clinicsData from "~/assets/files/clinics.json";
import examsData from "~/assets/files/exams.json";
import internshipsData from "~/assets/files/internships.json";
import researchData from "~/assets/files/research.json";
import pubsData from "~/assets/files/pubs.json";
import presentationsData from "~/assets/files/presentations.json";

const { data: dbDocs } = await useFetch("/api/getDocuments?route=/vita");

function getSectionItems(sectionName: string, typeName: string, fallback: any[]) {
  if (dbDocs.value && Array.isArray(dbDocs.value)) {
    const doc = dbDocs.value.find(
      (d: any) => (d.section && d.section.toLowerCase() === sectionName.toLowerCase()) ||
                  (d.type && d.type.toLowerCase() === typeName.toLowerCase())
    );
    if (doc && Array.isArray(doc.items) && doc.items.length > 0) {
      return doc.items;
    }
  }
  return fallback;
}
</script>

<style scoped>
.container {
  font-family: "Crimson Text", serif;
}
</style>
