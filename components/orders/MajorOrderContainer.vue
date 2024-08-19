<template>
  <div class="order-container" >
    <p class="order-context">{{ order.brief }}</p>
    <p v-if="order.brief !== order.description" class="order-context">{{ order.description }}</p>
    <TaskContainer v-for="task in tasks" :task="task"></TaskContainer>
  </div>
</template>

<script setup lang="ts">
import TaskContainer from './taskContainer.vue';

const props = defineProps<{
  order: Order
}>()

const tasks = ref<Task[]>([])

tasks.value = JSON.parse(props.order.tasks)

</script>

<style scoped>

  .order-container {
    margin: 0 auto;
    width: 60%;
    min-width: 650px;

    @media(max-width: 800px) {
      min-width: none;
    }
  }

  .order-context {
    text-align: center;
    font-size: 1.2rem;
  }

</style>
