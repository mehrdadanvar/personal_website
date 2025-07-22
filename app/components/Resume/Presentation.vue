<template>
  <section class="flex flex-col gap-8">
    <h2 class="text-3xl text-yellow-700">Presentations</h2>
    <div class="grid grid-cols-1 gap-10">
      <div
        v-for="item in presentations"
        :key="item"
        class="sm:flex sm:flex-col sm:gap-6 md:grid md:grid-cols-4"
      >
        <h4 class="text-gray-700 lg:text-xl col-span-1">
          {{ item.date }}
        </h4>
        <div class="flex flex-col gap-2 col-span-3">
          <h3 class="text-xl text-gray-700 lg:text-2xl">
            {{ item.presentation_title }}
          </h3>
          <div class="py-2 text-gray-500">
            <p class="text-xl">{{ item.type }}</p>

            <p class="text-xl">
              {{ item.conference_title }}
            </p>
            <ul class="list-disc flex flex-col gap-2 mt-6 lg:text-xl">
              <li v-for="bullet in item.bullet_points">
                {{ bullet }}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import presentations from "../../assets/files/presentations.json";
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
