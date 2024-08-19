<template>
  <div>
    <p>{{ description }}</p>
  </div>
</template>

<script setup lang="ts">

const props = defineProps<{
  task: Task
}>()

const description = ref<string>('') 

console.log(props.task)

description.value = getTaskDescription(props.task.type)

</script>