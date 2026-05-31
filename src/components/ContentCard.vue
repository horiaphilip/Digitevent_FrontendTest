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
  <div>
    <h2>A cool {{ type }}</h2>
    <p>{{ content }}</p>
    <button @click="$emit('fetch')">Get new {{ type }}</button>
  </div>
</template>
