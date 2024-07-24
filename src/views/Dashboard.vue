<script setup lang="ts">
import Count from '@/components/widgets/Count.vue'
import CalculateAttribute from '@/components/widgets/CalculateAttribute.vue'
import ClassStyle from '@/components/widgets/ClassStyle.vue'
import ConditionalRendering from '@/components/widgets/ConditionalRendering.vue'
import ListRendering from '@/components/widgets/ListRendering.vue'
</script>

<template>
  <main>
    <h2>Dashboard</h2>
    <a-row :gutter="16">
      <a-col :span="6">
        <Count></Count>
      </a-col>
      <a-col :span="6">
        <CalculateAttribute></CalculateAttribute>
      </a-col>
      <a-col :span="6">
        <ClassStyle></ClassStyle>
      </a-col>
      <a-col :span="6">
        <ConditionalRendering></ConditionalRendering>
      </a-col>
    </a-row>
    <a-row :gutter="16">
      <a-col :span="6">
        <ListRendering></ListRendering>
      </a-col>
      <a-col :span="6">
      </a-col>
      <a-col :span="6">
      </a-col>
      <a-col :span="6">
      </a-col>
    </a-row>

  </main>
</template>

<style scoped>
main {
  padding: 10px;
}

</style>