<template>
  <div>
    <section class="hero py-28 flex flex-col md:flex-row gap-6 h-screen">
      <div class="left backdrop-blur-sm flex flex-col items-center justify-evenly h-2/3 mx-24 rounded-3xl p-6">
        <h1 class="text-4xl text-zinc-300 dark:text-zinc-200">
          A helpfull blog for medical students preparing for MCCQE, USMLE
        </h1>
        <p class="py-6 text-zinc-600 dark:text-zinc-500">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi ipsam fugiat in eum ex repellendus possimus
          saepe maxime inventore reprehenderit. Magnam, at atque sunt mollitia dolores fugit natus placeat est!
        </p>
        <div class="buttons flex gap-4">
          <UButton color="neutral" class="px-6">Read More ...</UButton>
          <UButton color="neutral" class="px-6" variant="outline">Explore Articles</UButton>
        </div>
      </div>
    </section>
    <div class="search h-36 mx-auto w-10/12 py-24 flex flex-col items-center">
      <p>Search for articles</p>
      <SearchBlog class="" />
    </div>
    <section class="features">
      <div class="w-11/12 p-12 mx-auto">
        <h2 class="text-3xl pb-12 text-center">Featured Articles</h2>
        <div class="flex flex-row">
          <div v-if="status == 'pending'">pending {{ status }}</div>
          <div v-else class="grid grid-cols-1 lg:grid-cols-2 lg:flex lg:flex-row gap-2">
            <article v-for="item in loaded_blogs.articles">
              <DarkFile>
                <img
                  src="/blog_1.png"
                  alt=""
                  class="rounded-full mb-6 mx-auto grayscale opacity-75 max-w-md"
                  width="200"
                />
                <div class="flex gap-4 mb-3">
                  <UIcon name="i-solar-calendar-bold" class="text-zinc-500 text-xl" />
                  <p class="text-zinc-500 text-sm">{{ item.data_published }}-06-12</p>
                </div>
                <h4
                  class="text-zinc-800 font-semibold text-lg dark:text-zinc-300 hover:opacity-50 transition-all duration-200"
                >
                  <NuxtLink :to="'/blog/' + item.slug">{{ item.title }}</NuxtLink>
                </h4>
                <div class="flex gap-4 py-2 italic"></div>
                <p class="text-zinc-800 py-1">Reviewd Cases</p>
                <ol class="list-disc text-sm text-zinc-500 pl-6">
                  <li v-for="element in item.sections" class="py-1">{{ element }}</li>
                </ol>
                <USeparator class="py-6" />
                <div class="flex justify-between">
                  <div class="flex items-center gap-4">
                    <UIcon name="i-solar-user-circle-bold-duotone" class="text-3xl text-zinc-500" />
                    <div class="text-sm">
                      <p>Author</p>
                      <p>Mehrdad Anvar, MD</p>
                    </div>
                  </div>
                  <UButton
                    color="neutral"
                    class="px-6"
                    variant="soft"
                    icon="i-solar-round-alt-arrow-right-broken"
                    :trailing="true"
                    size="xs"
                    >Read More</UButton
                  >
                </div>
                <!-- <div>{{ item }}</div> -->
              </DarkFile>
            </article>
          </div>
        </div>
      </div>
    </section>
    <section class="categories py-24">
      <UContainer>
        <h2 class="text-3xl pb-24">Categories</h2>
        <div class="flex mx-auto w-11/12">
          <DarkFile v-for="(item, index) in Categories" :key="index" class="w-[300px]">
            <h3 class="py-6">{{ item.name }}</h3>
            <p class="text-zinc-500 dark:text-zinc-400">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ad cum sit provident saepe a omnis illum odio,
              praesentium nemo cupiditate optio ea consequuntur. Aliquid laboriosam ipsa molestias dignissimos optio
              laborum!
            </p>
            <UButton color="neutral" class="px-6 mt-12 hover:cursor-pointer" variant="ghost">Read More</UButton>
          </DarkFile>
        </div>
      </UContainer>
    </section>
  </div>
</template>

<script setup>
definePageMeta({
  layout: "blog",
});

let Categories = [
  { name: "Cardiology", number: 5 },
  { name: "Gastroenterology", number: 11 },
  { name: "Obstetrics", number: 6 },
];
//load_articles();

// let blogs = ref([]);
// let { data: loaded_blogs, status } = await useAsyncData(
//   "loaded_blogs",
//   async () => {
//     let response = await $fetch("/api/getAbstracts");
//     console.log(response);
//     blogs.value = response.articles;
//     return response.articles;
//   },
//   { lazy: true }
// );

let { data: loaded_blogs, status } = await useFetch("/api/getAbstracts");
console.log(loaded_blogs);
</script>

<style scoped>
.hero {
  background-image: url("/blog_1.webp");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
}
.categories {
  background-image: url("/sample12.svg");
  background-repeat: no-repeat;
  background-size: contain;
}
.features {
  background-image: url("/sample13.svg");
  background-repeat: no-repeat;
  background-size: cover;
}
/* img {
  filter: opacity(0.5);
  filter: grayscale();
} */
</style>
