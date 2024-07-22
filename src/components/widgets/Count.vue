<script setup lang="ts">
import { ref } from 'vue'
import type { Ref } from 'vue'

const count: Ref<number> = ref(0)
</script>

<template>
  <div class="widget-layout">
    <div class="title">
      计数器
    </div>
    <div class="container">
      <div class="number">
        {{ count }}
      </div>
      <div class="button-layout">
        <button class="left" @click="count--">-</button>
        <button class="right" @click="count++">+</button>
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