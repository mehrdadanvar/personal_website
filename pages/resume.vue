<template>
  <div class="container mx-auto grid grid-cols-1 divide-gray-100 p-6 gap-6 mb-24">
    <Navbar />
    <ResumeEducation />
    <ResumeInternships />
    <ResumeClinical />
    <ResumePublications />
    <ResumeResearch />
    <ResumePresentation />
    <ResumeExam />
    <!-- <ResumeSkills /> -->
  </div>
</template>

<script setup>
definePageMeta({
  layout: "resume",
});
</script>

<style scoped>
.container {
  font-family: "Crimson Text";
}
</style>
