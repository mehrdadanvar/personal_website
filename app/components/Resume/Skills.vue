<template>
  <div class="grid grid-cols-1 gap-8 md:grid-cols-2">
    <ResumeSection title="Technical Skills">
      <ul class="list-disc pl-5 text-sm lg:text-base text-zinc-600 dark:text-zinc-300 leading-relaxed marker:text-teal-700 dark:marker:text-teal-400">
        <li v-for="(item, i) in skillItems" :key="i">{{ item }}</li>
      </ul>
    </ResumeSection>

    <ResumeSection title="Languages">
      <ul class="list-disc pl-5 text-sm lg:text-base text-zinc-600 dark:text-zinc-300 leading-relaxed marker:text-teal-700 dark:marker:text-teal-400">
        <li v-for="(item, i) in languageItems" :key="i">
          <span class="font-semibold text-zinc-800 dark:text-zinc-200">{{ item.label }}</span> — {{ item.text }}
        </li>
      </ul>
    </ResumeSection>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  skills?: Record<string, any>[];
  languages?: Record<string, any>[];
}>();

const skillItems = computed(() =>
  pickItems(props.skills).map((x) => x.text).filter(Boolean),
);

const languageItems = computed(() => pickItems(props.languages));
</script>
