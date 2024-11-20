<template>
  <main class="">
    <section class="py-24">
      <AboutBio />
    </section>
    <section class="container max-w-8xl mx-auto py-12">
      <h2 class="text-white text-3xl py-12">Interests</h2>
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <div v-for="item in interests" class="rounded-lg mx-2 my-2 border border-zinc-600">
          <img :src="item.tags[0]" alt="" class="rounded-t-lg" />
          <div class="cardcontent px-6 py-6">
            <h2 class="text-orange-600 font-bold">{{ item.title }}</h2>
            <h3 class="text-zinc-400">{{ item.description }}</h3>
          </div>
          <div>
            <UButton color="zinc"><NuxtLink :to="item._path">Read more</NuxtLink></UButton>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<script setup>
definePageMeta({ layout: "default" });
let interests = ref({});
let { data } = await useAsyncData("interests", () => {
  return queryContent("/interests").find();
});
console.log(data.value);
interests.value = data.value;
</script>

<style scoped></style>
