<template>
  <h3 class="text-xl text-zinc-700 col-span-1">{{ props.year }}</h3>
  <div class="flex flex-col gap-2 col-span-3">
    <h3
      class="text-xl text-zinc-600 dark:text-zinc-400 dark:hover:text-zinc-300 lg:text-2xl hover:text-zinc-900 transition-all duration-200 ease-in-out hover:underline"
    >
      <a :href="props.pdf" target="_blank">{{ props.title }}</a>
    </h3>
    <div class="flex gap-2">
      <p class="text-zinc-600">{{ props.journal }}.</p>
      <!-- <UIcon
        name="i-solar-map-arrow-square-bold-duotone"
        class="text-2xl transition-all duration-75 ease-linear text-sky-700 hover:translate-x-2 hover:scale-105"
      /> -->
    </div>
    <div class="flex flex-wrap gap-1">
      <span
        class="text-zinc-600"
        v-for="(author, index) in props.authors"
        :key="index"
        :class="{ 'text-teal-700 ': author == 'Mehrdad Anvar' }"
        >{{ author }}{{ index < props.authors.length - 1 ? ", " : "." }}</span
      >
    </div>
    <div class="flex gap-2 items-center">
      <span class="text-zinc-500">Abstract</span>
      <UIcon
        name="i-solar-double-alt-arrow-down-line-duotone"
        class="text-lg transition-all duration-150 ease-linear"
        :class="{ 'rotate-0': !isOpen, 'rotate-180': isOpen }"
        @click="show_abstract"
      />
    </div>

    <div class="transition-all ease-linear duration-75 text-slate-500 text-sm md:text-base">
      <div
        :class="{ hidden: !isOpen, 'ease-linear duration-75': isOpen }"
        class="text-justify"
        v-for="(value, key) in props.abstract"
      >
        {{ key }}: {{ value }}
      </div>
    </div>
  </div>
</template>

<script setup>
let props = defineProps({
  title: { type: String, default: "Title" },
  journal: { type: String, default: "Journal" },
  year: { type: Number, default: 2020 },
  authors: { type: Array, default: () => ["Mehrdad Anvar", "et al"] },
  pdf: { type: String, default: "" },
  abstract: { type: Object, default: "lorem ipsum" },
});
let isOpen = ref(false);
function show_abstract() {
  isOpen.value = !isOpen.value;
}
</script>

<style scoped></style>
