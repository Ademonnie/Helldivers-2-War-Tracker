<template>
  <div class="progress-bar" :class="{terminid: terminid, automaton: automaton}">
    <div class="seaf-progress" :style="{width: percentage + '%'}"></div>
  </div>
</template>

<script setup lang="ts">

  const props = defineProps({
    faction: String,
    percentage: Number
  })

  const terminid = ref<Boolean>(false)
  const automaton = ref<Boolean>(false)

  terminid.value = props.faction === 'Terminids'
  automaton.value = props.faction === 'Automatons'

</script>

<style scoped>

  .progress-bar {
    --highlight-color: 241, 241, 241;
    box-sizing: border-box;
    height: 30px;
    width: auto;
    border: 4px solid rgb(19, 19, 19);
    background-color: rgb(var(--highlight-color));
  }

  .progress-bar.terminid {
    --highlight-color: 251, 185, 0;
  }

  .progress-bar.automaton {
    --highlight-color: 253, 98, 100;
  }

  .seaf-progress {
    box-sizing: border-box;
    border: 2px solid rgb(var(--highlight-color));
    /* background-color: #1D9CFC; */
    background-color: rgb(19, 19, 19);
    height: 100%;
  }

</style>
