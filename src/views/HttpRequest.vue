<script setup lang="ts">
import { reactive } from 'vue';
import type { UnwrapRef } from 'vue';
import type { FormProps } from 'ant-design-vue';
import type { TableProps } from 'ant-design-vue';
import { usePagination } from 'vue-request';
import { computed } from 'vue';
import axios from 'axios';

interface FormState {
  user: string;
  password: string;
}

const formState: UnwrapRef<FormState> = reactive({
  user: '',
  password: '',
});
const handleFinish: FormProps['onFinish'] = values => {
  console.log(values, formState);
};
const handleFinishFailed: FormProps['onFinishFailed'] = errors => {
  console.log(errors);
};

const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
    sorter: true,
    width: '20%',
  },
  {
    title: 'Gender',
    dataIndex: 'gender',
    filters: [
      { text: 'Male', value: 'male' },
      { text: 'Female', value: 'female' },
    ],
    width: '20%',
  },
  {
    title: 'Email',
    dataIndex: 'email',
  },
];

type APIParams = {
  results: number;
  page?: number;
  sortField?: string;
  sortOrder?: number;
  [key: string]: any;
};
type APIResult = {
  results: {
    gender: 'female' | 'male';
    name: string;
    email: string;
  }[];
};

const queryData = (params: APIParams) => {
  return axios.get<APIResult>('https://randomuser.me/api?noinfo', { params });
};

const {
  data: dataSource,
  run,
  loading,
  current,
  pageSize,
} = usePagination(queryData, {
  formatResult: res => res.data.results,
  pagination: {
    currentKey: 'page',
    pageSizeKey: 'results',
  },
});

const pagination = computed(() => ({
  total: 200,
  current: current.value,
  pageSize: pageSize.value,
}));

const handleTableChange: TableProps['onChange'] = (
  pag: { pageSize: number; current: number },
  filters: any,
  sorter: any,
) => {
  run({
    results: pag.pageSize!,
    page: pag?.current,
    sortField: sorter.field,
    sortOrder: sorter.order,
    ...filters,
  });
};
</script>

<template>
  <main>
    <h2>Http Request</h2>
    <a-form
      layout="inline"
      :model="formState"
      @finish="handleFinish"
      @finishFailed="handleFinishFailed"
    >
      <a-form-item>
        <a-input v-model:value="formState.user" placeholder="请输入名称">
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

    <a-table
      :columns="columns"
      :row-key="record => record.login.uuid"
      :data-source="dataSource"
      :pagination="pagination"
      :loading="loading"
      @change="handleTableChange"
    >
      <template #bodyCell="{ column, text }">
        <template v-if="column.dataIndex === 'name'">{{ text.first }} {{ text.last }}</template>
      </template>
    </a-table>

  </main>
</template>

<style scoped>
main {
  padding: 10px;
}
</style>