<template>
  <div class="bar" :class="{terminid: terminid, automaton: automaton}">
    <div class="progress" :style="{width: progress + '%'}"></div>
  </div>
</template>

<script setup lang="ts">
  const props = defineProps <{
    progress: number,
    faction: string
  }>()

  const terminid = ref<Boolean>(false)
  const automaton = ref<Boolean>(false)

  terminid.value = props.faction === 'Terminids'
  automaton.value = props.faction === 'Automatons'

</script>

<style scoped>
  .bar {
    --highlight-color: 241, 241, 241;
    box-sizing: border-box;
    height: 30px;
    width: auto;
    border: 4px solid rgba(19, 19, 19);
    background-color: rgb(var(--highlight-color));
  }

  .bar.terminid {
    --highlight-color: 251, 185, 0;
  }

  .bar.automaton {
    --highlight-color: 253, 98, 100;
  }

  .progress {
    box-sizing: border-box;
    border: 2px solid rgb(var(--highlight-color));
    /* background-color: #1D9CFC; */
    background-color: rgb(19, 19, 19);
    height: 100%;
  }

</style>