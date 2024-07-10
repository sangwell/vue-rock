<script setup lang="ts">
import { onMounted, onUnmounted } from 'vue'
import { ref } from 'vue'
import Card from '../components/Card.vue'
// 生命周期
onMounted(() => {
  console.log(`the component is now mounted.`)
})

onUnmounted(() => {
  console.log(`the component is now unmounted.`)
})

const items = ref([
  { name: '日期', value: '星期一' },
  { name: '温度', value: '31°C' },
  { name: '天气', value: '晴' },
  { name: '气压', value: '101kPa' },
  { name: '风速', value: '10m/s' }
])
</script>

<template>
  <main>
    <h2>首页</h2>
    <div class="box-layout">
      <div class="box-item" v-for="item in items">
        <Card :title="item.name"
              :value="item.value" />
      </div>
    </div>

  </main>

</template>

<style scoped>
main {
  padding: 10px;
}
.box-layout {
  display: flex;
}

.box-item {
  width: 25%;
  height: 100px;
  border: none;
  flex: 1;
}
</style>
