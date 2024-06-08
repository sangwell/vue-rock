<script setup lang="ts">
import { ref } from 'vue'

const message = ref('')
const count = ref(0)
</script>

<template>
  <main>
    <h1>Details</h1>
    <div class="row">
      <p>Message is: {{ message }}</p>
      <input v-model="message" placeholder="edit me" />
    </div>

    <div class="row">
      <button @click="count++">Add 1</button>
      <p>Count is: {{ count }}</p>
    </div>
  </main>
</template>

<style scoped>
.row {
  padding: 20px 0;
}
</style>
