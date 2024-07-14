<script setup lang="ts">
import { reactive, ref } from 'vue'
import type { UnwrapRef } from 'vue'
import type { FormProps } from 'ant-design-vue'

interface FormState {
  title: string;
}

const data = [
  { title: '《活着》', author: '余华', rate: 4 },
  { title: '《三体》', author: '刘慈欣', rate: 4 },
  { title: '《刀锋》', author: '毛姆', rate: 4 },
  { 'title': '《边城》', 'author': '沈从文', 'rate': 4 },
  { 'title': '《围城》', 'author': '钱钟书', 'rate': 4 },
  { 'title': '《白鹿原》', 'author': '陈忠实', 'rate': 5 },
  { 'title': '《平凡的世界》', 'author': '路遥', 'rate': 5 },
  { 'title': '《红楼梦》', 'author': '曹雪芹', 'rate': 5 },
  { 'title': '《许三观卖血记》', 'author': '余华', 'rate': 4 },
  { 'title': '《狼图腾》', 'author': '姜戎', 'rate': 4 },
  { 'title': '《西游记》', 'author': '吴承恩', 'rate': 5 },
  { 'title': '《倚天屠龙记》', 'author': '金庸', 'rate': 4 },
  { 'title': '《射雕英雄传》', 'author': '金庸', 'rate': 5 }
]

const formState: UnwrapRef<FormState> = reactive({
  title: ''
})
const handleFinish: FormProps['onFinish'] = () => {
  dataSource.value = data.filter(item => item.title.includes(formState.title) ||
    item.author.includes(formState.title))
}
const handleFinishFailed: FormProps['onFinishFailed'] = errors => {
  console.log(errors)
}

const handleInputChange = () => {
  if (!formState.title) {
    dataSource.value = data
  }
}

const columns = [
  {
    title: '名称',
    dataIndex: 'title',
    key: 'title',
    width: '20%'
  },
  {
    title: '作者',
    dataIndex: 'author',
    key: 'author',
    width: '10%'
  },
  {
    title: '评分',
    dataIndex: 'rate',
    key: 'rate',
    width: '10%'
  },
  {
    title: '操作',
    key: 'operation',
    width: '10%'
  }
]

const dataSource = ref(
  data
)

</script>

<template>
  <main>
    <h2>Http Request</h2>
    <a-form
      class="form-margin"
      layout="inline"
      :model="formState"
      @finish="handleFinish"
      @finishFailed="handleFinishFailed"
    >
      <a-form-item>
        <a-input v-model:value="formState.title" placeholder="请输入名称/作者查找" allowClear
                 @input="handleInputChange">
        </a-input>
      </a-form-item>
      <a-form-item>
        <a-button
          type="primary"
          html-type="submit"
        >
          搜索
        </a-button>
      </a-form-item>
    </a-form>

    <a-table :dataSource="dataSource"
             :columns="columns">
      <template #bodyCell="{ column,record }">
        <template v-if="column.key === 'rate'">
          <a-rate v-model:value="record.rate" allow-half disabled />
        </template>
        <template v-if="column.key === 'operation'">
          <span class="delete">
            删除
          </span>
        </template>
      </template>
    </a-table>

  </main>
</template>

<style scoped>
main {
  padding: 10px;
}

.form-margin {
  margin-bottom: 15px;
}

.delete {
  color: red;
  cursor: pointer;
}
</style>