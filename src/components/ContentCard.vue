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
    <div class="header">
      <h2>A cool <strong><u>{{ type }}</u></strong></h2>
      <button class="button" @click="$emit('fetch')"></button>
    </div>
    <p><strong>{{ content }}</strong></p>
  </div>
</template>

<style>
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.card {
  background: white;
  border-radius: 10px;
  padding: 16px;
  margin-bottom: 16px;
  width: 320px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
}

.button {
  background: salmon;
  color: white;
  border: none;
  border-radius: 50%;
  width: 36px;
  height: 36px;
  font-size: 16px;
  cursor: pointer;
}
</style>
