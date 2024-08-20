<template>
  <div>
    <PlanetCard v-if="targetActivePlanet" :planet="targetActivePlanet"/>
    <InactivePlanetCard v-else-if="targetPlanet" :planet="targetPlanet" />
  </div>
</template>

<script setup lang="ts">
import PlanetCard from '~/components/planets/planetCard.vue'
import InactivePlanetCard from '~/components/planets/inactivePlanetCard.vue'

const props = defineProps<{
  task: Task
}>()

const targetPlanet = ref<InactivePlanet | undefined>()
const targetActivePlanet = ref<Planet | undefined>()

const planetData = await $fetch(`/api/getPlanet/${props.task.values[2]}`) 
const activePlanetData = await $fetch(`/api/getActivePlanet/${props.task.values[2]}`)

targetPlanet.value = Array.isArray(planetData) ? planetData[0] : undefined
targetActivePlanet.value = Array.isArray(activePlanetData) ? activePlanetData[0] : undefined


</script>

<style scoped>

</style>