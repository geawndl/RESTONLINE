<template>
  <div>
    <RouterView />
    <navBar />
  </div>
</template>

<script>

import navBar from './components/navBar'
// import Tracking from './views/Tracking.vue'

export default {
  name: 'App',
  components: {
  navBar, 
  
  },
  computed :{
    view(){return this.$store.getters.getView}
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
