<script setup lang="ts">
import { onMounted, onUnmounted } from 'vue'
import { ref } from 'vue'
import Card from '../components/Card.vue'
import { PlusOutlined } from '@ant-design/icons-vue'
import { Dayjs } from 'dayjs';

// 生命周期
onMounted(() => {
  console.log(`the component is now mounted.`)
})

onUnmounted(() => {
  console.log(`the component is now unmounted.`)
})

const items = ref([
  { name: '日期', value: '星期一' },
  { name: '温度', value: '31°C' },
  { name: '天气', value: '晴' },
  { name: '气压', value: '101kPa' },
  { name: '风速', value: '10m/s' }
])
const dataSource = ref(
  [
    { title: '买蛋糕~', status: false },
    { title: '看书', status: true }
  ]
)

const columns = ref(
  [
    {
      title: '事项',
      dataIndex: 'title',
      key: 'title',
      width: '70%'
    },
    {
      title: '操作',
      dataIndex: 'status',
      key: 'status',
      width: '30%'
    }
  ]
)

const visible = ref<boolean>(false)

const showModal = () => {
  visible.value = true
}

const handleOk = () => {
  if (!todoItem.value) {
    visible.value = false
    return
  }
  dataSource.value.push({ title: todoItem.value, status: false })
  todoItem.value = ''
  visible.value = false
}

const todoItem = ref('')

const day = ref<Dayjs>();

</script>

<template>
  <main>
    <h2>首页</h2>
    <div class="box-layout">
      <div class="box-item" v-for="item in items">
        <Card :title="item.name"
              :value="item.value" />
      </div>
    </div>

    <a-row :gutter="16">
      <a-col :span="8">
        <div class="todo-list-layout">
          <div class="banner">
            <span>Todo list</span>
            <a-button type="primary" shape="circle" @click="showModal">
              <template #icon>
                <plus-outlined />
              </template>
            </a-button>

            <a-modal v-model:visible="visible" title="添加事项"
                     cancelText="取消" okText="确认" @ok="handleOk">
              <a-input v-model:value="todoItem" />
            </a-modal>

          </div>

          <a-table :dataSource="dataSource"
                   :columns="columns"
                   size="small"
                   :pagination="false"
                   :style="{ minHeight: '300px' }"
                   :scroll="{y:255}">
            <template #bodyCell="{ column,record }">
              <template v-if="column.key === 'title'">
                <span v-if="!record.status">{{ record.title }}</span>
                <span v-if="record.status" class="disabled">{{ record.title }}</span>
              </template>
              <template v-if="column.key === 'status'">
                <a-switch v-model:checked="record.status" checked-children="结束" un-checked-children="待办" />
              </template>
            </template>
          </a-table>
        </div>
      </a-col>
      <a-col :span="16">
        <a-calendar v-model:value="day"/>
      </a-col>
    </a-row>


  </main>

</template>

<style scoped>
main {
  padding: 10px;
}

.box-layout {
  display: flex;
}

.box-item {
  width: 25%;
  height: 170px;
  border: none;
  flex: 1;
}

.todo-list-layout {
  padding: 10px;
  border: 1px solid #cccccc;

  .banner {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 8px;

    span {
      font-weight: bold;
      font-size: 16px;
    }
  }
}

.disabled {
  color: #ababab;
}
</style>
