<template>
  <div class="terminal text-zinc-500 border border-zinc-500 mx-auto rounded-lg min-w-fit backdrop-blur-md backdrop-brightness-105">
    <div class="bg-zinc-900 dark:bg-zinc-600/80 rounded-t-lg">
      <div class="flex flex-row gap-1 justify-end items-center h-7 pr-3">
        <div class="w-3 h-3 rounded-full bg-zinc-400"></div>
        <div class="w-3 h-3 rounded-full bg-zinc-500"></div>
        <div class="w-3 h-3 rounded-full bg-zinc-600"></div>
      </div>
    </div>
    <div class="terminal text-base flex flex-row gap-4 p-2">
      <div class="text-zinc-600">
        <p v-for="(x, index) in rendered_text" :key="x">
          {{ index + 1 }}
        </p>
      </div>
      <div class="text-zinc-400">
        <p>{{ rendered_text[0] }}</p>
        <p>{{ rendered_text[1] }}</p>
        <p>{{ rendered_text[2] }}</p>
        <p>{{ rendered_text[3] }}</p>
        <p>{{ rendered_text[4] }}</p>
      </div>
    </div>
    <!-- <p>{{ rendered_text }}</p> -->
  </div>
</template>
<script setup>
import { ref } from "vue";
let major_text = [
  "$ sudo apt-get install arch-linux forget all other operating systems",
  "let backgroundJob = await liflongLearn(['medicine','computer_scince','statistics']) ",
  "from skills import programming",
  "function delay('immigrate to canada'){",
  "}",
  "codes =  ['1', '2', '4']",
  "codes =  ['1', '2', '4']",
];
let minor_text = ref("");

let rendered_text = ref(new Array(major_text.length).fill(""));

const timer = (ms) => new Promise((res) => setTimeout(res, ms));

async function minor_render(input, time, index) {
  for (let i = 0; i < input.length; i++) {
    rendered_text.value[index] += input[i];
    await timer(time);
  }
}

async function order(main_array) {
  for (let i = 0; i < main_array.length; i++) {
    await minor_render(main_array[i], 20, i);
  }
}

async function delay() {
  await timer(500);
  order(major_text);
}

delay();
</script>

<style scoped>
/* .test {
  color: #f7e1ff;
  text-shadow: 0 0 7px #fff, 0 0 10px #fff, 0 0 21px #fff, 0 0 42px #0fa;
} */
.terminal {
  font-family: "Source Code Pro";
}
</style>
