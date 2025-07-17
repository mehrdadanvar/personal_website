<template>
  <UContainer class="min-h-screen">
    <h1>Projects</h1>
    <p>
      The following represents a list of projects I have been working on. Most of these will at some point be
      open-sourced and hosted on GitHub. However, as I am constantly jumping beetwen projects and chnages are drastic, I
      have not yet decided open sourcing them. This page will receive regular updates as I move on to complete these
      projects.
    </p>

    <div class="flex flex-col gap-6">
      <div v-for="item in data.projects">
        <UCard>
          <template #header> Project: {{ item.title }} </template>
          {{ item }}
        </UCard>
      </div>
    </div>
  </UContainer>
</template>
<script setup lang="ts">
let { data } = useNuxtData("projects");

// const { data: response } = await useAsyncData("projects", () => $fetch("/api/content/getprojects"), {
//   getCachedData: (key, nuxtApp) => nuxtApp.payload.data[key] || nuxtApp.static.data[key],
// });

// const { data: mdprojects } = await useAsyncData("ideas", () => queryCollection("ideas").all());
// console.log(mdprojects.value);
</script>
