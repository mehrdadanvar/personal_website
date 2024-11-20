<template>
  <main class="container mx-auto">
    <!-- <ContentDoc v-slot="{ doc }" class="">
      <section class="" v-for="item in doc.children">
        <div class="border border-slate-500 px-6 py-6 rounded-lg my-2">
          {{ item.title }}
          <p>{{ item.contents }}</p>
        </div>
      </section>
    </ContentDoc> -->
    <div v-for="child in article.children">{{ child }}</div>
  </main>
</template>

<script setup>
const route = useRoute();

let target = route.params.slug[0];
const { data } = await useAsyncData("", () =>
  queryContent(`/article/${target}`).findOne()
);
let article = data.value;
console.log(article);
</script>
