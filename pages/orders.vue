<template>
  <div>
    <Header class="header" title="Major Order" :routes="routes"></Header>
    <MajorOrderContainer class="order-container" v-if="orders.length > 0" v-for="order in orders" :order="order"></MajorOrderContainer>
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

.order-container {
  margin-bottom: 151px;
  @media (max-width: 800px) {
    margin-bottom: 81px;
  }
}

.no-order-message {
  text-align: center;
}

</style>