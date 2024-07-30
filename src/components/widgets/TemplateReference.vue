<script setup lang="ts">
import { ref, onMounted } from 'vue'

// 声明一个 ref 来存放该元素的引用
// 必须和模板里的 ref 同名
const input = ref<HTMLInputElement | null>(null)

onMounted(() => {
  if (input.value) {
    input.value.focus()
  }

})
</script>

<template>
  <div class="widget-layout">
    <div class="title">
      模板引用
    </div>
    <div class="container">
      <input ref="input" />
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