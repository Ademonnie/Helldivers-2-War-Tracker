<template>
  <div>
    <MainTitle class="title-container"></MainTitle>
    <div v-for="planet in planets" >
      <PlanetCard class="planet-card" :planet="planet"></PlanetCard>
    </div>
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

.planet-card {
  margin: 0px auto 30px;
}

</style>
