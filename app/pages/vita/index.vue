<template>
  <div
    class="container mx-auto grid grid-cols-1 divide-gray-100 p-6 gap-6 mb-24"
  >
    <Navbar />
    <!-- <ResumeEducation /> -->
    <div>{{ data }}</div>
    <UTimeline :items="education_items">
      <template #date="{ item }">
        <!-- <span class="text-cyan-600">{{ item.sdate }}</span> -->
        <!-- <span class="text-cyan-600">{{ item.edate }}</span> -->
        <span class="text-cyan-600">{{ formatDate(item.sdate) }}</span>
        <span class="text-cyan-600">{{ formatDate(item.edate) }}</span>
      </template>
      <template #title="{ item }"></template>
    </UTimeline>
    <ResumeExam />
    <ResumeClinical />
    <ResumeInternships />
    <ResumePublications />
    <ResumeResearch />
    <ResumePresentation />
    <!-- <ResumeSkills /> -->
  </div>
</template>

<script setup>
definePageMeta({
  layout: "resume",
});

let { data } = await useFetch("/api/getDocuments");
let education_items = data.value.items;

function formatDate(dateString) {
  const [y, m, d] = dateString.split("-").map(Number);
  const date = new Date(Date.UTC(y, m - 1, d));

  return new Intl.DateTimeFormat("en-US", {
    timeZone: "UTC",
    year: "numeric",
    month: "long",
    // day: "numeric",
  }).format(date);
}
</script>

<style scoped>
.container {
  font-family: "Crimson Text";
}
</style>
