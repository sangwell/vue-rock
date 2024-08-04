<script setup lang="ts">
import { ref } from 'vue'
import DefineModelChild from '@/components/widgets/DefineModelChild.vue'

const msg = ref()
</script>

<template>
  <div class="widget-layout">
    <div class="title">
      双向绑定
    </div>
    <div class="container">
      <h1>{{ msg }}</h1>
      <DefineModelChild v-model:name="msg"></DefineModelChild>
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