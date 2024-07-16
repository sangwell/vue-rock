<script setup lang="ts">
import { store } from '@/shared/state-store/store'
</script>

<template>
  <div class="panel-layout">
    <span>Left Panel</span>
    <h2>From store: {{ store.count }}</h2>
  </div>
</template>

<style scoped>
.panel-layout {
  border: 1px solid #333333;
  padding: 12px;
  height: 300px;
}
</style>