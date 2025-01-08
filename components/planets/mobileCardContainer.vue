<template>
  <div class="mobile-card-container">
    <div class="faction-selector" :class="{terminids: selectedFaction === 'Terminids', illuminates: selectedFaction === 'Illuminates'}">
      <p class="automaton-selector" :class="{selected: selectedFaction === 'Automatons'}" @click="setSelectedFaction('Automatons')">Automatons</p>
      <p class="terminid-selector" :class="{selected: selectedFaction === 'Terminids'}" @click="setSelectedFaction('Terminids')">Terminids</p>
      <p class="illuminate-selector" :class="{slected: selectedFaction === 'Illuminates'}" @click="setSelectedFaction('Illuminates')">Illuminates</p>
    </div>
    <div class="card-list-container">
      <PlanetCard class="planet-card" v-show="selectedFaction === 'Automatons'" v-for="planet in automatonPlanets" :planet="planet"/>
      <PlanetCard class="planet-card" v-show="selectedFaction === 'Terminids'" v-for="planet in terminidPlanets" :planet="planet"/>
      <PlanetCard class="planet-card" v-show="selectedFaction === 'Illuminates'" v-for="planet in illuminatePlanets" :planet="planet"/>
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

const selectedFaction = ref<string>('Automatons')

terminidPlanets.value = props.planets?.filter(p => p.faction === 'Terminids') || []
automatonPlanets.value = props.planets?.filter(p => p.faction === 'Automatons') || []
illuminatePlanets.value = props.planets?.filter(p => p.faction === 'Illuminates') || []

const setSelectedFaction = (faction: string) => {
  selectedFaction.value = faction
}

</script>

<style scoped>

  .mobile-card-container {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .faction-selector {
    position: relative;
    display: flex;
    justify-content: center;
  }

  .faction-selector:after {
    content: '';
    position: absolute;
    height: 1px;
    top: auto;
    bottom: 20px;
    left: 5px;
    width: 130px;
    background-color: #F1F1F1;

    transition: all 250ms ease-in-out;
  }

  .faction-selector.terminids:after {
    left: 145px;
    
  }

  .faction-selector.illuminates:after {
    left: 287px;
  }

  .faction-selector > p {
    margin: 20px 10px;
    padding-bottom: 10px;
  }

  p {
    width: 120px;
    font-weight: bold;
    text-transform: uppercase;
    font-size: 1.4rem;
    text-align: center;
    cursor: pointer;
  }

  .card-list-container {
    width: 90%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .planet-card {
    margin-bottom: 20px;
    width: 100%;
  }

  @media (max-width: 1200px) {
    .faction-selector:after {
      width: 110px;
    }

    .faction-selector > p {
      margin: 20px 0;
    }

    p {
      font-size: 1.2rem;
    }

    .faction-selector.terminids:after {
      left: 125px;
    
    }

    .faction-selector.illuminates:after {
      left: 245px;
    }
  }

  @media (min-width: 1001px) {
    .mobile-card-container {
      display: none;
    }
  }

</style>