<script setup lang="ts">
import Count from '@/components/widgets/Count.vue'
</script>

<template>
  <main>
    <h2>Dashboard</h2>
    <a-row :gutter="16">
      <a-col :span="6">
        <Count></Count>
      </a-col>
      <a-col :span="6">col-12</a-col>
      <a-col :span="6">col-12</a-col>
      <a-col :span="6">col-12</a-col>
    </a-row>

  </main>
</template>

<style scoped>
main {
  padding: 10px;
}

</style>