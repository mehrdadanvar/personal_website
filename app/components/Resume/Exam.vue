<template>
  <section class="flex flex-col gap-8">
    <h2 class="text-3xl text-yellow-700">Exams</h2>
    <div class="grid grid-cols-1 gap-10">
      <div v-for="item in exams" :key="item" class="sm:flex sm:flex-col sm:gap-6 md:grid md:grid-cols-4">
        <h4 class="text-gray-700 lg:text-xl col-span-1">
          {{ item.date }}
        </h4>
        <div class="col-span-3 items-center">
          <h3 class="text-xl text-gray-700 lg:text-2xl">
            {{ item.title }}
          </h3>
          <ul class="flex flex-row gap-6 mt-6 lg:text-xl text-gray-500">
            <li v-for="bullet in item.scores">
              {{ bullet }}
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import exams from "../../assets/files/exams.json";
</script>

<style></style>
