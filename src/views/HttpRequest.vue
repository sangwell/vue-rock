<script setup lang="ts">
import { ref } from 'vue'
import axios from 'axios'

const apiResult = ref<string>('')

const getData = () => {
  axios.get<any>('https://randomuser.me/api?noinfo').then(data => {
    apiResult.value = JSON.stringify(data.data, null, 2);
  })
}
</script>

<template>
  <main>
    <h2>Http Request</h2>
    <a-button type="primary" class="btn-margin" @click="getData()">获取在线数据</a-button>
    <a>请求地址：https://randomuser.me/api?noinfo</a>
    <a-textarea v-model:value="apiResult" placeholder="返回结果" :rows="20" />
  </main>
</template>

<style scoped>
main {
  padding: 10px;
}

.btn-margin {
  margin-bottom: 10px;
}
</style>