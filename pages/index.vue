<template>
  <div>
    <div class="nav-container">
      <NuxtLink to="/orders">Major Order</NuxtLink>
    </div>
    <MainTitle class="title-container" title="Galactic war status"></MainTitle>
    <MobileCardContainer :planets="planets"></MobileCardContainer>
    <DesktopCardContainer :planets="planets"></DesktopCardContainer>
  </div>
</template>

<script setup lang="ts">
import DesktopCardContainer from '~/components/planets/desktopCardContainer.vue';
import MobileCardContainer from '~/components/planets/mobileCardContainer.vue';

  
const planets = ref<Planet[]>([])

planets.value = await $fetch('/api/getActivePlanets')

</script>

<style scoped>

.nav-container {
  position: absolute;
  top: 20px;
  right: 50px;
}

.title-container {
  margin-bottom: 50px;
}

</style>
