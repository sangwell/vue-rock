<script setup lang="ts">
import { ref, reactive } from 'vue'

const items = ref([{ message: 'Foo' }, { message: 'Bar' }])
const myObject = reactive({
  title: 'How to do lists in Vue',
  author: 'Jane Doe',
  publishedAt: '2016-04-10'
})
</script>

<template>
  <div class="widget-layout">
    <div class="title">
      列表渲染
    </div>
    <div class="container">
      <li v-for="(item,index) in items">{{ index + 1 }}-{{ item.message }}</li>

      <li v-for="(value, key) in myObject">
        {{ key }}: {{ value }}
      </li>
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