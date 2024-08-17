<template>
  <div class="desktop-card-container">
    <div class="card-list">
      <p>Automaton controlled</p>
      <PlanetCard class="planet-card" v-for="planet in automatonPlanets" :planet="planet"></PlanetCard>
    </div>
    <div class="card-list">
      <p>Terminid controlled</p>
      <PlanetCard class="planet-card" v-for="planet in terminidPlanets" :planet="planet"></PlanetCard>
    </div>
  </div>
</template>

<script setup lang="ts">

const props = defineProps<{
  planets: Planet[]
}>()

const terminidPlanets = ref<Planet[]>([])
const automatonPlanets = ref<Planet[]>([])

terminidPlanets.value = props.planets?.filter(p => p.faction === 'Terminids') || []
automatonPlanets.value = props.planets?.filter(p => p.faction === 'Automatons') || []

</script>

<style scoped>
  .desktop-card-container {
    display: flex;
    justify-content: center;
  }

  .card-list {
    width: 30%;
    min-width: 350px;
    max-width: 600px;
    margin: 0 30px;
  }

  .planet-card {
    margin-bottom: 30px;
  }

  p {
    font-size: 1.3rem;
    font-weight: bold;
    text-align: center;
  }

</style>