<template>
  <div>
    <Header title="Galactic war status" :routes="routes"></Header>
    <MobileCardContainer class="card-container" :planets="planets"></MobileCardContainer>
    <DesktopCardContainer class="card-container" :planets="planets"></DesktopCardContainer>
  </div>
</template>

<script setup lang="ts">
import DesktopCardContainer from '~/components/planets/desktopCardContainer.vue';
import MobileCardContainer from '~/components/planets/mobileCardContainer.vue';

  
const planets = ref<Planet[]>([])
const routes = [
  {
    name: 'Major Orders',
    to: '/orders'
  }
]

planets.value = await $fetch('/api/getActivePlanets')

</script>

<style scoped>

.card-container {
  margin-bottom: 151px;
  @media (max-width: 800px) {
    margin-bottom: 81px;
  }
}

</style>
