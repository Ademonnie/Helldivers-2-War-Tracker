<template>
  <div>
    <div v-for="planet in planets" >
      <PlanetCard :planet="planet"></PlanetCard>
    </div>
  </div>
</template>

<script setup lang="ts">
  
const planets = ref([])

planets.value = await $fetch("/api/getPlanets")

</script>
