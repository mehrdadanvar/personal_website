<template>
  <UContainer>
    <title>Mehrdad Anvar Research</title>
    <!-- <section class="h-screen">
      <p>Applications of Artificila Intellegence in Health</p>
    </section> -->
    <section class="mt-24">
      <h2 class="py-6 text-3xl hidden">Research Experince</h2>

      <DarkFile>
        <ResumeResearch />
      </DarkFile>
    </section>
    <section class="">
      <h2 class="py-6 text-3xl">Peer-Reviewed Publications</h2>
      <div v-for="pub in newpubs" class="my-12">
        <DarkFile>
          <h2 class="text-xl font-semibold text-zinc-700 dark:text-zinc-300">{{ pub.title }}</h2>
          <h4 class="text-xl">{{ pub.journal }}</h4>
          <h3>{{ pub.year }}</h3>
          <div class="">
            <span
              class="text-zinc-400"
              v-for="(author, index) in pub.authors"
              :key="index"
              :class="{ 'text-zinc-900 dark:text-zinc-200 ': author == 'Mehrdad Anvar' }"
              >{{ author }}{{ index < pub.authors.length - 1 ? ", " : "." }}</span
            >
          </div>
          <NuxtLink :to="pub.link" target="_blank">
            <UBadge color="neutral" variant="subtle">Full Text </UBadge>
          </NuxtLink>
          <div class="text-justify py-6 flex flex-col gap-2 text-zinc-600 dark:text-zinc-400">
            <div class="">
              <span>Bakcground:</span>
              <p>{{ pub.abstract.background }}</p>
            </div>
            <div>
              <span>Methods:</span>
              <p>{{ pub.abstract.methods }}</p>
            </div>
            <div>
              <span>Results:</span>
              <p>{{ pub.abstract.results }}</p>
            </div>
            <div>
              <span>Conclusion:</span>
              <p>{{ pub.abstract.conclusion }}</p>
            </div>
          </div>
        </DarkFile>
      </div>
    </section>
  </UContainer>
</template>

<script setup>
definePageMeta({ layout: "default" });
import pubs from "../assets/files/pubs.json";

let newpubs = pubs.sort((a, b) => {
  return b.id - a.id;
});
</script>
<style scoped></style>
