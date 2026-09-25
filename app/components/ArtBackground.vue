<template>
  <div class="pointer-events-none aria-hidden" :class="[
    fixed ? 'fixed inset-0 z-0' : 'absolute inset-x-0 z-0',
    customClass,
    positionClass,
    fitClass,
    toneClass,
    heightClass,
  ]" :style="{ backgroundImage: `url('${src}')` }" />
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
    fixed?: boolean;
  }>(),
  {
    customClass: "",
    positionClass: "top-0 bg-center",
    fitClass: "bg-no-repeat bg-contain",
    toneClass: "opacity-70 dark:opacity-60 dark:invert",
    heightClass: "sm:h-[500px] lg:h-[680px]",
    fixed: false,
  },
);
</script>
