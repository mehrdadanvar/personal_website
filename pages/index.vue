<template>
  <main class="">
    <Navbar />
    <!-- <div class="flex justify-center items-center">
      <div class="w-[500px] h-[50px] bg-gradient-to-l from-orange-600 to-gray-600 rounded-full -rotate-[15deg]"></div>
      <div class="w-[300px] h-[300px] bg-orange-600 rounded-full z-50"></div>
      <div class="w-[500px] h-[50px] bg-gradient-to-r from-orange-600 to-black rounded-full rotate-[15deg]"></div>
    </div> -->
    <div class=""></div>
    <div class="up relative text-center pt-36">
      <div class="dady">
        <span class="child">Mehrdad Anvar</span>
      </div>
    </div>
    <div class="dark:text-zinc-500 p-6 rounded backdrop-brightness-105 backdrop-blur-sm dark:backdrop-blur-lg mx-auto w-9/12 h-1/2">
      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nobis totam explicabo fuga consequuntur nihil praesentium. Dignissimos omnis quod
      cupiditate illum. Perspiciatis hic blanditiis totam obcaecati ut architecto nam sed commodi.
    </div>
    <div class="dark:text-zinc-500 p-6 rounded backdrop-brightness-105 backdrop-blur-md dark:backdrop-blur-lg mx-auto w-9/12 h-1/2 py-36">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit sequi eaque vitae qui ratione, iusto animi modi quos ex, reiciendis, assumenda
      nisi nam harum! Eius nobis totam excepturi ab eos?
    </div>
    <div class="dark:text-zinc-500 p-6 rounded backdrop-brightness-105 backdrop-blur-md dark:backdrop-blur-lg mx-auto w-9/12 h-1/2 py-36">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit sequi eaque vitae qui ratione, iusto animi modi quos ex, reiciendis, assumenda
      nisi nam harum! Eius nobis totam excepturi ab eos?
    </div>
    <div class="dark:text-zinc-500 p-6 rounded backdrop-brightness-105 backdrop-blur-md dark:backdrop-blur-lg mx-auto w-9/12 h-1/2 my-36">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit sequi eaque vitae qui ratione, iusto animi modi quos ex, reiciendis, assumenda
      nisi nam harum! Eius nobis totam excepturi ab eos?
    </div>
    <div class="dark:text-zinc-500 p-6 rounded backdrop-brightness-105 backdrop-blur-md dark:backdrop-blur-lg mx-auto w-9/12 h-1/2 my-36">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit sequi eaque vitae qui ratione, iusto animi modi quos ex, reiciendis, assumenda
      nisi nam harum! Eius nobis totam excepturi ab eos?
    </div>
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
<script setup></script>
<style scoped>
main {
}
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
</style>
