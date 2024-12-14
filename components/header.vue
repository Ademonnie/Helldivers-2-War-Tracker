<template>
  <div class="header-container" :class="{pinned: isPinned}">
    <Nav class="nav-container" :routes="routes"></Nav>
    <MainTitle class="title-container" :title="title" :pinned="isPinned"></MainTitle>
  </div>
</template>

<script setup lang="ts">
  const props = defineProps <{
    title: string,
    routes: {name: string, to: string}[]
  }>()

  const isPinned = ref<boolean>(false)

  onMounted(() => {
    const el = document.querySelector('.header-container')
    const observer = new IntersectionObserver( 
      ([e]) => isPinned.value = e.intersectionRatio < 1,
      { threshold: [1] }
    )
  
    observer.observe(el)
  })


</script>

<style scoped>

  .header-container {
    position: sticky;
    top: -1px;
    z-index: 1;
    background-color: #1F1F23;
    padding-bottom: 20px;
    
    @media (max-width: 1200px) {
      padding-bottom: 5px;

      display: grid;
      grid-template-columns: minmax(0, 1fr) 2fr minmax(0, 1fr);
    }
  }


  .header-container.pinned {
    box-shadow: 5px 0 10px 0 rgba(0, 0, 0, 0.8);
    padding-bottom: 5px;
  }

  .title-container {
    grid-column: 2 / 3;

    @media (max-width: 1200px ) {
      grid-column: 1 / 3;
    }
  }

  

  .nav-container {
    position: absolute;
    right: 10%;
    bottom: 0;
    top: 0;
    margin: auto auto;

    @media (max-width: 1200px) {
      right: 30%;
      grid-column: 3 / 4;

    }
  }

</style>