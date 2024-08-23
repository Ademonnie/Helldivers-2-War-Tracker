<template>
  <div class="container" :class="{pinned: pinned}">
    <h1>Helldivers 2</h1>
    <h2>{{ title }}</h2>
  </div>
</template>

<script setup lang="ts">

  const props = defineProps<{
    title: string,
    pinned: boolean
  }>()

</script>

<style scoped>

  .container {
    padding: 5px 30px;
    width: 100%;
    box-sizing: border-box;

    text-align: center;
    color: #F1F1F1;
    text-wrap: nowrap;

    transition: width 300ms ease-in-out ;
  }

  h1 {
    font-size: 4.9rem;
    margin: 0;

    transition: font-size 30ms ease-in-out;
  }

  h2 {
    font-size: 1.9rem;
    margin: 0
  }

  .container.pinned {
    width: 0;
    
  }

  .container.pinned > h1 {
    font-size: 4rem;
    line-height: 4rem;
    
  }

  .container.pinned > h2 {
    font-size: 1.3rem;
  }

  @media (max-width: 800px) {

    .container {
      width: 0;
      padding: 5px 10px;
    }
    
    h1 {
      font-size: 3rem;
      line-height: 3rem;
    }

    h2 {
      font-size: 1.1rem;
    }

    .container.pinned > h1 {
      font-size: 3rem;
      line-height: 3rem;
    }

    .container.pinned > h2 {
      font-size: 1.1rem;
    }
  }

</style>