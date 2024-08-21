<template>
  <div>
    <p>Kill <strong>{{ targetAmount }} {{ targetName }}</strong></p>
    <p>Current : {{ progress }}</p>
    <Progressbar :progress="taskProgress" :faction="''"></Progressbar>
  </div>
</template>

<script setup lang="ts">
  const props = defineProps<{
    task: Task,
    progress: number
  }>()

  const targetAmount = ref<String>('')
  const targetName = ref<String>('')

  
  targetAmount.value = new Intl.NumberFormat('fr-FR').format(props.task.values[2] || 0)
  targetName.value = getTargetName(props.task.values[3])
  
  const taskProgress = computed<number>(() => {
    return (100 * props.progress / props.task.values[2])
  })

</script>

<style scoped>

</style>