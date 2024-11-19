<template>
  <Advancebar :progress="progress"></Advancebar>
</template>
<script setup lang="ts">
  const props = defineProps<{
    task: Task,
    progress: number
  }>()

</script>
<style scoped>

</style>