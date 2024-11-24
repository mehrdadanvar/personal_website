<template>
  <UContainer>
    <article class="">
      <div>welcome to my blog</div>
      <div>
        <section v-for="item in blogs">
          <h1 class="text-4xl py-24 text-zinc-700 dark:text-zinc-300">{{ item.article_title }}</h1>
          <div class="lg:grid lg:grid-cols-2 gap-3">
            <div v-for="element in item.intro" class="py-3">
              <p class="text-lg font-semibold text-zinc-800 dark:text-zinc-300">{{ element.name }}</p>
              <p class="text-zinc-700 dark:text-zinc-400">{{ element.definition }}</p>
            </div>
          </div>
          <div v-for="element in item.sections" class="py-12">
            <article>
              <h2 class="font-semibold text-2xl">{{ element.title }}</h2>
              <UBadge :ui="{ rounded: 'rounded-full' }" size="xl" class="px-5 py-1 my-4" color="black">Case History:</UBadge>
              <p class="py-6 text-lg">{{ element.intro_case }}</p>
              <div class="features py-6 bg-zinc-200 rounded-2xl p-6">
                <h3 class="textl-xl">Presenting Features</h3>
                <p v-for="member in element.presenting_features" class="pl-6 py-1">- {{ member }}</p>
              </div>
              <div class="physical exam">
                <h3>Physical Exam Findings:</h3>
                <p v-for="member in element.pe" class="pl-6 py-1">- {{ member }}</p>
              </div>
              <div class="labs">
                <h3>Lab Findings:</h3>
                <p v-for="member in element.labs" class="pl-6 py-1">- {{ member }}</p>
              </div>
              <div class="learning">
                <h3>Learning:</h3>
                <p v-for="member in element.learning_points" class="pl-6 py-1">- {{ member }}</p>
              </div>
              <div class="Management">
                <h3>Management:</h3>
                <p v-for="member in element.management" class="pl-6 py-1">- {{ member }}</p>
              </div>
              <div class="tips">
                <h3>Tips:</h3>
                <p v-for="member in element.tips" class="pl-6 py-1">- {{ member }}</p>
              </div>
            </article>
            <UDivider class="pt-6" />
          </div>
        </section>
      </div>
    </article>
  </UContainer>
</template>

<script setup>
let blogs = ref([]);
async function load_articles() {
  let response = await $fetch("/api/getArticles");
  console.log(response);
  blogs.value = response.articles;
}

load_articles();
</script>

<style scoped></style>
