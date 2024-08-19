<template>
  <div>
    <MainTitle class="title-container" title="Major Order"/>
    <MajorOrderContainer v-for="order in orders" :order="order"></MajorOrderContainer>
  </div>
</template>

<script setup lang="ts">
import MajorOrderContainer from '~/components/orders/MajorOrderContainer.vue';


const orders = ref<Order[]>([])

orders.value = await $fetch('/api/getMo')

</script>

<style scoped>

.title-container {
  margin-bottom: 50px;
}

</style>