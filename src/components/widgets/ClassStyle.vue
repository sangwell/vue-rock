<script setup lang="ts">
import { ref } from 'vue'

const isActive = ref(false)
const hasError = ref(false)
</script>

<template>
  <div class="widget-layout">
    <div class="title">
      类与样式绑定
    </div>
    <div class="container">
      <button type="button" @click="isActive=true;hasError=false">Active</button>
      <button type="button" @click="hasError=true;isActive=false">HasError</button>
      <div :class="{ active: isActive,'text-danger': hasError }">Text</div>
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

.active {
  background: #2c90ff;
  width: 50%;
  padding: 10px;
}

.text-danger {
  background: red;
  width: 50%;
  padding: 10px;
}


</style>