<template>
  <div
    class="mx-auto rounded-lg border border-zinc-700 bg-zinc-950/80 backdrop-blur-md overflow-hidden"
  >
    <!-- Header -->
    <div class="flex justify-end items-center gap-2 h-8 px-3 bg-zinc-800">
      <div class="w-3 h-3 rounded-full bg-red-500"></div>
      <div class="w-3 h-3 rounded-full bg-yellow-500"></div>
      <div class="w-3 h-3 rounded-full bg-green-500"></div>
    </div>

    <!-- Terminal -->
    <div class="flex text-sm md:text-base font-mono p-4">
      <!-- Line numbers -->
      <div class="pr-4 text-zinc-600 select-none text-right">
        <div v-for="(_, index) in script" :key="index" class="h-6">
          {{ index + 1 }}
        </div>
      </div>

      <!-- Content -->
      <div class="space-y-1">
        <div
          v-for="(line, index) in script"
          :key="index"
          class="flex whitespace-pre"
        >
          <!-- Prompt -->
          <span v-if="line.prompt" class="mr-2 text-green-400">
            {{ line.prompt }}
          </span>

          <!-- Text -->
          <span :class="line.color">
            {{ rendered[index] }}
            <span v-if="currentLine === index" class="cursor"> █ </span>
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";

interface TerminalLine {
  prompt?: string;
  text: string;
  color: string;
}

const script: TerminalLine[] = [
  {
    prompt: "mehrdad@portfolio:~$",
    text: "whoami",
    color: "text-zinc-200",
  },
  {
    text: "International Medical Graduate",
    color: "text-zinc-500",
  },
  {
    prompt: "mehrdad@portfolio:~$",
    text: "ls skills/",
    color: "text-zinc-200",
  },
  {
    text: "medicine/   programming/   statistics/",
    color: "text-sky-400",
  },
  {
    prompt: "mehrdad@portfolio:~$",
    text: "git log --oneline",
    color: "text-zinc-200",
  },
  {
    text: "e41f2c2 Built an EMR",
    color: "text-orange-400",
  },
  {
    text: "HEAD -> still learning...",
    color: "text-green-400",
  },
  {
    prompt: "mehrdad@portfolio:~$",
    text: "python3 await_immigration_bureaucracy.py",
    color: "text-zinc-200",
  },
];

const rendered = ref(script.map(() => ""));
const currentLine = ref(-1);

function sleep(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function typeLine(index: number, text: string) {
  currentLine.value = index;

  for (const char of text) {
    rendered.value[index] += char;
    await sleep(50 + Math.random() * 30); // natural typing
  }

  await sleep(250);
}

async function play() {
  await sleep(500);

  for (let i = 0; i < script.length; i++) {
    await typeLine(i, script[i].text);
  }

  currentLine.value = -1;
}

onMounted(play);
</script>

<style scoped>
.font-mono {
  font-family: "Cascadia Code", "JetBrains Mono", "Fira Code", monospace;
}

.cursor {
  animation: blink 1s infinite;
}

@keyframes blink {
  50% {
    opacity: 0;
  }
}
</style>
