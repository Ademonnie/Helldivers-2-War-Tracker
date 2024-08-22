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
  }

  .header-container.pinned {
    box-shadow: 5px 0 5px 0 rgba(0, 0, 0, 0.5);
  }

  .nav-container {
    position: absolute;
    right: 30px;
    top: 0;
    bottom: 0;
    margin: auto 0;
  }

</style>