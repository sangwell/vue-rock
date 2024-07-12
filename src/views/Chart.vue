<script setup lang="ts">
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement
} from 'chart.js'
import { Bar } from 'vue-chartjs'
import { Line } from 'vue-chartjs'
import { ref } from 'vue'
import { onMounted, onUnmounted } from 'vue'

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend)
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
)

const barData = ref(
  {
    labels: ['January', 'February', 'March'],
    datasets: [{ data: [40, 20, 12] }]
  }
)
const barOptions = ref(
  {
    responsive: true
  }
)

const lineData = ref(
  {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [
      {
        label: 'Data One',
        backgroundColor: '#f87979',
        data: [40, 39, 10, 40, 39, 80, 40]
      }
    ]
  }
)
const lineOptions = ref(
  {
    responsive: true,
    maintainAspectRatio: false
  }
)

const intervalId = ref(0)

onMounted(() => {
  intervalId.value = setInterval(() => {
    barData.value = {
      labels: ['January', 'February', 'March'],
      datasets: [{ data: [Math.random() * 10, Math.random() * 10, Math.random() * 10] }]
    }
    lineData.value = {
      labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
      datasets: [
        {
          label: 'Data One',
          backgroundColor: '#f87979',
          data: [
            Math.random() * 10,
            Math.random() * 10,
            Math.random() * 10,
            Math.random() * 10,
            Math.random() * 10,
            Math.random() * 10,
            Math.random() * 10
          ]
        }
      ]
    }
  }, 1000)
})

onUnmounted(() => {
  clearInterval(intervalId.value)
})

</script>

<template>
  <main>
    <h2>图表</h2>
    <a-row :gutter="16">
      <a-col class="gutter-row" :span="12">
        <Bar :data="barData" :options="barOptions" />
      </a-col>
      <a-col class="gutter-row" :span="12">
        <Line :data="lineData" :options="lineOptions" />
      </a-col>
    </a-row>

  </main>

</template>

<style scoped>
main {
  padding: 10px;
}
</style>