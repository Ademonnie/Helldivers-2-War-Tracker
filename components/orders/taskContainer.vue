<template>
  <div>
    <div class="task-info">
      <div class="status" :class="{completed: completed}"/>
      <p>{{ taskData?.description }}</p>
    </div>
    <component :is="taskData?.component" :task="task" :progress="progress"/>
  </div>
</template>

<script setup lang="ts">
import getTaskData from '~/composables/getTaskData'

const props = defineProps<{
  task: Task,
  completed: boolean,
  progress: number
}>()

const taskData = ref<{
  description: string,
  component: string
}>()

taskData.value = getTaskData(props.task.type)

</script>

<style scoped>

  .task-info {
    display: flex;
  }

  .status {
    margin: 0;
    margin-right: 10px;
    -webkit-appearance: none;
    appearance: none;
    background-color: #131313;
    height: 1.5em;
    width: 1.5em;
    border: .1rem solid #F1F1F1;
    transform: translateY(.9rem);
    display: grid;
    place-content: center;
  }

  .status::before {
    content: '';
    width: 1.05em;
    height: 1em;
    transform: scale(0);
    box-shadow: inset 1.3em 1.3em #21e37b;
  }

  .status.completed:before {
    transform: scale(1);
  }

</style>