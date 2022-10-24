<template>
  <div>
    <Home v-if = "view === 'home'"/>
    <Login v-if="view === 'login'"/>
    <Register v-if="view === 'register'"/>
    <Commande v-if="view === 'commande'"/>
    <!-- <Tracking v-if="view === tracking"/> -->
  </div>
</template>

<script>
import Home from '@/views/Home.vue'
import Login from '@/views/Login.vue'
import Register from '@/views/Register.vue'
import Commande from '@/views/Commande.vue'
// import Tracking from '@/views/Tracking.vue'

export default {
  name: 'App',
  components: {
    Home,
    Login,
    // Tracking,
    Register,
    Commande
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
