<script setup lang="ts">
const model = defineModel('name',{ default: 'Default' })
</script>

<template>
  <span>My input</span> <input v-model="model">
</template>

<style scoped>

</style>