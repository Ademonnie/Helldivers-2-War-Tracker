<template>
  <div>
    <Header title="Galactic war status" :routes="routes"></Header>
    <MobileCardContainer :planets="planets"></MobileCardContainer>
    <DesktopCardContainer :planets="planets"></DesktopCardContainer>
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

.nav-container {
  position: absolute;
  top: 20px;
  right: 50px;
}

.header {
  position: sticky;
  top: 0;
  background-color: #1F1F23;
  z-index: 1;
}

.title-container {

  padding-bottom: 50px;
  
}

</style>
