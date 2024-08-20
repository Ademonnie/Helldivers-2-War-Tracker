<template>
  <div>
    <div class="nav-container">
      <NuxtLink class="nav-link" to="/">Back</NuxtLink>
    </div>
    <MainTitle class="title-container" title="Major Order"/>
    <MajorOrderContainer v-if="orders.length > 0" v-for="order in orders" :order="order"></MajorOrderContainer>
    <p v-else>No active Major Order</p>
  </div>
</template>

<script setup lang="ts">
import MajorOrderContainer from '~/components/orders/MajorOrderContainer.vue';


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

</style>