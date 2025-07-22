<template>
  <title>mehrdad Anvar Projects</title>
  <UContainer class="">
    <h1>Projects</h1>
    <p class="py-6">
      The following represents a list of projects I have been working on. Most of these will at some point be
      open-sourced and hosted on GitHub. However, as I am constantly jumping beetwen projects and chnages are drastic, I
      have not yet decided open sourcing them. This page will receive regular updates as I move on to complete these
      projects.
    </p>

    <div class="flex flex-col gap-6 mb-24">
      <div v-for="item in data.projects">
        <UCard>
          <template #header>
            <h2>{{ item.title }}</h2>
          </template>
          <div>{{ item.description }}</div>
          <div>{{ item.long_description }}</div>
        </UCard>
      </div>
    </div>
    <!-- <div>{{ mdprojects }}</div> -->
  </UContainer>
</template>
<script setup lang="ts">
let { data } = useNuxtData("projects");

const { data: response } = await useAsyncData("projects", () => $fetch("/api/content/getprojects"), {
  getCachedData: (key, nuxtApp) => nuxtApp.payload.data[key] || nuxtApp.static.data[key],
});

const { data: mdprojects } = await useAsyncData("ideas", () => queryCollection("ideas").all());
console.log(mdprojects.value);
</script>
