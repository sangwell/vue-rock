<script setup lang="ts">
defineProps(['title', 'value'])
</script>

<template>
  <div class="border">
    <div class="name">
      {{ title }}
    </div>
    <div class="value">
      {{ value }}
    </div>
  </div>
</template>

<style scoped>
.border {
  height: 140px;
  border: 1px solid #cccccc;
  margin: 0 10px;
  border-radius: 10px;

  .name {
    height: 40px;
    padding: 0 12px;
    font-size: 16px;
    line-height: 40px;
  }

  .value {
    height: 100px;
    text-align: right;
    line-height: 100px;
    font-size: 40px;
    font-weight: bold;
    padding: 0 20px;
    color: green;
    overflow: hidden;
  }
}
</style>