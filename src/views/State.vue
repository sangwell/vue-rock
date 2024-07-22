<script setup lang="ts">
import LeftPanel from '@/components/state-components/LeftPanel.vue'
import RightPanel from '@/components/state-components/RightPanel.vue'
import {store} from '@/shared/state-store/store'
</script>

<template>
  <main>
    <h2>状态管理</h2>

    <a-button type="primary" class="btn-margin" @click="store.count++">count++</a-button>

    <a-row :gutter="16">
      <a-col :span="12">
        <LeftPanel></LeftPanel>
      </a-col>
      <a-col :span="12">
        <RightPanel></RightPanel>
      </a-col>
    </a-row>
  </main>
</template>

<style scoped>
main {
  padding: 10px;
}
.btn-margin{
  margin-bottom: 10px;
}
</style>