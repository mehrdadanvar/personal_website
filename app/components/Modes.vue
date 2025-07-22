<template>
  <div class="h-12 justify-around p-3 my-1 items-center rounded-full">
    <div class="flex">
      <p v-for="element in states" class="hover:cursor-pointer">
        <UIcon :name="element.icon_name" class="text-xl px-6 text-zinc-500" @click="changeColrMode(element.condition)" />
      </p>
    </div>
  </div>
</template>
<script setup>
let states = [
  {
    id: 1,
    icon_name: "i-solar-sun-2-bold-duotone",
    condition: "light",
  },
  {
    id: 3,
    icon_name: "i-solar-moon-stars-bold",
    condition: "dark",
  },
];
const colorMode = useColorMode();
async function changeColrMode(input) {
  colorMode.preference = input;
}
</script>
<style scoped></style>
