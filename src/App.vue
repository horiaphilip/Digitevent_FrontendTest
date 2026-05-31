<script setup lang="ts">
import { ref, onMounted } from "vue";
import { fetchJoke, fetchFact } from "./services/api";
import ContentCard from "./components/ContentCard.vue";

const joke = ref("");
const fact = ref("");

async function getJoke() {
  // fetch a joke

  const result = await fetchJoke();
  joke.value = result;
}

async function getFact() {
  //fetch a fact
  const result = await fetchFact();
  fact.value = result;
}

onMounted(() => {
  getJoke();
  getFact();
});
</script>

//bind fetch w the get fct

<template>
  <div>
    <ContentCard type="joke" :content="joke" @fetch="getJoke" />

    <ContentCard type="fact" :content="fact" @fetch="getFact" />
  </div>
</template>
