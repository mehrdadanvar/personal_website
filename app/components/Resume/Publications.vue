<template>
  <section class="flex flex-col gap-8">
    <h2 class="text-3xl text-yellow-700">Peer Reviewed Publications</h2>
    <div class="grid grid-cols-1 gap-10">
      <div
        class="sm:flex sm:flex-col sm:gap-6 md:grid md:grid-cols-4"
        v-for="pub in newpubs"
      >
        <ResumeSinglePub
          :title="pub.title"
          :journal="pub.journal"
          :year="pub.year"
          :authors="pub.authors"
          :pdf="pub.pdf"
          :abstract="pub.abstract"
        />
      </div>
    </div>
  </section>
</template>

<script setup>
// let { data: pubs } = await useFetch("/api/pubs");
import pubs from "../../assets/files/pubs.json";

let newpubs = pubs.sort((a, b) => {
  return b.id - a.id;
});
</script>

<style scoped></style>
