<template>
  <div class="h-screen">
    <p>
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequuntur voluptatibus ratione veritatis eum iure a aliquam magni. Nobis esse
      laudantium quis dolores quisquam, rem, fugiat architecto similique nemo harum illum?
    </p>
    <div>{{ algo.text }}</div>
    <div v-for="item in algo.children" class="flex flex-row">
      <p :class="{ 'bg-gray-500': item.type === 'lab-result' }" class="border max-w-content">{{ item.text }}</p>
      <div v-for="element in item.children" class="flex flex-col">
        <p class="border border-red-200 px-2">{{ element.text }}</p>
      </div>
    </div>
    <div></div>
  </div>
</template>
<script setup>
import algo from "../public/algo.json";
</script>
<style scoped></style>
