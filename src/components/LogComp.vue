<script setup lang="ts">
import type { logType } from "../App.vue";

defineProps<{
  logs: logType[];
}>();
</script>

///we take a loop to go through all the logs and show the type

<template>
  <div class="log">
    <h2>Logs</h2>
    <div v-for="x in logs" :key="x.id">
      <p><strong>{{ x.time }}</strong></p>
      <p><strong><u>{{ x.type }}</u></strong></p>
      <p>{{ x.text }}</p>
    </div>
  </div>
</template>

<style>
.log {
  background: white;
  border-radius: 10px;
  padding: 16px;
  width: 320px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
}
</style>
