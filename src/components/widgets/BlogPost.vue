<script setup lang="ts">
defineProps(['title'])
defineEmits(['selected'])
</script>

<template>
  <div>
    <span @click="$emit('selected',title)">{{ title }}</span>
  </div>
</template>

<style scoped>
span {
  cursor: pointer;
  background: #00ca00;
  color: #ffffff;
  padding: 0px 7px;
  margin: 2px 3px;
  display: inline-block;
  border-radius: 7px;
}
</style>