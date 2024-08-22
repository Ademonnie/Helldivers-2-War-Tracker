<template>
  <div class="planet-card-container">
    <div class="planet-name">
      <h3>{{ planet?.name || "Unknown planet" }}</h3>
    </div>
      <div class="planet-info">
        <p class="biome">Biome: {{ biome?.slug || 'Unknown'}}</p>
        <p class="owner">Controlled by {{ planet.owner }}</p>
      </div>
  </div>
</template>

<script setup lang="ts">

const props = defineProps<{
  planet: InactivePlanet
}>()

const biome: Biome = await JSON.parse(props.planet?.biome)

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

  @media (min-width: 800px) {
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

</style>