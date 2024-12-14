<template>
  <div class="bar" :class="{terminid: terminid, automaton: automaton, illuminate: illuminate}">
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
  const illuminate = ref<Boolean>(false)

  terminid.value = props.faction === 'Terminids'
  automaton.value = props.faction === 'Automatons'
  illuminate.value = props.faction === 'Illuminates'

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

  .bar.illuminate {
    --highlight-color: 172, 71, 254;
  }

  .progress {
    box-sizing: border-box;
    border: 2px solid rgb(var(--highlight-color));
    /* background-color: #1D9CFC; */
    background-color: rgb(19, 19, 19);
    height: 100%;
  }

</style>