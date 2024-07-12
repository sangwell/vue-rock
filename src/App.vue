<script setup lang="ts">
import { useRoute, RouterView, useRouter } from 'vue-router'

const router = useRouter()
const route = useRoute()

function navigateTo(path: string) {
  router.push(path)
}

const isActive = (path: string) => {
  return route.path === path
}
</script>

<template>
  <div class="container">
    <div class="top-layout">
      <h1>Vue 平台管理系统</h1>
    </div>
    <div class="main">
      <div class="menu-layout">
        <ul>
          <li :class="{ active: isActive('/') }" @click="navigateTo('/')">
            首页
          </li>
          <li :class="{ active: isActive('/chart') }" @click="navigateTo('/chart')">
            图表
          </li>
          <li :class="{ active: isActive('/http-request') }" @click="navigateTo('/http-request')">
            Http Request
          </li>
          <li :class="{ active: isActive('/details') }" @click="navigateTo('/details')">
            Details
          </li>
          <li :class="{ active: isActive('/table') }" @click="navigateTo('/table')">
            Table
          </li>
        </ul>
      </div>
      <div class="page-layout">
        <RouterView />
      </div>

    </div>
  </div>


</template>

<style scoped>
.container {
  height: 100vh;

  .top-layout {
    height: 60px;
    background: #daefda;

    h1 {
      margin: 0;
      height: 60px;
      line-height: 60px;
      padding: 0 18px;
    }
  }

  .main {
    height: calc(100vh - 60px);
    display: flex;

    .menu-layout {
      flex: 1;
      max-width: 160px;
      height: calc(100vh - 60px);
      border-right: 1px solid #cccccc;

      ul {
        padding: 0;

        li {
          list-style: none;
          height: 50px;
          line-height: 50px;
          padding-left: 20px;
          font-size: 14px;
          border-bottom: 1px solid #ccc;
          cursor: pointer;
        }

        .active {
          background-color: #1890ff;
          font-weight: bold;
          color: #ffffff;
        }
      }
    }

    .page-layout {
      flex: 1;
      height: calc(100vh - 60px);
    }
  }


}
</style>
