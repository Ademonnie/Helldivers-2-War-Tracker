<template>
  <div class="order-container" >
    <h3>Brief: </h3>
    <p class="order-context">{{ order.brief }}</p>
    <p v-if="order.brief !== order.description" class="order-context">{{ order.description }}</p>
    <div class="task-list">
      <h3><strong>Tasks :</strong></h3>
      <TaskContainer class="task-container" v-for="(task, index) in tasks" :task="task" :completed="taskStatus[index]"></TaskContainer>
    </div>
  </div>
</template>

<script setup lang="ts">
import TaskContainer from './taskContainer.vue';

const props = defineProps<{
  order: Order
}>()

const tasks = ref<Task[]>([])
const taskStatus = ref<boolean[]>([])

tasks.value = JSON.parse(props.order.tasks)
tasks.value.forEach((task, index) => {
  taskStatus.value[index] = props.order.progress[index] === 1
})
</script>

<style scoped>

  .order-container {
    margin: 0 auto;
    width: 60%;
    min-width: 650px;
    max-width: 900px;
    border: 1px solid #F1F1F1;
    padding: 20px;

    @media(max-width: 800px) {
      width: 90%;
      min-width: 200px;
      border: none;
      padding: 5px
    }
  }

  p {
    font-size: 1.2rem;
  }

  .task-list {
    display: flex;
    flex-direction: column;
  }

  .task-container {
   margin-bottom: 20px;
  }

</style>
