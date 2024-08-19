<template>
  <div class="progress-bar-container">
    <div class="progress-bar" :class="{terminid: terminid, automaton: automaton}">
      <div class="seaf-progress" :style="{width: percentage + '%'}"></div>
    </div>
    <div class="defense-bar" :class="{terminid: terminid, automaton: automaton}">
      <ClientOnly>
        <div class="enemy-progress" :style="{width: enemyProgress + '%'}"></div>
      </ClientOnly>
    </div>
  </div>
</template>

<script setup lang="ts">

  const props = defineProps({
    faction: String,
    percentage: Number,
    expireDateTime: Number
  })

  const terminid = ref<Boolean>(false)
  const automaton = ref<Boolean>(false)

  const enemyProgress = computed<number>(() => {
    const date = props.expireDateTime || 0
    const startDate = new Date(date * 1000 - (24 * 60 * 60 * 1000)).getTime()
    const currentDate = new Date().getTime() - startDate
    const endDate = date * 1000 - startDate

    return (100 * currentDate) / endDate
  })
  
  terminid.value = props.faction === 'Terminids'
  automaton.value = props.faction === 'Automatons'


</script>

<style scoped>

  .progress-bar,
  .defense-bar {
    --highlight-color: 241, 241, 241;

    box-sizing: border-box;
    height: 30px;
    width: auto;
    border: 4px solid rgb(19, 19, 19);
    background-color: rgb(var(--highlight-color));
  }

  .terminid {
    --highlight-color: 251, 185, 0;
  }

  .automaton {
    --highlight-color: 253, 98, 100;
  }

  .seaf-progress {
    box-sizing: border-box;
    border: 2px solid rgb(var(--highlight-color));
    /* background-color: #1D9CFC; */
    background-color: rgb(19, 19, 19);
    height: 100%;
  }

  .enemy-progress {
    box-sizing: border-box;
    border: 2px solid rgb(var(--highlight-color));
    /* background-color: #1D9CFC; */
    background-color: rgb(19, 19, 19);
    height: 100%;
  }

</style>