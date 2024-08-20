<template>
  <div>
    <p>( {{ task.valueTypes[1] }} / {{ task.values[1] }} ) planets defended</p>
  </div>
</template>

<script setup lang="ts">

  const props = defineProps<{
    task: Task
  }>()

</script>

<style scoped>

</style>