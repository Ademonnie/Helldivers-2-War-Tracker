<template>
  <div>
    <Header title="Major Order" :routes="routes"></Header>
    <MajorOrderContainer v-if="orders.length > 0" v-for="order in orders" :order="order"></MajorOrderContainer>
    <h2 v-else class="no-order-message">No active Major Order</h2>
  </div>
</template>

<script setup lang="ts">
import MajorOrderContainer from '~/components/orders/MajorOrderContainer.vue';

const routes = [
  {
    name: 'War Status',
    to: '/'
  }
]

const orders = ref<Order[]>([])

orders.value = await $fetch('/api/getMo')

</script>

<style scoped>

.nav-container {
  position: absolute;
  top: 20px;
  left: 50px;
}

.title-container {
  margin-bottom: 50px;
}

.no-order-message {
  text-align: center;
}

</style>