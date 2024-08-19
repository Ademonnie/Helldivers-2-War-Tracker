<template>
  <div>
    <h1>Helldivers 2</h1>
    <h2>{{ title }}</h2>
  </div>
</template>

<script setup lang="ts">

  const props = defineProps<{
    title: string
  }>()

</script>

<style scoped>

  h1,
  h2 {
    text-align: center;
    color: #F1F1F1;
  }

  h1 {
    font-size: 6rem;
    line-height: 3rem;
  }

  h2 {
    font-size: 1.9rem;
  }

  @media (max-width: 800px) {
    h1 {
      font-size: 4.5rem
    }

    h2 {
      font-size: 1.5rem;
    }
  }

</style>