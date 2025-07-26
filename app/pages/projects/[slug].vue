<template>
  <title>{{ project.title }}</title>
  <UContainer class="min-h-screen mt-24">
    <!-- <div>{{ response }}</div> -->
    <section class="flex flex-col gap-6">
      <h1 class="text-4xl">{{ project.title }}</h1>
      <h2>{{ project.description }}</h2>
      <p>{{ project.long_description }}</p>
      <div>
        <UTimeline :default-value="project.timeline.length - 1" :items="project.timeline" color="neutral" size="xl" />
      </div>
      <div v-for="item in mdc">
        <ContentRenderer :value="item" />
      </div>
    </section>

    <!-- <div class="text-red-400">{{ mdc }}</div>
    <div class="text-cyan-400">{{ mehrdad }}</div>
    <div v-for="element in mdprojects" class="border">{{ element }}</div> -->
  </UContainer>
</template>

<script setup lang="ts">
definePageMeta({
  layout: "default",
});
let route = useRoute();

let { data } = useNuxtData("projects");
console.log(data.value);

let { data: response } = await useFetch(() => "/api/content/getprojects", { query: { slug: route.params.slug } });
console.log(response.value);
let project = computed(() => {
  if (response.value?.project) {
    return response.value.project;
  }
});
// const { data: idea } = await useAsyncData("ideas", () => {
//   console.log(typeof route.params.slug);
//   console.log(queryCollection("ideas"));
//   console.log(String(route.params.slug));
//   return queryCollection("ideas").where("slug", "=", String(route.params.slug)).all();
// });
// console.log(idea);
// let ideas = useNuxtData("ideas");
// console.log(ideas);
const { data: mdprojects } = await useAsyncData("ideas", () => queryCollection("ideas").all());
let mdc = computed(() => {
  return mdprojects.value.filter((item) => item.meta.slug == route.params.slug);
});
console.log(mdc);
const { data: mehrdad } = await useAsyncData("somethingelse", () =>
  queryCollection("ideas").where("title", "LIKE", String(route.params.slug)).all()
);
</script>
