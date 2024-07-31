<script setup lang="ts">
import { ref } from 'vue'
import BlogPost from '@/components/widgets/BlogPost.vue'

const posts = ref([
  { id: 1, title: 'Apple' },
  { id: 2, title: 'Pear' },
  { id: 3, title: 'Orange' }
])

const selectedPosts = ref([])

const selected = (item: string) => {
  if (!selectedPosts.value.includes(item)) {
    selectedPosts.value.push(item)
  }
}
</script>

<template>
  <div class="widget-layout">
    <div class="title">
      组件基础
    </div>
    <div class="container">
      Selected:<span v-for="sp in selectedPosts">{{ sp }}</span>
      <BlogPost
        v-for="post in posts"
        :key="post.id"
        :title="post.title"
        @selected="selected"
      />
    </div>

  </div>
</template>

<style scoped>
.widget-layout {
  border: 1px solid #cccccc;
  height: 300px;
  margin-bottom: 16px;
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

span {
  cursor: pointer;
  background: #ff4b00;
  color: #ffffff;
  padding: 0px 7px;
  margin: 2px 3px;
  display: inline-block;
  border-radius: 7px;
}
</style>