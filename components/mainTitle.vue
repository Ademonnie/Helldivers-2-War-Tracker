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

  h1 {
    font-size: 6rem;
    margin: 0;

    transition: font-size 30ms ease-in-out;
  }

  h2 {
    font-size: 1.9rem;
  }

  .container {
    padding: 5px 30px;
    box-sizing: border-box;
    text-align: center;
    color: #F1F1F1;
    width: 100%;
    text-wrap: nowrap;
    transition: width 300ms ease-in-out ;
  }

  .container.pinned {
    width: 0;
  }

  .container.pinned > h1 {
    font-size: 4rem;
  }

  .container.pinned > h2 {
    font-size: 1.3rem;
  }

  @media (max-width: 800px) {

    .container {
      padding: 5px 10px;
      width: 0;
    }

    h1 {
      font-size: 3rem
    }

    h2 {
      font-size: 1.1rem;
    }

    .container.pinned > h1 {
      font-size: 3rem;
    }

    .container.pinned > h2 {
      font-size: 1.1rem;
    }
  }

</style>