<template>
  <div>
    <MainTitle class="title-container"></MainTitle>
    <MobileCardContainer class="mobile-card-container" :planets="planets"/>
    <DesktopCardContainer class="desktop-card-container" :planets="planets"/>
  </div>
</template>

<script setup lang="ts">
  
const planets = ref<Planet[]>([])

planets.value = await $fetch("/api/getPlanets")

</script>

<style scoped>

.title-container {
  margin-bottom: 50px;
}

</style>
