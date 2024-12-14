<template>
  <div class="order-container" >
    <h3>Brief: </h3>
    <p class="order-context">{{ order.brief }}</p>
    <p v-if="order.brief !== order.description" class="order-context">{{ order.description }}</p>
    <h3>Time Remaining: <strong class="time">{{ timeRemaining }}</strong></h3>
    <div class="task-list">
      <h3><strong>Tasks :</strong></h3>
      <TaskContainer class="task-container" v-for="(task, index) in tasks" :task="task" :completed="taskStatus[index]" :progress="order.progress[index]"></TaskContainer>
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
const timeRemaining = ref('')

timeRemaining.value = getRemainingTime(props.order.expiresin)

tasks.value = JSON.parse(props.order.tasks)
tasks.value.forEach((task, index) => {
  taskStatus.value[index] = getTaskStatus(task, props.order.progress[index]) 
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

    @media(max-width: 1200px) {
      width: 90%;
      min-width: 200px;
      border: none;
      padding: 5px
    }
  }

  p {
    font-size: 1.2rem;
  }

  .time {
    padding: 0 5px;
    color: yellow;
    /* background-color: yellow; */
  }

  .task-list {
    display: flex;
    flex-direction: column;
  }

  .task-container {
   margin-bottom: 20px;
  }

</style>
