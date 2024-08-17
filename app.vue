<template>
  <div>
    <MainTitle class="title-container"></MainTitle>
    <MobileCardContainer class="mobile-card-container" :planets="planets"/>
    <DesktopCardContainer class="desktop-card-container" :planets="planets"/>
  </div>
</template>

<script setup lang="ts">
  
const planets = ref([])

planets.value = await $fetch("/api/getPlanets")

</script>

<style scoped>

.title-container {
  margin-bottom: 50px;
}

.mobile-card-container {
  display: none;

  @media (max-width: 800px) {
    display: flex;
  }
}

.desktop-card-container {
  display: none;

  @media (min-width: 800px) {
    display: flex;
  }
}

</style>
