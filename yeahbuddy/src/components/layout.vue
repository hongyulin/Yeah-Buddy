<template>
	<div>
		<div>
			<myHeader></myHeader>
		</div>
		<div>
			<router-view></router-view>
		</div>
		<div>
			<myFooter></myFooter>
		</div>
	</div>
</template>
<script>
	import myHeader from "./header"
	import myFooter from "./footer"
	export default{
		name:'layout',
		components: {
			myFooter, myHeader
		},
		data(){
			return {

			}
		},
		created(){

		},
		mounted(){

		},
		components:{

		},
		computed: {

		},
		mathods:{
			
		}
	}
</script>