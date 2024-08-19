<template>
  <div class="mobile-card-container">
    <div class="faction-selector" :class="{terminids: selectedFaction === 'Terminids'}">
      <p class="automaton-selector" :class="{selected: selectedFaction === 'Automatons'}" @click="setSelectedFaction('Automatons')">Automatons</p>
      <p class="terminid-selector" :class="{selected: selectedFaction === 'Terminids'}" @click="setSelectedFaction('Terminids')">Terminids</p>
    </div>
    <div class="card-list-container">
      <PlanetCard class="planet-card" v-show="selectedFaction === 'Automatons'" v-for="planet in automatonPlanets" :planet="planet"/>
      <PlanetCard class="planet-card" v-show="selectedFaction === 'Terminids'" v-for="planet in terminidPlanets" :planet="planet"/>
    </div>
  </div>
</template>

<script setup lang="ts">

const props = defineProps<{
  planets: Planet[]
}>()

const terminidPlanets = ref<Planet[]>([])
const automatonPlanets = ref<Planet[]>([])

const selectedFaction = ref<string>('Automatons')

terminidPlanets.value = props.planets?.filter(p => p.faction === 'Terminids') || []
automatonPlanets.value = props.planets?.filter(p => p.faction === 'Automatons') || []

const setSelectedFaction = (faction: string) => {
  selectedFaction.value = faction
}

</script>

<style scoped>

  .mobile-card-container {
    display: flex;
    flex-direction: column;
    align-items: center;

    @media (min-width: 801px) {
      display: none;
    }
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

  .planet-card {
    margin-bottom: 20px;
  }

</style>