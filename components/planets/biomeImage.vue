<template>
  <div class="biome-image">
    <NuxtImg
      class="biome-img"
      :src="`/biomes/${biomeName}.png`"
      alt="Biome Image">
    </NuxtImg>
  </div>
</template>

<script setup lang="ts">

  const props = defineProps<{
    biomeName: String
  }>()

</script>

<style scoped>
.biome-image {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.biome-img {
  width: 100%;
}
.biome-label {
  margin-top: 8px;
  font-weight: bold;
  text-align: center;
}
</style>