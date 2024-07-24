<script setup lang="ts">
import { ref } from 'vue'

const awesome=ref(true);
</script>

<template>
  <div class="widget-layout">
    <div class="title">
      条件渲染
    </div>
    <div class="container">
      <button @click="awesome = !awesome">Toggle</button>
      <h1 v-if="awesome">Vue is awesome!</h1>
      <h1 v-else>Oh no 😢</h1>
    </div>

  </div>
</template>

<style scoped>
.widget-layout {
  border: 1px solid #cccccc;
  height: 300px;
  margin-bottom: 16px;
}

.title {
  height: 36px;
  line-height: 36px;
  padding: 0 12px;
  font-weight: bold;
  border-bottom: 1px solid #cccccc;
}

.container {
  padding: 12px;
}
</style>