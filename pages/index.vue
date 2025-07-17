<template>
  <main class="">
    <Navbar />

    <section class="hero flex flex-col justify-around">
      <div
        class="dark:text-zinc-300 text-xl p-6 backdrop-brightness-[1.01] backdrop-blur-sm dark:backdrop-blur-lg mx-auto w-9/12 h-2/4 rounded-3xl"
      >
        <div class="flex flex-col items-center justify-center">
          <div class="">
            <img src="/me2.png" alt="" class="rounded-full grayscale" width="150" />
          </div>
          <div class="flex flex-col items-center justify-center max-w-2xl">
            <h1 class="text-4xl py-3 text-zinc-600 dark:text-zinc-400">Mehrdad Anvar</h1>
            <h2 class="">MD</h2>
            <h2>Population and Public Health Researcher</h2>
            <h2>Full-Stack Web Developer</h2>
            <p class="text-sm text-muted">
              I'm Mehrdad Anvar — a physician, developer, and problem-solver passionate about building tools that bridge
              medicine and technology. Whether it's designing clinical tools, coding intuitive web apps, or exploring
              data to drive insight, I bring a detail-oriented, thoughtful approach to everything I create. Welcome to
              my space.
            </p>
          </div>
        </div>
      </div>
      <div class="mx-auto text-center">
        <UIcon name="i-solar-double-alt-arrow-down-linear" class="text-5xl text-zinc-500 dark:text animate-bounce" />
      </div>
    </section>

    <section class="projects flex flex-col items-center my-48">
      <UContainer>
        <!-- <USeparator label="" size="xs" /> -->
        <h2 class="text-4xl">Projects</h2>
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div v-for="item in fetched_projects" class="">
            <div>
              <UCard color="neutral" class="bg-transparent backdrop-blur-sm backdrop-brightness-110">
                <template #header>
                  <h3 class="text-xl font-semibold">{{ item.title }}</h3>
                </template>
                <div>{{ item.description }}</div>
                <div>
                  <UBadge variant="soft" color="info" class="text-sm my-3">
                    {{ item.status }}
                  </UBadge>
                </div>
                <div class="">
                  <UTimeline :default-value="2" :items="item.timeline.slice(0, 3)" color="neutral" size="xs" />
                </div>
                <div>{{ item.long_description }}</div>
                <template #footer>
                  <div class="flex justify-between items-center">
                    <NuxtLink :to="'/projects/' + item.slug" class="text-zinc-500 dark:text-zinc-400">
                      <UButton
                        color="neutral"
                        variant="soft"
                        icon="i-solar-double-alt-arrow-right-linear"
                        :trailing="true"
                        >Read More</UButton
                      >
                    </NuxtLink>
                  </div>
                </template>
              </UCard>
            </div>
          </div>
        </div>
        <div class="my-6">
          <UButton
            :ui="{ rounded: 'rounded-full' }"
            icon="i-solar-double-alt-arrow-right-line-duotone"
            :trailing="true"
            color="neutral"
            >See Details ...
          </UButton>
        </div>
      </UContainer>
    </section>
    <section class="research flex flex-col items-center">
      <h2 class="text-4xl">Background in Academic Research</h2>

      <div class="grid grid-cols-2">
        <div
          v-for="item in fetched_projects"
          class="dark:text-zinc-300 p-6 rounded backdrop-brightness-105 backdrop-blur-md dark:backdrop-blur-lg mx-auto w-9/12 h-1/2 py-36"
        >
          <p class="">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit sequi eaque vitae qui ratione, iusto animi
            modi quos ex, reiciendis, assumenda nisi nam harum! Eius nobis totam excepturi ab eos?
          </p>
        </div>
      </div>
      <div>See Details ...</div>
    </section>
    <section class="blog flex flex-col items-center h-screen">
      <div class="text-4xl">Blog Posts</div>
    </section>

    <USeparator />

    <!-- <div class="w-[300px] h-[300px] mx-auto p-[1px] rounded-lg father">
      <div class="h-full bg-black rounded-lg">
        <div class="bg-linear-to-bl from-zinc-500/20 to bg-zinc-800/20 h-full p-6 rounded-lg backdrop-brightness-200">
          <p class="text-zinc-500">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis itaque illum tempore. Dignissimos consectetur quod soluta earum cumque?
            Debitis, sequi! Dicta veniam cumque iusto! Saepe, assumenda iste! Hic, in ad!
          </p>
        </div>
      </div>
    </div> -->
    <!-- <div class="">
      <div class="m-12 meh p-4 w-fit">system</div>
    </div> -->
  </main>
</template>
<script setup lang="ts">
definePageMeta({
  layout: "main",
});

const { data: response } = await useAsyncData("projects", () => $fetch("/api/content/getprojects"), {
  getCachedData: (key, nuxtApp) => nuxtApp.payload.data[key] || nuxtApp.static.data[key],
});
let fetched_projects = computed(() => {
  return response.value.projects;
});
</script>
<style scoped>
.father {
  background: conic-gradient(gray 0deg, black 90deg, black 180deg, black 270deg, rgba(255, 145, 0, 0.548) 360deg);
  /* background-size: 10%; */
}
.meh {
  font-size: 16rem;
  color: transparent;
  background: conic-gradient(rgb(255, 255, 255) 0deg, rgba(0, 0, 0, 0.5) 360deg);
  background-clip: text;
  -webkit-background-clip: text;
}
.dady {
  overflow: hidden;
  /* width: min-content;
  height: min-content; */
}
.child {
  background: radial-gradient(rgb(255, 255, 255), rgb(44, 44, 44), rgba(0, 0, 0, 0));
  color: transparent;
  font-size: 3rem;
  background-color: transparent;
  /* -webkit-text-stroke: 1px rgba(0, 0, 0, 0.452); */
  background-clip: text;
  -webkit-background-clip: text;
  border-radius: 50px;
}
.up {
  text-align: center;
}

.hero {
  background-image: url("/sample12.svg");
  background-repeat: no-repeat;
  background-position: top;
}
.projects {
  background-image: url("/sample15.svg");
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
}

.research {
  background-image: url("/sample6.svg");
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
}
.blog {
  background-image: url("/sample5.svg");
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
}
</style>
