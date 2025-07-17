<template>
  <UContainer class="min-h-screen mt-24">
    <!-- <div>{{ response }}</div> -->
    <div>
      <div>{{ route.params.slug }}</div>
      <h1 class="text-4xl">{{ project.title }}</h1>

      <p>{{ project.long_description }}</p>
      <div>
        <UTimeline :default-value="0" :items="project.timeline" color="neutral" size="xs" />
      </div>
    </div>

    <div>{{ project }}</div>
    <div class="mb-12">
      <svg width="100%" height="100%" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M 0,100 L 3.0,100 C 4.5,100 4.5,95 6.0,95 C 6.9,95 8.1,100 9.0,100 L 12.0,100 C 12.3,100 12.5,101 13,101 C 13.6,101 14.2,71 14.5,71 C 14.8,71 15.4,101 16,101"
          stroke="gray"
          stroke-width="0.5"
        />
      </svg>
    </div>
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
  return response.value.project;
});
// const { data: idea } = await useAsyncData("ideas", () => {
//   console.log(typeof route.params.slug);
//   console.log(queryCollection("ideas"));
//   console.log(String(route.params.slug));
//   return queryCollection("ideas").where("slug", "=", String(route.params.slug)).all();
// });
// console.log(idea);
let ideas = useNuxtData("ideas");
console.log(ideas);
</script>
