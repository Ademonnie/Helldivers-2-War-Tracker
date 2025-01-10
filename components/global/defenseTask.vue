<template>
  <div>
    <p>( {{ task.values[2] }} / {{ task.values[0] }} ) planets defended</p>
  </div>
</template>

<script setup lang="ts">

  const props = defineProps<{
    task: Task
  }>()

</script>

<style scoped>

</style>