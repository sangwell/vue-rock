<script setup lang="ts">
import { ref } from 'vue'
import Apple from './Apple.vue'
import Pear from './Pear.vue'
import Orange from './Orange.vue';

const currentTab = ref(0)

const tabs = [Apple,
  Pear,
  Orange]
</script>

<template>
  <div class="widget-layout">
    <div class="title">
      动态组件
    </div>
    <div class="container">
      <div class="demo">
        <button
          v-for="(tab,index) in tabs"
          :key="tab"
          :class="['tab-button', { active: currentTab === index }]"
          @click="currentTab = index"
        >
          {{ index+1 }}
        </button>
        <component :is="tabs[currentTab]" class="tab"></component>
      </div>
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

.demo {
  font-family: sans-serif;
  border: 1px solid #eee;
  border-radius: 2px;
  padding: 15px 10px;
  margin-bottom: 40px;
  user-select: none;
  overflow-x: auto;
}

.tab-button {
  padding: 6px 10px;
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
  border: 1px solid #ccc;
  cursor: pointer;
  background: #f0f0f0;
  margin-bottom: -1px;
  margin-right: -1px;
}
.tab-button:hover {
  background: #e0e0e0;
}
.tab-button.active {
  background: #e0e0e0;
}
.tab {
  border: 1px solid #ccc;
  padding: 10px;
}
</style>