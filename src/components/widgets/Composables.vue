<script setup lang="ts">
import { useMouse } from '../script/mouse.js'

const { x, y } = useMouse()
</script>

<template>
  <div class="widget-layout">
    <div class="title">
      组合式函数
    </div>
    <div class="container">
      Mouse position is at: {{ x }}, {{ y }}
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