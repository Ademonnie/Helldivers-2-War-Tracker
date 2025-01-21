<template>
  <div class="planet-card-container" :class="{terminid: terminid, automaton: automaton, illuminate: illuminate}">
    <div class="planet-name">
      <h3>{{ planet?.name || "Unknown planet" }}</h3>
    </div>
    <Progressbar class="attack-progress-bar" :class="{'defense-progress-bar': isDefense}" :progress="Number(planet?.percentage)" :faction="planet?.faction"></Progressbar>
    <Progressbar v-if="isDefense" class="defense-progress-bar" :progress="enemyProgress" :faction="planet?.faction"></Progressbar>

    
    <p><strong>{{ Math.trunc(Number(planet?.percentage)) || 0 }}%</strong> {{ isDefense ? 'DEFENDED' : 'LIBERATED'}}</p>
    <div class="planet-info">
      <p class="biome">Biome: {{ biome?.slug || 'Unknown'}}</p>
      <p class="players">{{ planet?.players || 0 }} active Helldivers</p>
    </div>
  </div>
</template>

<script setup lang="ts">

  const props = defineProps<{
    planet: Planet
  }>()

  const enemyProgress = computed<number>(() => {
    if (props.planet.expiredatetime) {

      const currentDate = new Date().getTime()
      const daysToCapture = Math.ceil((props.planet.expiredatetime * 1000 - currentDate) / (24 * 60 * 60 * 1000))

      const date = props.planet.expiredatetime || 0
      const startDate = date * 1000 - daysToCapture * (24 * 60 * 60 * 1000)
      const currentTime = new Date().getTime() - startDate
      const endDate = date * 1000 - startDate

      return Math.min((100 * currentTime) / endDate , 100)

    } else {
      return 0
    }
  })

  const terminid = ref<Boolean>(false)
  const automaton = ref<Boolean>(false)
  const illuminate = ref<Boolean>(false)
  const isDefense :boolean = !!props.planet?.expiredatetime
  const biome :Biome = await JSON.parse(props.planet?.biome)

  terminid.value = props.planet?.faction === 'Terminids'
  automaton.value = props.planet?.faction === 'Automatons'
  illuminate.value = props.planet?.faction === 'Illuminates'
</script>

<style scoped>

  .planet-card-container {
    --highlight-color: 241, 241, 241;

    position: relative;
    min-width: 330px;
    max-width: 600px;
    overflow: hidden;
    background-color: #131313;
    border: 1px solid rgb(var(--highlight-color));
    color: rgb(var(--highlight-color));
    transition: all 300ms ease-in-out;
  }

  .planet-card-container.terminid {
    --highlight-color: 251, 185, 0;
  }

  .planet-card-container.automaton {
    --highlight-color: 253, 98, 100;
  }

  .planet-card-container.illuminate {
    --highlight-color: 172, 71, 254; 
  }


  .attack-progress-bar {
    margin: 0 10px 30px;
  }

  .defense-progress-bar {
    margin: 0 10px;
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

  .planet-info {
    padding: 0 10px;
    display: flex;
    justify-content: space-between;
  }

  .biome {
    
    text-align: left;
  }

  @media (min-width: 1200px) {
    .planet-card-container:hover {
      box-shadow: 0 0 10px 5px rgba(var(--highlight-color), 0.4);
      transform: translate(-3px, -3px);
    }

    .planet-card-container::before {
      content: "";
      position: absolute;
      top: 0;
      left: -100%;
      width: 100%;
      height: 100%;
      background: linear-gradient(
        120deg,
        transparent,
        rgba(200, 200, 200, 0.15),
        transparent
      );
    }
    
    .planet-card-container:hover:before {
      transition: all 650ms;
      left: 100%;
    }

  }

</style>
