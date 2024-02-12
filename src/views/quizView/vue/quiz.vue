<script setup>
import { ref, watch } from 'vue';

import questions from "../data/quiz.json"
import router from '@/router/index';

var status = false
const attemptedQuestion = ref(0)
const marks = ref(0)
const count = ref(0)
const ans = ref(0)
const positionNext = ref("Next")
const positionPrev = ref("Back")
const chengeBGto = "bg-amber-800"
const currentQ = ref(questions[count.value])



watch(ans, () => {
  questions[count.value].chosenOne = ans.value
  // console.log(questions[count.value].chosenOne)
  console.log(ans.value)
})

function nextPg() {
  positionPrev.value = "Previous"
  if (count.value < questions.length - 1) {
    if (questions[count.value].chosenOne == "") {
      console.log("Empty")
    }
    ++count.value;
    currentQ.value = questions[count.value];

  }
  else if (positionNext.value == "Submit") {
    let result = confirm("Do you want to continue?");
    if (result == true) {
      alert("You chose to continue.");
      marks.value = 0
      attemptedQuestion.value = 0
      questions.forEach((element) => {
        if (element.chosenOne == "") {
          console.log(attemptedQuestion.value, questions.length)
        } else if (element.chosenOne != "") {
          ++attemptedQuestion.value
          if (element.chosenOne == element.correct) {
            ++marks.value
          }

        }
      })
      if (attemptedQuestion.value == questions.length) {
        router.push({ name: 'quizEnd', params: { marks: marks.value } });
      } else if (attemptedQuestion.value < questions.length) {
        alert("Please attempt all Quesions.")
      }
    } else {
      alert("You chose to cancel.");
    }
  }
  else if (count.value <= questions.length - 1) {
    positionNext.value = "Submit"
    status = true
  }

}

function prevPg() {
  if (positionPrev.value == "Back") {
    router.push('/')
  }
  else if (count.value == 0) {
    positionPrev.value = "Back"

  } else if (count.value >= 1) {
    if (positionNext.value === "Submit") {
      positionNext.value = "Next"

      status = false
    }
    positionPrev.value = "Back"
    --count.value;
    currentQ.value = questions[count.value];
    // positionPrev.value = "Previous"
  }


}
</script>

<template>
  <div class="w-screen h-screen bg-gray-800 justify-center text-blue-50 p-10 flex ">
    <div
      class="border border-blue-950  bg-black-600/20 rounded-md  px-2 py-3 shadow-lg shadow-blue-50 flex w-3/4 flex-col">
      <h1 class="text-7xl">Quiz</h1>
      <hr class="my-2">
      <h1 class="text-4xl py-1">{{ currentQ.qid }} / {{ questions.length }}</h1>
      <h1 class="text-4xl py-1">{{ currentQ.question }}</h1>
      <ul class="flex flex-col text-3xl py-4 px-6 *:mx-4 ">
        <li v-for="currentOpt in currentQ.options" :key="currentOpt">
          <input type="radio" class="bg-slate-600" name="options" v-model="ans" :value="currentOpt" :id="currentOpt"
            :checked="questions[count].chosenOne == currentOpt">
          <label class="mx-1" :for="currentOpt">{{ currentOpt }}</label>
        </li>
      </ul>
      <div class="mt-auto pb-2">
        <hr class="mb-4">
        <div class="flex justify-between">
          <button type="button" class="navB" @click="prevPg">
            &le;&le; {{ positionPrev }}</button>
          <button type="button" class="navB" :class="status && chengeBGto" @click="nextPg">
            {{ positionNext }} &ge;&ge;</button>
        </div>
      </div>
    </div>
  </div>
</template>


<style scoped>
.navB {
  @apply rounded-md p-4 border border-blue-900 hover:bg-blue-600/40 transition-all duration-200;
}
</style>