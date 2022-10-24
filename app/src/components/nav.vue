<template>
    
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