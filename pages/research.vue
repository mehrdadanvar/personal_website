<template>
  <UContainer>
    <h1>Peer-Reviewed Publications</h1>
    <section class="backdrop-blur-lg">
      <div v-for="pub in newpubs" class="border rounded-lg border-zinc-300 p-6">
        <h2 class="text-xl font-semibold text-zinc-700">{{ pub.title }}</h2>
        <h4 class="text-xl">{{ pub.journal }}</h4>
        <h3>{{ pub.year }}</h3>
        <span v-for="element in pub.authors">{{ element }} </span>
        <p>{{ pub.link }}</p>
        <div class="text-justify">{{ pub.abstract }}</div>
      </div>
    </section>
  </UContainer>
</template>
<script setup>
import pubs from "../assets/files/pubs.json";

let newpubs = pubs.sort((a, b) => {
  return b.id - a.id;
});
</script>
<style scoped></style>
