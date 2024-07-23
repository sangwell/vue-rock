<script setup lang="ts">
import { reactive, computed } from 'vue'

const author = reactive({
  name: 'John Doe',
  books: [
    'Vue 2 - Advanced Guide',
    'Vue 3 - Basic Guide',
    'Vue 4 - The Mystery'
  ]
})

// 一个计算属性 ref
const publishedBooksMessage = computed(() => {
  return author.books.length > 0 ? 'Yes' : 'No'
})

const clear = () => {
  author.books = []
}
</script>

<template>
  <div class="widget-layout">
    <div class="title">
      计算属性值
    </div>
    <div class="container">
      <button type="button" @click="clear()">clear()</button>
      <p>Has published books:</p>
      <span>{{ publishedBooksMessage }}</span>
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

  .number {
    font-size: 60px;
    font-weight: bold;
    text-align: center;
    padding: 30px 0;
  }

  .button-layout {
    padding: 0 30px;

    button {
      width: 80px;
      height: 32px;
    }

    .left {
      float: left;
    }

    .right {
      float: right;
    }
  }
}
</style>