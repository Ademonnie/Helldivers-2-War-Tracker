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
    <div class="card-list">
      <p>Illuminate controlled</p>
      <PlanetCard class="planet-card" v-for="planet in illuminatePlanets" :planet="planet"></PlanetCard>
    </div>
  </div>
</template>

<script setup lang="ts">
import PlanetCard from './planetCard.vue';

const props = defineProps<{
  planets: Planet[]
}>()

const terminidPlanets = ref<Planet[]>([])
const automatonPlanets = ref<Planet[]>([])
const illuminatePlanets = ref<Planet[]>([])

terminidPlanets.value = props.planets?.filter(p => p.faction === 'Terminids') || []
automatonPlanets.value = props.planets?.filter(p => p.faction === 'Automatons') || []
illuminatePlanets.value = props.planets?.filter(p => p.faction === 'Illuminates') || []

</script>

<style scoped>

  .desktop-card-container {
    display: flex;
    justify-content: center;

    @media (max-width: 1200px) {
      display: none;
    }
  }

  .card-list {
    width: 20%;
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