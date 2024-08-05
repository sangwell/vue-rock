<script setup lang="ts">
import { ref } from 'vue'
import FancyButton from '@/components/widgets/FancyButton.vue'
import BaseLayout from '@/components/widgets/BaseLayout.vue'
import FancyList from '@/components/widgets/FancyList.vue'
</script>

<template>
  <div class="widget-layout">
    <div class="title">
      插槽
    </div>
    <div class="container">
      <FancyButton>Click me!</FancyButton>
      <BaseLayout>
        <template v-slot:header>
          It's header
        </template>
        <template v-slot:body>
          It's body
        </template>
        <template v-slot:footer>
          It's footer
        </template>
      </BaseLayout>
      <FancyList :per-page="10">
        <template #item="{ body, username, likes }">
          <div class="item">
            <p>{{ body }}</p>
            <p class="meta">by {{ username }} | {{ likes }} likes</p>
          </div>
        </template>
      </FancyList>
    </div>

  </div>
</template>

<style scoped>
.widget-layout {
  border: 1px solid #cccccc;
  height: 300px;
  margin-bottom: 16px;
  overflow: auto;
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
}
.meta {
  font-size: 0.8em;
  color: #42b883;
}
</style>