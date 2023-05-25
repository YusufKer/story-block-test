<script setup>
import Home from './pages/Home.vue';
import AboutUs from './pages/AboutUs.vue';
</script>

<template>
  <Suspense>
    <template #default>
      <router-view></router-view>
    </template>

    <template #fallback>
      <div>Loading...</div>
    </template>
  </Suspense>
</template>

<style scoped>
  .load-classes{
    @apply 
      grid-cols-1 
      grid-cols-2 
      grid-cols-3 
      grid-cols-4;
  }
</style>
