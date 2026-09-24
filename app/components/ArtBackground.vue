<template>
  <div
    class="pointer-events-none absolute inset-x-0 z-0"
    :class="[customClass, positionClass, fitClass, toneClass, heightClass]"
    :style="{ backgroundImage: `url('${src}')` }"
    aria-hidden="true"
  />
</template>

<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    src: string;
    customClass?: string;
    positionClass?: string;
    fitClass?: string;
    toneClass?: string;
    heightClass?: string;
  }>(),
  {
    customClass: "",
    positionClass: "top-0 bg-top",
    fitClass: "bg-contain",
    toneClass: "opacity-70 dark:opacity-60 dark:invert",
    heightClass: "h-[360px] sm:h-[500px] lg:h-[680px]",
  },
);
</script>
