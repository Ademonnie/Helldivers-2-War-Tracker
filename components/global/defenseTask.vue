<template>
  <div>
    <p>( {{ progress }} / {{ task.values[0] }} ) planets defended</p>
  </div>
</template>

<script setup lang="ts">

  const props = defineProps<{
    task: Task,
    progress: Number
  }>()

</script>

<style scoped>

</style>