<template>
  <article class="mt-12 target">
    <div class="flex gap-6 text-lg text-gray-600">
      <div class="px-12 py-12 mb-6 w-7/12 leading-10 bg-gray-100 rounded-2xl border border-white qq">
        <div class="mb-6 w-40 text-center text-violet-600 bg-violet-100 rounded-full border">
          Question {{ question.ui_id + 1 }} / {{ question.question_length }}
        </div>
        <UDivider class="my-3"></UDivider>
        <p>{{ question.source }}</p>
        <p v-if="question.body">{{ question.body }}</p>
        <p v-else>{{ question.question_body }}</p>
        <p>{{ questions.length }} {{ current_index }}</p>
        <div>
          <div v-if="question.body_table" class="py-6">
            <table class="border border-gray-200">
              <thead>
                <tr>
                  <th>Index</th>
                  <th>Value</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="row in question.body_table">
                  <td class="px-3 border-t">{{ row.index_name }}</td>
                  <td class="px-3 border-t">{{ row.index_value }}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <div class="w-5/12">
        <div class="flex flex-col overflow-clip bg-white rounded-xl options shadow-custom">
          <div class="">
            <div class="flex justify-between items-center px-6 py-8 bg-gray-200">
              <p class="px-4 py-1 text-violet-800 bg-purple-100 rounded-full">Choose Your Answer</p>
              <div class="flex gap-3 items-center">
                <div class="show-hide">
                  <span v-if="!details_visible" class="flex gap-3 items-center">
                    <UIcon name="i-solar-eye-closed-bold" />
                    <p class="">See Explanation</p>
                  </span>
                  <span v-else class="flex gap-3 items-center">
                    <UIcon name="i-solar-eye-line-duotone" />
                    <p>Hide Explanation</p>
                  </span>
                </div>
                <UToggle v-model="details_visible" color="violet" class="shadow-custom" />
              </div>
            </div>
            <div class="p-6 bg-gray-100">
              <URadioGroup v-model="selected_answer" :options="available_options" color="purple" />
              {{ selected_answer }}
            </div>
          </div>
          <div class="flex flex-row gap-6 justify-center items-center py-6 bg-gray-200 border border-gray-200">
            <UButton @click="chechAnswer" class="shadow-custom" icon="i-solar-question-circle-bold" :trailing="true">Check Answer</UButton>
            <UButton @click="post_response" class="px-12 bg-violet-500 hover:bg-violet-700" icon="i-solar-round-arrow-up-bold" :trailing="true"
              >Submit</UButton
            >
            <button class="px-6 py-1 rounded-full butt shadow-custom">sample</button>
          </div>
          <div class="h-16 text-center bg-gray-100">
            <div v-if="answer_object.status !== null" class="py-3">
              <div
                v-if="answer_object.status == true"
                class="flex gap-3 justify-center items-center font-semibold text-cyan-800 bg-cyan-50 rounded-lg"
              >
                <span class="text-3xl text-cyan-600"><UIcon name="i-solar-chat-round-check-bold"></UIcon></span>
                <p>{{ answer_object.text }}</p>
              </div>
              <div v-else class="flex gap-3 justify-center items-center font-semibold text-gray-500 bg-gray-100 rounded-lg">
                <span class="text-3xl text-gray-600"><UIcon name="i-solar-shield-warning-bold"></UIcon></span>
                <p>{{ answer_object.text }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- <div>{{ question.status }} {{ status_result }}</div> -->
    <div class="image" v-if="question.has_image">
      <BulletImage :case_id="question.source_id" />
    </div>
    <div class="image" v-if="question.body_image">
      <img :src="`https://my.aceqbank.com${question.body_image}`" alt="" class="mx-auto my-6 rounded-2xl" />
    </div>
    <div>
      <div class="gcse-search"></div>
    </div>
    <div class="border bg-gray-200/50">
      <div class="p-6 leading-8 text-gray-700 rounded-xl transition-all duration-75 response" v-if="details_visible">
        <!-- <UTabs :items="tabs" :default-index="0" /> -->
        <div class="controls">{{ question.title }}</div>

        <div class="p-6 bg-white rounded-lg border">
          <h4 class="inline-block px-6 mb-6 text-violet-600 rounded-full bg-primary-100">Desciption</h4>
          <div v-if="question.source.id == 1">
            <div v-for="sentence in question.response.description" class="text-lg leading-9">
              <p v-if="sentence.includes('correct')" class="font-semibold">{{ sentence }}</p>
              <p v-else>{{ sentence }}</p>
            </div>
          </div>
          <div v-else>
            <p class="text-lg leading-9">{{ question.response.description }}</p>
          </div>
        </div>
        <div class="p-6 bg-white rounded-lg border">
          <h4 class="inline-block px-6 text-violet-600 rounded-full bg-primary-100">Details</h4>
          <p v-for="member in question.response.details" class="text-lg leading-9">{{ member }}</p>
        </div>
        <div class="p-4 font-semibold bg-white rounded-lg summary">
          <div v-if="question.source.id < 3">
            {{ question.response.summary }}
          </div>
        </div>
      </div>
      <div v-if="question.response.image && details_visible" class="p-6 bg-white border">
        <p class="text-red-500">
          <img :src="'https://my.aceqbank.com' + question.response.image" alt="" />
        </p>
      </div>
      <div>
        <p>Edit question</p>
        <UToggle v-model="edit_question" />
        <div v-if="edit_question">
          <UpdateLevels
            :info="{
              department: question.department,
              _id: question._id,
              level_1: question.level_1,
              level_2: question.level_2,
            }"
            :question="question"
          />
        </div>
      </div>
    </div>
  </article>
</template>
<script setup>
let props = defineProps({
  case: { type: Object },
  questions: { type: Array },
  current_index: { type: Number },
});

let question = props.case;
let questions = props.questions;
let current_index = props.current_index;
console.log(current_index);

let answers = ["A", "B", "C", "D", "E"];
let answer_object = ref({ status: null, text: "" });
let selected_answer = ref("");
let details_visible = ref(false);
let available_options = ref(
  question.options.map((element, index) => {
    return {
      id: index,
      label: answers[index] + " ) " + element.text,
      value: element.text,
    };
  })
);

let known_correct = computed(() => {
  return question.options.find((element) => element.correct === true);
});
async function chechAnswer() {
  if (selected_answer.value == "") {
    answer_object.value.status = null;
    answer_object.value.text = "Choose an Answer First!";
  }
  if (known_correct.value.text == selected_answer.value) {
    answer_object.value.status = true;
    answer_object.value.text = `Correct answer is ${known_correct.value.text}`;
  } else {
    answer_object.value.status = false;
    answer_object.value.text = `You want to reconsider`;
  }

  // if (answers[question.response.correct] == selected_answer.value) {
  //   answer_object.value.status = true;
  //   answer_object.value.text = `Correct answer is ${answers[question.response.correct]}`;
  // } else {
  //   answer_object.value.status = false;
  //   answer_object.value.text = "You want to reconsider !";
  // }
}

async function post_response() {
  if (selected_answer.value == "" || question.user.seen == true) {
    console.log("you should provide a response or already answered");
    return;
  }
  let response = await $fetch("/api/saveAnswerDepartments", {
    method: "POST",
    body: {
      _id: question._id,
      inter_id: question.inter_id,
      department: question.department,
      source_id: question.source.id,
      response: selected_answer.value,
    },
  });
  console.log(response);
}

let edit_question = ref(false);
////////////////////////////////////
watch(selected_answer, (newValue, oldValue) => {
  if (newValue !== oldValue) {
    answer_object.value = { status: null, text: "" };
  }
});

// useHead({ script: [{ src: "https://cse.google.com/cse.js?cx=a67116a0e1d064af9", async: true }] });
////////////////////////////// publish status /////////////////////////

let status_result = ref(question.status);
</script>
<style scoped>
.qq {
  box-shadow: inset 20px 20px 50px 10px rgba(255, 255, 255), inset -20px -20px 50px 10px rgba(255, 255, 255);
}
.butt:active {
  background-color: rgb(218, 218, 218);
  border: 2px solid white;
}
/* .target {
  font-family: Lato;
} */
</style>
