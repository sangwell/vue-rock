<script setup lang="ts">
import { provide, ref } from 'vue'
import InjectChild from '@/components/widgets/InjectChild.vue'

const location = ref('North Pole')

function updateLocation() {
  location.value = 'South Pole'
}

provide('location', {
  location,
  updateLocation
})
</script>

<template>
  <div class="widget-layout">
    <div class="title">
      依赖注入
    </div>
    <div class="container">
      <InjectChild></InjectChild>
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