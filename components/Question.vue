<template>
  <div>
    <div class="flex">
      <div class="flex flex-col gap-4 p-6 my-6 w-1/2 rounded-lg border border-zinc-300">
        <div class="flex-col gap-4 justify-between items-center">
          <span class="">Department</span>
          <UInput class="" v-model="info_object.department" />
        </div>
        <div class="flex-col gap-4 justify-between items-center">
          <span>Category level_1</span>
          <UInput v-model="info_object.level_1" />
        </div>
        <div class="flex-col gap-4 justify-between items-center">
          <span>Subcategory level_2</span>
          <UInput v-model="info_object.level_2" />
        </div>
      </div>
      <UTextarea placeholder="Care Presentation" :rows="10" v-model="body" variant="outline" class="p-6 w-1/2" :ui="{ base: 'text-xl' }"></UTextarea>
    </div>
    <div class="flex flex-col gap-4 py-12 my-6 border divide-slate-400 options">
      <div v-for="(option, index) in options">
        <div class="flex gap-12 justify-center items-center">
          <span> Option {{ index + 1 }}</span>
          <UInput v-model="options[index].text" class="px-6 w-1/2" size="lg" />
          <UCheckbox v-model="options[index].correct" label="Correct" :disabled="options[index].disabled" @click="lock_checkboxes(index)" />
        </div>
      </div>
    </div>
    <div>{{ options }}</div>
    <div class="flex gap-6 p-6 rounded-lg border border-zinc-300">
      <div class="flex-grow">
        <span>Description</span>
        <UTextarea v-model="response_object.description" :rows="7" />
      </div>
      <div class="flex-grow">
        <span>Details</span>
        <UTextarea v-model="response_object.details" :rows="7" />
      </div>
    </div>
    <div>
      <UButton @click="createQuestion">Create</UButton>
    </div>
  </div>
</template>
<script setup>
let options_count = new Array(5).fill("0");

let info_object = ref({ department: "", level_1: "", level_2: "" });

let body = ref("");

let options = ref(
  options_count.map((element, index) => {
    return { id: index, labale: "", text: "", correct: false, disabled: false };
  })
);
let correct = ref("");
let response_object = ref({ description: "", details: "", refrence: "" });

async function createQuestion() {
  if (Object.values(info_object.value).some((element) => element === "")) {
    return;
  }
  if (body.value === "") {
    return;
  }
  let final = { department };
}

async function lock_checkboxes(index) {
  if (Object.values(options.value).some((element) => element.correct === true)) {
    options.value.forEach((element) => {
      element.correct = false;
      element.disabled = false;
    });
  } else {
    for (let target = 0; target < options.value.length; target++) {
      if (target === index) {
        continue;
      } else {
        options.value[target].disabled = true;
      }
    }
  }
}

async function save() {}
</script>
<style scoped></style>
