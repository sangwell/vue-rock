<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
</script>

<template>
  <div class="container">
    <div class="top-layout">
      <h1>Vue 平台管理系统</h1>
    </div>
    <div class="main">
      <div class="menu-layout">
        <ul>
          <li>
            <RouterLink to="/">Home</RouterLink>
          </li>
          <li>
            <RouterLink to="/about">About</RouterLink>
          </li>
          <li>
            <RouterLink to="/details">Details</RouterLink>
          </li>
          <li>
            <RouterLink to="/table">Table</RouterLink>
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
    h1{
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
          height: 36px;
          line-height: 36px;
          padding-left: 20px;
          font-size: 14px;
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
