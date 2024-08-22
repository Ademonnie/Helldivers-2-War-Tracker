<template>
  <div class="nav-container">
    <NuxtLink class="link" v-for="route in routes" :to="route.to">{{ route.name }}</NuxtLink>
  </div>
</template>

<script setup lang="ts">
  const props = defineProps <{
    routes: {name: string, to: string}[],
  }>()

</script>

<style scoped>
  .nav-container {
    display: flex;
    height: fit-content;
  }

  @media (max-width: 800px) {
    .link {
      font-size: 1rem;
    }

  }


</style>