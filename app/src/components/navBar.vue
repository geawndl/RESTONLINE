<template>

<div id="main">
	<nav v-bind:class="active" v-on:click.prevent>
	
		<router-link to="/" class="link home" v-on:click="makeActive('home')">Home</router-link>
		<router-link to="/aboutUS" class="link aboutus" v-on:click="makeActive('aboutus')">About us</router-link>
		<router-link to="/services" class="link services" v-on:click="makeActive('services')">Services</router-link>
		<router-link to="/contact" class="link contact" v-on:click="makeActive('contact')">Contact</router-link>
		<router-link to="/login" class="link signin" v-on:click="makeActive('signin')">Sign in</router-link>
		<router-link to="/register" class="link signup" v-on:click="makeActive('signup')">Sign up</router-link>
	</nav>
</div>

</template>

<script>
    export default{
        name : "navBar",
        data(){
		return {
            active : "home"
        }
	},
	
	methods: {
        makeActive(tab){
            this.active = tab
        }
    }
}
</script>

<style scoped>
*{
	margin:0;
	padding:0;
}

body{
	font:15px/1.3 'Open Sans', sans-serif;
	color: #5e5b64;
	text-align:center;
}

.link, .link:visited {
	outline:none;
	color:#389dc1;
}

.link:hover{
	text-decoration:none;
}

section, footer, header, aside, nav{
	display: block;
}

/*-------------------------
	The menu
--------------------------*/

nav{
	display:inline-block;
	background-color:#5597b4;
	box-shadow:0 1px 1px #ccc;
	border-radius:2px;
}

nav .link{
	display:inline-block;
	padding: 18px 30px;
	color:#fff !important;
	font-weight:bold;
	font-size:16px;
	text-decoration:none !important;
	line-height:1;
	text-transform: uppercase;
	background-color:transparent;

	-webkit-transition:background-color 0.25s;
	-moz-transition:background-color 0.25s;
	transition:background-color 0.25s;
}

nav .link:first-child{
	border-radius:2px 0 0 2px;
}

nav.link:last-child{
	border-radius:0 2px 2px 0;
}

nav.home .home,
nav.aboutus .aboutus,
nav.services .services,
nav.signin .signin,
nav.signup .signup,
nav.contact .contact{
	background-color:#e35885;
}

p{
	font-size:22px;
	font-weight:bold;
	color:#7d9098;
}

p b{
	color:#ffffff;
	display:inline-block;
	padding:5px 10px;
	background-color:#c4d7e0;
	border-radius:2px;
	text-transform:uppercase;
	font-size:18px;
}
</style>
