<template>
  <div class="bar">
    <div class="progress democratic" :style="{width: democraticAdvance + '%'}">
      <p class="counter" :style="{right: '-7px'}">{{ progress }}</p>

    </div>
    <div class="progress undemocratic" :style="{width: undemocraticAdvance + '%'}"></div>
  </div>
</template>

<script setup lang="ts">
  const props = defineProps <{
    progress: number
  }>()

  const democraticAdvance = ref<Number>(0)
  const undemocraticAdvance = ref<Number>(0)

  democraticAdvance.value = 50 + props.progress
  undemocraticAdvance.value = 50 - props.progress

</script>

<style scoped>
  .bar {
    --highlight-color: 241, 241, 241;
    display: flex;
    box-sizing: border-box;
    height: 30px;
    width: auto;
    border: 4px solid rgba(19, 19, 19);
    background-color: rgb(var(--highlight-color));
  }

  .counter {
    position: absolute;
    z-index: 1;
    top: 2px;
    margin: 0;
    text-shadow: -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000; color: white;
  }

  .progress {
    position: relative;
    box-sizing: border-box;
    border: 2px solid rgb(var(--progress-color));
    background-color: rgb(var(--progress-color));
    height: 100%;
  }

  .progress.democratic {
    --progress-color: 33, 227, 123;
  }

  .progress.undemocratic {
    --progress-color: 253, 98, 100;
  }
</style>