<template>
  <div class="text-slate-500 bg-gray-50 border border-slate-200 rounded-lg h-48 w-full overflow-hidden">
    <div class="bg-gray-300 rounded-t-lg">
      <div class="flex gap-1 items-center h-7 pr-3">
        <p class="text-xs ml-3">graph.r</p>
        <div class="w-3 h-3 rounded-full bg-gray-400 ml-auto"></div>
        <div class="w-3 h-3 rounded-full bg-gray-600"></div>
        <div class="w-3 h-3 rounded-full bg-teal-800"></div>
      </div>
    </div>
    <div class="terminal text-sm flex flex-row gap-4 p-2 tracking-wider">
      <div class="text-teal-600/50 border-r border-slate-200">
        <p v-for="x in major_text.length" :key="x">
          <span>{{ x }}</span>
        </p>
      </div>
      <div class="text-sky-900/50">
        <p v-for="x in rendered_text">
          {{ x }}
        </p>
      </div>
    </div>
  </div>
</template>
<script setup>
let major_text = [
  "data = seq(1.5, 5, 0.015)",
  "choices = c(rgb(0,0,0,0.5), rgb(0.2,0.5,0.5,0.5), rgb(1,1,1,1))",
  "Colors = colorRampPalette(choices,alpha=T)(length(data))",
  'curve(dweibull(x, 1, 1), -1, 10 , 2000, axes=FALSE, xlab = NA, ylab = NA, col="white")',
  "for (i in seq_along(data)) {",
  "curve(dweibull(x, 3, data[i]), -1, 10 , 2000, add = T, col=Colors[i])",
  "}",
];
let minor_text = ref("");

let rendered_text = ref(["", "", "", "", "", "", ""]);

const timer = (ms) => new Promise((res) => setTimeout(res, ms));

async function minor_render(input, time, index) {
  for (let i = 0; i < input.length; i++) {
    rendered_text.value[index] += input[i];
    await timer(time);
  }
}

async function order(main_array) {
  for (let i = 0; i < main_array.length; i++) {
    await minor_render(main_array[i], 10, i);
  }
}

async function delay() {
  await timer(1000);
  order(major_text);
}

delay();
</script>

<style scoped></style>
