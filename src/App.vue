<template>
  <Suspense>
    <template #default>
      <div class="bg-purple-50">
        <Header/>
        <router-view></router-view>
        <Footer/>
      </div>
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
  html,body{
    margin:0;
    padding:0;
  }
  h1,h2,h3,h4,h5,h6{
    margin:0;
  }
  .container{
    max-width:1200px;
    margin:auto;
    padding: 1rem;
  }
</style>