<script setup lang="ts">
import { ref, onMounted } from "vue";
import { fetchJoke, fetchFact } from "./services/api";
import ContentCard from "./components/ContentCard.vue";
import LogComp from "./components/LogComp.vue";

export interface logType {
  id: number;
  type: "joke" | "fact";
  time: string;
}
//states+array for logs
const joke = ref("");
const fact = ref("");
const logs = ref<logType[]>([]);
let nextId = 1;

//to display time in logs
function getTime() {
  return new Date().toLocaleTimeString();
}

function addLog(type: "joke" | "fact") {
  // add a new log to the beggining
  logs.value.unshift({
    id: nextId++,
    type: type,
    time: getTime(),
  });
}

async function getJoke() {
  // fetch a joke
  const result = await fetchJoke();
  joke.value = result;
  addLog("joke");
}

async function getFact() {
  //fetch a fact
  const result = await fetchFact();
  fact.value = result;
  addLog("fact");
}

onMounted(() => {
  getJoke();
  getFact();
});
</script>

<template>
  <div>
    <ContentCard type="joke" :content="joke" @fetch="getJoke" />
    <ContentCard type="fact" :content="fact" @fetch="getFact" />
    <LogComp :logs="logs" />
  </div>
</template>
