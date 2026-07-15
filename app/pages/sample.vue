<template>
  <UTimeline :items="items" color="neutral" size="2xl">
    <template #title="{ item }">
      <h3 class="text-blue-500 dark:text-zinc-400 text-lg">
        {{ item.title }}
      </h3>
    </template>
    <template #date="{ item }">
      <span class="text-cyan-600">{{ item.date }}</span>
    </template>

    <template #description="{ item }">
      <ul class="list-disc list-inside">
        <li class="ml-2" v-for="element in item.description">
          {{ element }}
        </li>
      </ul>
    </template>
  </UTimeline>
</template>
<script setup lang="ts">
import type { TimelineItem } from "@nuxt/ui";

let items = [
  {
    date: "September 2007 - December 2015",
    title: "Bachelor of Science in Biomedical Engineering",
    description: ["University of Medical Sciences, Tehran"],
    icon: "i-solar-book-bookmark-bold",
  },
  {
    date: "September 2021 - June 2023",
    title: "Bachelor of Science in Computer Science",
    description: [
      "University of Medical Sciences, Tehran",
      "University of Tehran",
      "Tehran University",
    ],
    icon: "i-solar-book-bookmark-bold",
  },
];

let schema = {
  route: "",
  type: "",
  section: "",
  items: [{}],
};
</script>
