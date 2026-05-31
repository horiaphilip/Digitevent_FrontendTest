<script setup lang="ts">
/// when the button clicked; emit to the parent to fetch more

defineProps<{
  type: "joke" | "fact";
  content: string;
}>();

// button clicked
defineEmits<{
  fetch: [];
}>();
</script>

<template>
  <div class="card">
    <h2>A cool {{ type }}</h2>
    <p>{{ content }}</p>
    <button class="button" @click="$emit('fetch')"></button>
  </div>
</template>

<style>
.card {
  background: white;
  border-radius: 10px;
  padding: 16px;
  margin-bottom: 16px;
  width: 320px;
}

.button {
  background: red;
  color: white;
  border: none;
  border-radius: 50%;
  width: 36px;
  height: 36px;
  font-size: 16px;
  cursor: pointer;
}
</style>
