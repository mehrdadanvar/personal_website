<template>
  <section class="flex flex-col gap-8 mb-12">
    <h2 class="text-3xl text-yellow-700">Education</h2>
    <div class="grid grid-cols-1 gap-10">
      <div v-for="x in schools" :key="x" class="sm:flex sm:flex-col sm:gap-6 md:grid md:grid-cols-4">
        <h3 class="text-zinc-600 dark:text-zinc-500 lg:text-xl col-span-1">
          {{ x.dates }}
        </h3>
        <div class="flex flex-col gap-2 col-span-3">
          <h3 class="text-zinc-800 dark:text-zinc-300 lg:text-xl">{{ x.name }}</h3>
          <div class="text-zinc-500 flex lg:text-lg gap-4">
            <h4 class="">{{ x.major }}</h4>
            <h4>{{ x.level }}</h4>
          </div>
          <div class="text-zinc-500 flex lg:text-lg gap-4">
            <h4>{{ x.location }}</h4>
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

<style scoped></style>
