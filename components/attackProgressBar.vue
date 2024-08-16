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
    --highlight-color: #F1F1F1;

    box-sizing: border-box;
    height: 30px;
    width: 100%;
    border: 4px solid #1F1F23;
    background-color: var(--highlight-color);
  }

  .progress-bar.terminid {
    --highlight-color: #FBB900
  }

  .progress-bar.automaton {
    --highlight-color: #FD6264
  }

  .seaf-progress {
    box-sizing: border-box;
    border: 2px solid var(--highlight-color);
    /* background-color: #1D9CFC; */
    background-color: #131313;
    height: 100%;
  }

</style>
