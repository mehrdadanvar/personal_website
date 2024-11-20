<template>
  <section class="flex flex-col gap-8">
    <h2 class="text-3xl text-yellow-700">Clinical Experience</h2>
    <div class="grid grid-cols-1 gap-10">
      <div
        v-for="job in jobs"
        :key="job"
        class="sm:flex sm:flex-col sm:gap-6 md:grid md:grid-cols-4"
      >
        <h4 class="text-gray-700 lg:text-xl col-span-1">
          {{ job.period }}
        </h4>
        <div class="flex flex-col gap-2 col-span-3">
          <h3 class="text-xl text-gray-700 lg:text-xl">{{ job.title }}</h3>
          <div class="py-2 text-gray-500">
            <p class="lg:text-xl">{{ job.place }}</p>
            <ol class="flex gap-3 text-lg">
              <li v-for="x in job.geo" :key="x">{{ x }}</li>
            </ol>

            <ol
              v-if="Array.isArray(job.definition)"
              class="lg:text-xl flex flex-col gap-3 mt-6 list-disc"
            >
              <li class="listed" v-for="item in job.definition">{{ item }}</li>
            </ol>
            <p v-else class="text-base">{{ job.definition }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import jobs from "../../assets/files/clinics.json";
//let { data: jobs } = await useFetch("http://localhost:3000/files/clinics.json");

// let jobs = ref(["", ""]);
// async function load_clinics() {
//   let response = await fetch("clinics.json");
//   let data = await response.text();
//   let content = JSON.parse(data);
//   jobs.value = content;
// }
// load_clinics();
// console.log(jobs);
</script>

<style></style>
