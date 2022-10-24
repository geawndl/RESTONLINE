<template>

<div>
	<header>
		<h2><router-link class = "link" to="/">RESTONLINE</router-link></h2>
		<nav>
		<li><router-link class = "link" to="/commande">Commander</router-link></li>
		<li><router-link class = "link" to="/tracking">Suivi</router-link></li>
		<li><router-link class = "link" to="/login">Connexion</router-link></li>
		<li><router-link class = "link" to="/register">Inscription</router-link></li>
		</nav>
	</header>
</div>

</template>

<script>
    export default{
        name : "navBar",
        data(){
		return {
        }
	},
	
	methods: {

    }
}
</script>

<style scoped>

</style>