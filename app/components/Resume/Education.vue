<!-- <template>
  <section class="flex flex-col gap-8 mb-12">
    <h2 class="text-3xl text-yellow-700">Education</h2>
    <div class="grid grid-cols-1 gap-10">
      <div v-for="x in schools" :key="x" class="sm:flex sm:flex-col sm:gap-6 md:grid md:grid-cols-4">
        <h3 class="lg:text-xl col-span-1 text-toned">
          {{ x.dates }}
        </h3>
        <div class="flex flex-col gap-2 col-span-3">
          <h3 class="lg:text-xl text-highlighted">{{ x.name }}</h3>
          <div class="flex lg:text-lg gap-4 text-muted">
            <h4>{{ x.major }}</h4>
            <h4>{{ x.level }}</h4>
          </div>
          <div class="flex lg:text-lg gap-4 text-dimmed">
            <h5>{{ x.location }}</h5>
            <h5>GPA {{ x.grade }}</h5>
          </div>
        </div>
      </div>
    </div>
    <USeparator />
  </section>
</template>

<script setup>
import schools from "../../assets/files/schools.json";
</script>

<style scoped></style> -->
<template>
  <UTimeline :items="items" color="neutral" size="md">
    <template #title="{ item }"> </template>
  </UTimeline>
</template>
<script setup lang="ts">
import type { TimelineItem } from "@nuxt/ui";

let items = [
  {
    date: "September 2007 - December 2015",
    title: "Bachelor of Science in Biomedical Engineering",
    description: "University of Medical Sciences, Tehran",
    icon: "i-solar-book-bookmark-bold",
  },
  {
    date: "September 2021 - June 2023",
    title: "Bachelor of Science in Computer Science",
    description: "University of Medical Sciences, Tehran",
    icon: "i-solar-book-bookmark-bold",
  },
] satisfies TimelineItem[];
</script>
