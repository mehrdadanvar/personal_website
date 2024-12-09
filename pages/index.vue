<template>
  <main class="">
    <Navbar />
    <!-- <div class="flex justify-center items-center">
      <div class="w-[500px] h-[50px] bg-gradient-to-l from-orange-600 to-gray-600 rounded-full -rotate-[15deg]"></div>
      <div class="w-[300px] h-[300px] bg-orange-600 rounded-full z-50"></div>
      <div class="w-[500px] h-[50px] bg-gradient-to-r from-orange-600 to-black rounded-full rotate-[15deg]"></div>
    </div> -->
    <!-- <div class="up relative text-center pt-36">
      <div class="dady">
        <span class="child">Mehrdad Anvar</span>
      </div>
    </div> -->
    <section class="hero h-screen pt-30 flex flex-col justify-around">
      <div class="dark:text-zinc-300 text-xl p-6 backdrop-brightness-[1.01] backdrop-blur-sm dark:backdrop-blur-lg mx-auto w-9/12 h-2/4 rounded-3xl">
        <div class="flex items-center justify-center">
          <div class="">
            <img src="/me2.png" alt="" class="rounded-full" width="300" />
          </div>
          <div class="w-1/2 p-6">
            <p class="text-4xl py-3 text-zinc-600 dark:text-zinc-400">Mehrdad Anvar</p>
            <div class="text-zinc-600 text-2xl py-3 flex flex-col gap-4 pl-6 dark:text-zinc-500">
              <p class="">MD</p>
              <p>Population and Public Health Researcher</p>
              <p>Full-Stack Web Developer</p>
            </div>
          </div>
        </div>
      </div>
      <div class="mx-auto text-center">
        <UIcon name="i-solar-double-alt-arrow-down-linear" class="text-5xl text-zinc-500 dark:text animate-bounce" />
      </div>
    </section>

    <section class="projects flex flex-col items-center my-48">
      <!-- <UDivider label="" size="xs" /> -->
      <h2 class="text-4xl">Projects I am Working On</h2>
      <div class="grid grid-cols-2">
        <div v-for="item in projects" class="text-zinc-600 dark:text-zinc-400 p-6 rounded mx-auto w-9/12 h-1/2 py-36">
          <DarkFile>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit sequi eaque vitae qui ratione, iusto animi modi quos ex, reiciendis,
            assumenda nisi nam harum! Eius nobis totam excepturi ab eos?
          </DarkFile>
        </div>
      </div>
      <div class="my-6">
        <UButton
          class="bg-zinc-100 text-zinc-500 dark:bg-zinc-700 dark:text-zinc-400 animate-pulse px-4"
          :ui="{ rounded: 'rounded-full' }"
          icon="i-solar-double-alt-arrow-right-line-duotone"
          :trailing="true"
          >See Details ...
        </UButton>
      </div>
    </section>
    <section class="research flex flex-col items-center">
      <UDivider label="Background in Academic Research" size="xs" />
      <div class="grid grid-cols-2">
        <div
          v-for="item in projects"
          class="dark:text-zinc-300 p-6 rounded backdrop-brightness-105 backdrop-blur-md dark:backdrop-blur-lg mx-auto w-9/12 h-1/2 py-36"
        >
          <p class="">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit sequi eaque vitae qui ratione, iusto animi modi quos ex, reiciendis,
            assumenda nisi nam harum! Eius nobis totam excepturi ab eos?
          </p>
        </div>
      </div>
      <div>See Details ...</div>
    </section>
    <section class="blog flex flex-col items-center h-screen">
      <div class="text-4xl">Blog Posts</div>
    </section>

    <UDivider />

    <!-- <div class="w-[300px] h-[300px] mx-auto p-[1px] rounded-lg father">
      <div class="h-full bg-black rounded-lg">
        <div class="bg-gradient-to-bl from-zinc-500/20 to bg-zinc-800/20 h-full p-6 rounded-lg backdrop-brightness-200">
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
<script setup>
definePageMeta({
  layout: "main",
});
let projects = [1, 2, 3, 4, 5, 6];
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
  /* background: linear-gradient(to right, rgb(0, 0, 0), gray); */
}
/* .target {
  font-size: 160px;
  color: rgba(255, 255, 255, 0.226);
  z-index: 5;
  background: linear-gradient(to right, gray, black);
  background-clip: text;
} */
/* .target::before {
  position: absolute;
  content: "Three Words";
  color: transparent;
  z-index: -1;
  font-size: 160px;
  scale: 102%;
  background: linear-gradient(to right, white, black);
  background-clip: text;
  -webkit-background-clip: text;
} */
img {
  filter: grayscale();
}
.hero {
  background-image: url("/sample12.svg");
  background-repeat: no-repeat;
  background-position: center;
}
.projects {
  background-image: url("/sample10.svg");
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
}

.research {
  background-image: url("/sample6.svg");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
}
.blog {
  background-image: url("/sample5.svg");
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
}
</style>
