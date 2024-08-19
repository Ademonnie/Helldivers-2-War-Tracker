<template>
  <div>
    <MainTitle class="title-container" title="Galactic war status"></MainTitle>
    <MobileCardContainer :planets="planets"></MobileCardContainer>
    <DesktopCardContainer :planets="planets"></DesktopCardContainer>
  </div>
</template>

<script setup lang="ts">
import DesktopCardContainer from '~/components/planets/desktopCardContainer.vue';
import MobileCardContainer from '~/components/planets/mobileCardContainer.vue';

  
const planets = ref<Planet[]>([])

planets.value = await $fetch('/api/getPlanets')

</script>

<style scoped>

.title-container {
  margin-bottom: 50px;
}

</style>
