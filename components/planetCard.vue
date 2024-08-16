<template>
  <div class="planet-card-container" :class="{terminid: terminid, automaton: automaton}">
    <div class="planet-name">
      <h3>{{ planet.name }}</h3>
    </div>
    <AttackProgressBar :faction="planet.faction" :percentage="planet.percentage"></AttackProgressBar>
    <p>{{ planet.percentage }}% LIBERATED</p>
    <p class="biome">Biome: {{ biome && biome.slug || 'Unknown'}}</p>
  </div>
</template>

<script setup lang="ts">
  const props = defineProps({
    planet: Object
  })

  const terminid = ref(false)
  const automaton = ref(false)
  const biome = await JSON.parse(props.planet.biome)

  terminid.value = props.planet.faction === 'Terminids'
  automaton.value = props.planet.faction === 'Automatons'
</script>

<style scoped>
  .planet-card-container {
    width: 30%;
    min-width: 350px;
    border: 1px solid var(--highlight-color);
    color: var(--highlight-color);
    margin: 0 auto 20px;
  }

  .planet-card-container.terminid {
    --highlight-color: #FBB900
  }

  .planet-card-container.automaton {
    --highlight-color: #FD6264
  }

  .planet-name {
    height: 60px;
    width: 100%;
    line-height: 60px;
  }

  .planet-name > h3 {
    margin-top: 0;
    padding-left: 20px;
  }

  p {
    height: 30px;
    line-height: 30px;
    color: #F1F1F1;
    text-align: center;
    margin: 3px 0;
  }

  .biome {
    padding-left: 10px;
    text-align: left;
  }

</style>
