<script setup lang="ts">
import { ref } from 'vue'

const onCtrlClick = () => {
  console.log('AA')
}
</script>

<template>
  <div class="widget-layout">
    <div class="title">
      事件处理
    </div>
    <div class="container">
      <button @click.exact="onCtrlClick">A</button>

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