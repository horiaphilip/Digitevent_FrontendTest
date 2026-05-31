<script setup lang="ts">
import type { logType } from "../App.vue";

defineProps<{
  logs: logType[];
}>();
</script>

///we take a loop to go through all the logs and show the type

<template>
  <div>
    <h2>Logs</h2>
    <div v-for="x in logs" :key="x.id">
      <p>{{ x.time }}</p>
      <p>{{ x.type }}</p>
      <p>{{ x.text }}</p>
    </div>
  </div>
</template>
