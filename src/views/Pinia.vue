<script setup lang="ts">
import { ref } from 'vue'
import { useUserStore } from '@/shared/pinia-store/user'
import { useCartStore } from '@/shared/pinia-store/cart'

const user = useUserStore()
const cart = useCartStore()

const itemName = ref('')

function addItemToCart() {
  if (!itemName.value) return
  cart.addItem(itemName.value)
  itemName.value = ''
}

function clearCart() {
  if (window.confirm('Are you sure you want to clear the cart?')) {
    cart.rawItems = []
  }
}

async function buy() {
  const n = await cart.purchaseItems()

  console.log(`Bought ${n} items`)

  cart.rawItems = []
}

// @ts-ignore
window.stores = { user, cart }
</script>

<template>
  <main>
    <h2>Pinia状态管理</h2>
    <h2>Hello {{ user.name }}</h2>
    <form @submit.prevent="addItemToCart" data-testid="add-items">
      <input type="text" v-model="itemName" />
      <button>Add</button>
    </form>

    <form @submit.prevent="buy">
      <ul data-testid="items">
        <li v-for="item in cart.items" :key="item.name">
          {{ item.name }} ({{ item.amount }})
          <button
            @click="cart.removeItem(item.name)"
            type="button"
          >X</button>
        </li>
      </ul>

      <button :disabled="!user.name">Buy</button>
      <button
        :disabled="!cart.items.length"
        @click="clearCart"
        type="button"
        data-testid="clear"
      >Clear the cart</button>
    </form>
  </main>
</template>

<style scoped>
main {
  padding: 10px;
}
img {
  width: 200px;
}

button,
input {
  margin-right: 0.5rem;
  margin-bottom: 0.5rem;
}
</style>