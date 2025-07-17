<template>
  <UContainer>
    <section>
      <article class="">
        <div>
          <section>
            <h1 class="text-4xl py-24 text-zinc-700 dark:text-zinc-300">{{ blog.article_title }}</h1>
            <p class="py-6">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto qui excepturi ipsum cumque aut ut soluta
              dicta corrupti odio, eveniet repudiandae, laborum error officiis tempora laboriosam eaque id ab et commodi
              at unde? Perspiciatis quaerat officiis impedit facere magnam adipisci, blanditiis enim voluptatum vel.
              Incidunt sit odit eaque reprehenderit, numquam dolorem velit dolorum cumque accusamus maiores quaerat,
              molestias vel! Eos vero ipsa, cum ullam libero beatae incidunt ex nisi culpa tempore ratione quam quis
              aperiam dolorum ducimus quisquam. Mollitia eligendi similique dolor, veniam deleniti fugit cum incidunt
              tenetur laboriosam suscipit sit harum consectetur fuga animi, repellendus excepturi deserunt sunt earum
              voluptas at exercitationem sint facere corrupti accusamus! Necessitatibus eius dolore sit iste blanditiis
              ullam hic deleniti iure nostrum officia? Delectus illum saepe maxime ducimus voluptatum perspiciatis quae
              sint blanditiis eligendi nesciunt nostrum illo, repudiandae nulla ut sed? Sed ullam libero expedita
              consectetur repellendus aliquid earum? Fugit pariatur iure molestias laborum, dolores aspernatur amet
              dolor ratione quasi assumenda reprehenderit sunt, inventore provident, ea facere architecto ut voluptates?
              Harum placeat facere quod ipsam laudantium laborum dignissimos nostrum nesciunt quasi tenetur
              necessitatibus minima blanditiis voluptate, voluptates, deserunt exercitationem fuga non! Porro nisi,
              quasi facere excepturi voluptates sint sequi cupiditate quas voluptatem sit voluptatibus.
            </p>
            <USeparator />
            <div class="lg:grid lg:grid-cols-2 gap-3">
              <div v-for="element in blog.intro" class="py-4 px-3">
                <p class="text-lg font-semibold text-zinc-800 dark:text-zinc-300">{{ element.name }}</p>
                <p class="text-zinc-700 dark:text-zinc-400">{{ element.definition }}</p>
              </div>
            </div>
            <div v-for="element in blog.sections" class="py-12">
              <article>
                <h2 class="font-semibold text-2xl text-zinc-700">{{ element.title }}</h2>
                <span class="px-5 py-1 my-4">Case History:</span>
                <p class="py-6 text-lg">{{ element.intro_case }}</p>
                <div
                  class="flex flex-col lg:flex-row border border-zinc-200 dark:border-zinc-800 rounded-2xl bg-zinc-100 dark:bg-zinc-800/50 p-6"
                >
                  <div class="features p-6">
                    <UBadge
                      icon="i-solar-glasses-bold-duotone"
                      size="sm"
                      color="black"
                      variant="solid"
                      label="Badge"
                      :trailing="true"
                    />
                    <UIcon name="i-solar-adhesive-plaster-bold" />
                    <ul class="list-disc list-inside">
                      <li v-for="member in element.presenting_features" class="ml-6 py-1 list-outside">{{ member }}</li>
                    </ul>
                  </div>
                  <div class="physicalexam p-6">
                    <UBadge color="black" class="mb-6"><h3>Physical Exam:</h3></UBadge>
                    <p v-for="member in element.physical" class="pl-6 py-1">- {{ member }}</p>
                  </div>
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
                  <ol class="list-decimal">
                    <li v-for="member in element.management" class="pl-2 py-1">{{ member }}</li>
                  </ol>
                </div>
                <div class="tips">
                  <h3>Tips:</h3>
                  <p v-for="member in element.tips" class="pl-6 py-1">- {{ member }}</p>
                </div>
              </article>
              <USeparator class="pt-6" />
            </div>
          </section>
        </div>
      </article>
    </section>
  </UContainer>
</template>
<script setup>
let some = ref({});
let route = useRoute();
some.value = route.params;
let { data: blog } = await useAsyncData("blog", async () => {
  let response = await $fetch(`/api/query?title=${route.params.slug}`);
  console.log(response);
  return response.article;
});
</script>
<style scoped></style>
